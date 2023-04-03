import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('미들웨어가 실행되고 있음!');
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    return NextResponse.redirect(new URL('/products', request.url));
  }
}
