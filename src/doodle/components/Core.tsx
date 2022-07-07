import UserProvider from '@/doodle/providers/User';
import FirebaseProvider from '@/doodle/providers/Firebase';
import ToastProvider from '../providers/Toast';
interface ICoreProps {
  children: React.ReactNode;
}

const Core = ({ children }: ICoreProps) => {
  return (
    <FirebaseProvider>
      <UserProvider>
        <ToastProvider>{children}</ToastProvider>
      </UserProvider>
    </FirebaseProvider>
  );
};

export default Core;
