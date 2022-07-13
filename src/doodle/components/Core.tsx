import { ReactNode } from 'react';

import UserProvider from '@/doodle/providers/User';
import FirebaseProvider from '@/doodle/providers/Firebase';
import { InjectProvider } from 'react-node-inject';
interface ICoreProps {
  children: ReactNode;
}

const Core = ({ children }: ICoreProps) => {
  return (
    <FirebaseProvider>
      <UserProvider>
        <InjectProvider>{children}</InjectProvider>
      </UserProvider>
    </FirebaseProvider>
  );
};

export default Core;
