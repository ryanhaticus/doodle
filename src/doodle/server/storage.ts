import { getStorage } from 'firebase-admin/storage';
import { useFirebaseAdmin } from '@/doodle/server/admin';

export const useStorage = async () => {
  const firebase = await useFirebaseAdmin();

  return getStorage(firebase);
};
