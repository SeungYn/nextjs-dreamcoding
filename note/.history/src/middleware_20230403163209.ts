import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('미들웨어가 실행되고 있음!');
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어 경로를 리다이렉팅함');
    console.log(request);
    console.log(request.url);
    console.log(new URL('/products', request.url));
    return NextResponse.redirect(new URL('/products', request.url));
  }
}
