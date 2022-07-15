import { initializeApp, cert, getApp } from 'firebase-admin/app';

export const useFirebaseAdmin = async () => {
  const app = initializeApp(
    {
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      }),
    },
    `doodle-${Date.now()}`,
  );

  return app;
};
