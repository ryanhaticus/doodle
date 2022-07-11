import { getIdToken, onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ReactNode, useEffect, useState } from 'react';

import Loading from '@/doodle/components/Loading';
import { useFirebase } from '@/doodle/contexts/Firebase';
import { UserContext } from '@/doodle/contexts/User';
import { IUser } from '@/doodle/types/User';

import { setCookie, deleteCookie } from 'cookies-next';
import doodleConfig from '@/doodle/config';
import { useRouter } from 'next/router';

interface IUserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: IUserProviderProps) => {
  const [waitingForFirebase, setWaitingForFirebase] = useState(true);
  const [user, setUser] = useState<IUser>(null);

  const { auth, firestore } = useFirebase();
  const router = useRouter();

  const authObserver = async (user: User) => {
    if (!user) {
      setUser(null);
      setWaitingForFirebase(false);

      deleteCookie('DIT');

      return;
    }

    const { uid } = user;

    const docRef = doc(firestore, `users/${user.uid}`);
    const docSnapshot = await getDoc(docRef);

    const userData = (docSnapshot.data() ?? {
      uid,
    }) as IUser;

    if (!docSnapshot.exists) {
      await setDoc(docRef, userData);
    }

    const token = await getIdToken(user);

    const { redirects, token: tokenConfiguration } =
      doodleConfig.middleware.authentication;
    const { expiry } = tokenConfiguration;
    const { destination, from } = redirects;

    setCookie('DIT', token, {
      maxAge: expiry,
    });

    setUser(userData);
    setWaitingForFirebase(false);

    // cannot use router.asPath as it isn't updated when routes are rewritten by Next
    if (from.includes(window.location.pathname)) {
      router.push(destination);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authObserver);

    return () => unsubscribe();
  }, []);

  if (waitingForFirebase) {
    return (
      <Loading className='absolute z-50 min-h-screen w-full flex items-center justify-center bg-indigo-600 text-white' />
    );
  }

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
