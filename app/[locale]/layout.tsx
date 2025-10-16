import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { notFound } from 'next/navigation'
import "../globals.css"
import { Suspense } from "react"
import { locales } from "../../i18n"

export const metadata: Metadata = {
  title: "Def-Off - Cybersecurity Pentesting",
  description: "Expert penetration testing and vulnerability assessments",
  generator: "v0.app",
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()
  
  return (
    <html lang={locale} className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider defaultTheme="dark">
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
