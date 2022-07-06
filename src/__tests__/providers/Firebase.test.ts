describe("Doodle's Firebase Client SDK", () => {
  it('Should have the NEXT_PUBLIC_FIREBASE_API_KEY environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_FIREBASE_API_KEY).toBeDefined();
    expect(process.env.NEXT_PUBLIC_FIREBASE_API_KEY).not.toEqual('');
  });

  it('Should have the NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN).toBeDefined();
    expect(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN).not.toEqual('');
  });

  it('Should have the NEXT_PUBLIC_FIREBASE_DATABASE_URL environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL).toBeDefined();
    expect(process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL).not.toEqual('');
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

  it('Should have the NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID).toBeDefined();
    expect(process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID).not.toEqual('');
  });
});

export {};
