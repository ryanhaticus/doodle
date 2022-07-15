import stripe from 'stripe';

import '@/styles/tailwindcss/directives.css';

import Seo from '@/doodle/components/Seo';
import Head from '@/doodle/components/Head';
import Core from '@/doodle/components/Core';

const DoodleApp = ({ Component, pageProps }) => {
  return (
    <>
      <Seo />
      <Head />
      <Core>
        <Component {...pageProps} />
      </Core>
    </>
  );
};

export default DoodleApp;
