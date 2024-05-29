import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getAuth } from 'firebase/auth'
import { app } from './app/Helpers/firebaseHelper'

export function middleware(request: NextRequest) {
  console.log('Middleware is running for:', request.url)
    const auth = getAuth(app)
    const user = auth.currentUser
    console.log(user,'user is')
    if(user){
        return NextResponse.redirect(new URL('/notfound', request.url))
    }
  
}
 
export const config = {
  matcher: [
            '/admin/dashboard','/admin/adminsidebar',
            '/admin/gallerymanager','/admin/list',
            '/admin/managecourse','/admin/studentlist',
            '/admin/studenttable'
           ]
}
