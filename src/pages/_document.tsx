import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html
      className='h-full scroll-smooth antialiased'
      lang={process.env.NEXT_PUBLIC_DOCUMENT_LANG}
    >
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@100;400;500&display=swap'
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
