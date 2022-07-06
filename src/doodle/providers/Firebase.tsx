import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { FirebaseContext } from '@/doodle/contexts/Firebase';
import Loading from '@/doodle/components/Loading';

interface IFirebaseProviderProps {
  children: React.ReactNode;
}

const FirebaseProvider = ({ children }: IFirebaseProviderProps) => {
  const [app, setApp] = useState<FirebaseApp>(null);
  const [auth, setAuth] = useState<Auth>(null);
  const [firestore, setFirestore] = useState<Firestore>(null);

  useEffect(() => {
    const app = initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    });

    setApp(app);

    const auth = getAuth(app);
    setAuth(auth);

    const firestore = getFirestore(app);
    setFirestore(firestore);
  }, []);

  if (!app || !auth || !firestore) {
    return (
      <Loading className='absolute z-50 min-h-screen w-full flex items-center justify-center bg-indigo-600 text-white' />
    );
  }

  return (
    <FirebaseContext.Provider value={{ app }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
