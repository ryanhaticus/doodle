import { getAuth } from 'firebase-admin/auth';
import { useFirebaseAdmin } from '@/doodle/server/admin';

export const useAuth = () => {
  const firebase = useFirebaseAdmin();

  return getAuth(firebase);
};
