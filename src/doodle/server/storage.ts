import { getStorage } from 'firebase-admin/storage';
import { useFirebaseAdmin } from '@/doodle/server/admin';

export const useStorage = () => {
  const firebase = useFirebaseAdmin();

  return getStorage(firebase);
};
