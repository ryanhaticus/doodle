describe('Doodle Logo Component', () => {
  it('Should have the NEXT_PUBLIC_DOODLE_LOGO_SITE_TITLE environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_DOODLE_LOGO_SITE_TITLE).toBeDefined();
    expect(process.env.NEXT_PUBLIC_DOODLE_LOGO_SITE_TITLE).not.toEqual('');
  });

  it('Should have the NEXT_PUBLIC_DOODLE_LOGO_ALT_TEXT environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_DOODLE_LOGO_ALT_TEXT).toBeDefined();
    expect(process.env.NEXT_PUBLIC_DOODLE_LOGO_ALT_TEXT).not.toEqual('');
  });

  it('Should have the NEXT_PUBLIC_DOODLE_LOGO_PATH environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_DOODLE_LOGO_PATH).toBeDefined();
    expect(process.env.NEXT_PUBLIC_DOODLE_LOGO_PATH).not.toEqual('');
  });

  it('Should receive a valid path from the NEXT_PUBLIC_DOODLE_LOGO_PATH environment variable', () => {
    expect(process.env.NEXT_PUBLIC_DOODLE_LOGO_PATH).toMatch(/^\/[^/]+$/);
  });

  it('Should have the NEXT_PUBLIC_DOODLE_LOGO_WIDTH environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_DOODLE_LOGO_WIDTH).toBeDefined();
    expect(process.env.NEXT_PUBLIC_DOODLE_LOGO_WIDTH).not.toEqual('');
  });

  it('Should receive a valid numerical value from the NEXT_PUBLIC_DOODLE_LOGO_WIDTH environment variable', () => {
    expect(process.env.NEXT_PUBLIC_DOODLE_LOGO_WIDTH).toMatch(/^\d+$/);
  });

  it('Should have the NEXT_PUBLIC_DOODLE_LOGO_HEIGHT environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_DOODLE_LOGO_HEIGHT).toBeDefined();
    expect(process.env.NEXT_PUBLIC_DOODLE_LOGO_HEIGHT).not.toEqual('');
  });

  it('Should receive a valid numerical value from the NEXT_PUBLIC_DOODLE_LOGO_HEIGHT environment variable', () => {
    expect(process.env.NEXT_PUBLIC_DOODLE_LOGO_HEIGHT).toMatch(/^\d+$/);
  });
});

export {};
