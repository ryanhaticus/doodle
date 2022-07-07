import { getFirestore } from 'firebase-admin/firestore';
import { useFirebaseAdmin } from '@/doodle/server/admin';

export const useFirestore = () => {
  const firebase = useFirebaseAdmin();

  return getFirestore(firebase);
};
