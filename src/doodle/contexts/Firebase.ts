import { FirebaseApp } from 'firebase/app';
import { createContext, useContext } from 'react';

interface IFirebaseContext {
  app: FirebaseApp;
}

export const FirebaseContext = createContext<IFirebaseContext>(null);

export const useFirebase = () => useContext<IFirebaseContext>(FirebaseContext);
