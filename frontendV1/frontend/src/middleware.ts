import { authkitMiddleware } from '@workos-inc/authkit-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Apply WorkOS AuthKit middleware
const authMiddleware = authkitMiddleware();

// Custom middleware function
export function middleware(request: NextRequest) {
  // Ensure the auth middleware runs first
  const response = authMiddleware(request);
  if (response) return response;

  // You can add custom logic here (e.g., redirect non-authenticated users)
  const user = request.headers.get('x-workos-user');
  if (!user && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Define protected routes (where authentication is required)
export const config = {
  matcher: [
    '/', 
    '/dashboard/:path*', 
    '/admin/:path*', 
    '/profile/:path*', 
    '/settings/:path*'
  ],
};
