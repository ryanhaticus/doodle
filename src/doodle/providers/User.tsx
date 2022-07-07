import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import Loading from '@/doodle/components/Loading';
import { useFirebase } from '@/doodle/contexts/Firebase';
import { UserContext } from '@/doodle/contexts/User';
import { IUser } from '@/doodle/types/User';

interface IUserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: IUserProviderProps) => {
  const { auth, firestore } = useFirebase();

  const [waitingForFirebase, setWaitingForFirebase] = useState(true);
  const [user, setUser] = useState<IUser>(null);

  // TODO: Find out why this isn't firing when a user authenticates.
  const authStateChanged = async (user: User) => {
    if (!user) {
      setUser(null);
      setWaitingForFirebase(false);

      return;
    }

    const docRef = doc(firestore, `users/${user.uid}`);
    const docSnapshot = await getDoc(docRef);
    const userData = docSnapshot.data() as IUser;

    setUser(userData);
    setWaitingForFirebase(false);
  };

  useEffect(() => onAuthStateChanged(auth, authStateChanged), []);

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
