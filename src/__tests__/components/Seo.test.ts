describe('Doodle SEO Component', () => {
  it('Should have the NEXT_PUBLIC_DOODLE_SEO_DEFAULT_TITLE environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_DOODLE_SEO_DEFAULT_TITLE).toBeDefined();
    expect(process.env.NEXT_PUBLIC_DOODLE_SEO_DEFAULT_TITLE).not.toEqual('');
  });

  it('Should have the NEXT_PUBLIC_DOODLE_SEO_DEFAULT_DESCRIPTION environment variable defined', () => {
    expect(
      process.env.NEXT_PUBLIC_DOODLE_SEO_DEFAULT_DESCRIPTION,
    ).toBeDefined();
    expect(process.env.NEXT_PUBLIC_DOODLE_SEO_DEFAULT_DESCRIPTION).not.toEqual(
      '',
    );
  });

  it('Should have the NEXT_PUBLIC_DOODLE_SEO_TITLE_TEMPLATE environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_DOODLE_SEO_TITLE_TEMPLATE).toBeDefined();
    expect(process.env.NEXT_PUBLIC_DOODLE_SEO_TITLE_TEMPLATE).not.toEqual('');
  });
});

export {};
