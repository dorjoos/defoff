"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"
import { useTranslations } from '@/hooks/use-translations'

export function CTASection() {
  const t = useTranslations('cta')
  return (
    <section className="border-b border-border bg-ring py-20 text-background md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-sm font-medium">
            <Shield className="h-4 w-4" />
            {t('badge')}
          </div>
          <h2 className="mb-6 text-balance text-3xl font-bold md:text-5xl">
            {t('title')}
          </h2>
          <p className="mb-10 text-pretty text-lg text-background/90">
            {t('description')}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="group bg-background text-ring hover:bg-background/90">
              {t('scheduleConsultation')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/20 bg-transparent text-background hover:bg-background/10"
            >
              {t('downloadReport')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
