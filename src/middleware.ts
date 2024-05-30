"use client"
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('Middleware is running for:', request.url);
  const userStateCookie = request.cookies.get('userState'); // Get the cookie

  const userState = userStateCookie ? userStateCookie.value : undefined; // Extract the value
 console.log('cookie value is :',userState)
  if (userState !== 'true') {
    return NextResponse.redirect(new URL('/notfound', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/dashboard', '/admin/adminsidebar',
    '/admin/gallerymanager', '/admin/list',
    '/admin/managecourse', '/admin/studentlist',
    '/admin/studenttable'
  ]
};
