import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip middleware for static files (JSON, CSS, JS, images, etc.)
  if (pathname.includes('.') && !pathname.startsWith('/en/') && !pathname.startsWith('/mn/')) {
    return NextResponse.next()
  }
  
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = ['en', 'mn'].every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/en${pathname}`, request.url)
    )
  }
}

export const config = {
  // Match only internationalized pathnames, exclude static files
  matcher: ['/', '/(mn|en)/:path*', '/((?!.*\\.).*)']
};
