import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import DoodleConfig from '@/doodle/config';

export const middleware = async (request: NextRequest) => {
  const { secured, fallback } = DoodleConfig.middleware.authentication;

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

  const SID = request.cookies.get('SID');

  if (!SID) {
    return NextResponse.redirect(new URL(fallback, request.url));
  }

  return NextResponse.next();
};
