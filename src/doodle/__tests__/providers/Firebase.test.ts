describe('Firebase Client SDK (firebase)', () => {
  it('Should have the NEXT_PUBLIC_FIREBASE_API_KEY environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_FIREBASE_API_KEY).toBeDefined();
    expect(process.env.NEXT_PUBLIC_FIREBASE_API_KEY).not.toEqual('');
  });

  it('Should have the NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN).toBeDefined();
    expect(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN).not.toEqual('');
  });

  it('Should have the NEXT_PUBLIC_FIREBASE_PROJECT_ID environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID).toBeDefined();
    expect(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID).not.toEqual('');
  });

  it('Should have the NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET).toBeDefined();
    expect(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET).not.toEqual('');
  });

  it('Should have the NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID).toBeDefined();
    expect(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID).not.toEqual(
      '',
    );
  });

  it('Should have the NEXT_PUBLIC_FIREBASE_APP_ID environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_FIREBASE_APP_ID).toBeDefined();
    expect(process.env.NEXT_PUBLIC_FIREBASE_APP_ID).not.toEqual('');
  });
});

describe('Firebase Admin SDK (firebase-admin)', () => {
  it('Should have the FIREBASE_PROJECT_ID environment variable defined', () => {
    expect(process.env.FIREBASE_PROJECT_ID).toBeDefined();
    expect(process.env.FIREBASE_PROJECT_ID).not.toEqual('');
  });

  it('Should have the FIREBASE_PRIVATE_KEY environment variable defined', () => {
    expect(process.env.FIREBASE_PRIVATE_KEY).toBeDefined();
    expect(process.env.FIREBASE_PRIVATE_KEY).not.toEqual('');
  });

  it('Should have the FIREBASE_CLIENT_EMAIL environment variable defined', () => {
    expect(process.env.FIREBASE_CLIENT_EMAIL).toBeDefined();
    expect(process.env.FIREBASE_CLIENT_EMAIL).not.toEqual('');
  });
});

export {};
