import { DefaultSeo } from 'next-seo';

const Seo = () => {
  return (
    <>
      <DefaultSeo
        titleTemplate={process.env.NEXT_PUBLIC_DOODLE_SEO_TITLE_TEMPLATE}
        title={process.env.NEXT_PUBLIC_DOODLE_SEO_DEFAULT_TITLE}
        description={process.env.NEXT_PUBLIC_DOODLE_SEO_DEFAULT_DESCRIPTION}
      />
    </>
  );
};

export default Seo;
