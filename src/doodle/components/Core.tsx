import { ReactNode } from 'react';
import { InjectProvider } from 'react-node-inject';

import UserProvider from '@/doodle/providers/User';
import FirebaseProvider from '@/doodle/providers/Firebase';
import StripeProvider from '@/doodle/providers/Stripe';
interface ICoreProps {
  children: ReactNode;
}

const Core = ({ children }: ICoreProps) => {
  return (
    <FirebaseProvider>
      <StripeProvider>
        <UserProvider>
          <InjectProvider>{children}</InjectProvider>
        </UserProvider>
      </StripeProvider>
    </FirebaseProvider>
  );
};

export default Core;
