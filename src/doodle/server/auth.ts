import { getAuth } from 'firebase-admin/auth';
import { useFirebaseAdmin } from '@/doodle/server/admin';

export const useAuth = async () => {
  const firebase = await useFirebaseAdmin();

  return getAuth(firebase);
};
