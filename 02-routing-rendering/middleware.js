import {NextResponse} from 'next/server';

export function middleware(req) {
  console.log('-- req:', req);
  return NextResponse.next()
}

export const config = {
  matcher: '/news',
}