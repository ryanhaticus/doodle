import FirebaseProvider from '@/doodle/providers/Firebase';

interface ICoreProps {
  children: React.ReactNode;
}

const Core = ({ children }: ICoreProps) => {
  return <FirebaseProvider>{children}</FirebaseProvider>;
};

export default Core;
