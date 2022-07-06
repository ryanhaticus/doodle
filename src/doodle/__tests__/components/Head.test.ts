describe('Doodle Head Component', () => {
  it('Should have the NEXT_PUBLIC_DOODLE_HEAD_FAVICON_PATH environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_DOODLE_HEAD_FAVICON_PATH).toBeDefined();
    expect(process.env.NEXT_PUBLIC_DOODLE_HEAD_FAVICON_PATH).not.toEqual('');
  });

  it('Should have the NEXT_PUBLIC_DOODLE_HEAD_FAVICON_PATH_TYPE environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_DOODLE_HEAD_FAVICON_PATH_TYPE).toBeDefined();
    expect(process.env.NEXT_PUBLIC_DOODLE_HEAD_FAVICON_PATH_TYPE).not.toEqual(
      '',
    );
  });
});

export {};
