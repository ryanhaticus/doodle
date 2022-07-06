describe('HTML Document Root', () => {
  it('Should have the NEXT_PUBLIC_DOCUMENT_LANG environment variable defined', () => {
    expect(process.env.NEXT_PUBLIC_DOCUMENT_LANG).toBeDefined();
    expect(process.env.NEXT_PUBLIC_DOCUMENT_LANG).not.toEqual('');
  });
});

export {};
