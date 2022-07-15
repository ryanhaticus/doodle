import { getFirestore } from 'firebase-admin/firestore';
import { useFirebaseAdmin } from '@/doodle/server/admin';

export const useFirestore = async () => {
  const firebase = await useFirebaseAdmin();

  return getFirestore(firebase);
};
