import NextHead from 'next/head';

const Head = () => {
  return (
    <NextHead>
      <link
        rel='icon'
        href={process.env.NEXT_PUBLIC_DOODLE_HEAD_FAVICON_PATH}
        type={process.env.NEXT_PUBLIC_DOODLE_HEAD_FAVICON_TYPE}
      />
    </NextHead>
  );
};

export default Head;
