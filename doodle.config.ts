const doodleConfig = {
  next: {
    document: {
      language: 'en',
    },
  },
  components: {
    seo: {
      titleTemplate: '%s - Doodle',
      default: {
        title: 'Welcome',
        description:
          'Doodle is an opinionated starter kit built on the NextJS framework for Firebase. Doodle aims to jump start web application development and allows developers to build production-ready applications without having to worry about complex directory structures, the user authentication pipline, SEO, etc.',
      },
    },
    head: {
      favicon: {
        path: '/favicon.svg',
        type: 'image/svg+xml',
      },
    },
    logo: {
      srText: 'Doodle',
      altText:
        'The logo of Doodle. A spheric orb with a indigo gradient across the middle featuring a white scribbled line across the middle.',
      path: '/favicon.svg',
      width: 200,
      height: 200,
    },
  },
  middleware: {
    authentication: {
      secured: ['/app'],
      fallback: '/auth/sign-in',
    },
  },
};

export default doodleConfig;
