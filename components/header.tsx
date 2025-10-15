"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Moon, Sun, Globe } from "lucide-react"
import { useState } from "react"
import { useTheme } from "@/components/theme-provider"
import { useTranslations, useLocale } from '@/hooks/use-translations'
import { useRouter, usePathname } from 'next/navigation'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const t = useTranslations('header')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLocale: string) => {
    // Remove current locale from pathname and add new locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    const newPath = `/${newLocale}${pathWithoutLocale}`
    router.push(newPath)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ring">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5 text-background"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="text-xl font-bold"><span className="text-ring" style={{ color: "#006ef5ff" }}>DEF</span>/-OFF</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="#services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t('services')}
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t('about')}
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t('resources')}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden md:inline-flex"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => switchLanguage(locale === 'en' ? 'mn' : 'en')}
              className="flex items-center gap-1"
            >
              <Globe className="h-4 w-4" />
              {locale === 'en' ? 'MN' : 'EN'}
            </Button>
          </div>

          <Button variant="ghost" className="hidden md:inline-flex">
            {t('contactUs')}
          </Button>
          <Button className="bg-ring text-background hover:bg-ring/90">{t('getAssessment')}</Button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background p-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="#services" className="text-sm font-medium">
              {t('services')}
            </Link>
            <Link href="#about" className="text-sm font-medium">
              {t('about')}
            </Link>
            <Link href="#" className="text-sm font-medium">
              {t('resources')}
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={() => switchLanguage(locale === 'en' ? 'mn' : 'en')}
              className="justify-start"
            >
              <Globe className="mr-2 h-4 w-4" />
              {locale === 'en' ? 'Монгол хэл' : 'English'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="justify-start"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="mr-2 h-4 w-4" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="mr-2 h-4 w-4" />
                  Dark Mode
                </>
              )}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
