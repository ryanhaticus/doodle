import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import DoodleConfig from '@/doodle/config';

export const middleware = async (request: NextRequest) => {
  const { secured, redirects } = DoodleConfig.middleware.authentication;
  const { fallback } = redirects;

  let isSecured = false;

  for (let path of secured) {
    if (request.nextUrl.pathname.startsWith(path)) {
      isSecured = true;
      break;
    }
  }

  if (!isSecured) {
    return NextResponse.next();
  }

  const DIT = request.cookies.get('DIT');

  if (!DIT) {
    return NextResponse.redirect(new URL(fallback, request.url));
  }

  return NextResponse.next();
};
