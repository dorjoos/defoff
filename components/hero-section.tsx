"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Activity, Lock, Zap } from "lucide-react"
import { useTranslations } from '@/hooks/use-translations'

export function HeroSection() {
  const t = useTranslations('hero')
  
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ring/20 bg-ring/10 px-4 py-1.5 text-sm font-medium text-ring">
            <Shield className="h-4 w-4" />
            {t('badge')}
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {t('title')}
          </h1>

          <p className="mb-10 text-pretty text-lg text-muted-foreground md:text-xl">
            {t('description')}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group bg-ring text-background hover:bg-ring/90">
              {t('scheduleAssessment')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="group bg-transparent">
              {t('viewSampleReport')}
            </Button>
          </div>

          <div className="mt-12 text-sm text-muted-foreground">
            {t('trustedBy')}
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <div className="rounded-lg bg-ring/10 p-3">
                <Shield className="h-6 w-6 text-ring" />
              </div>
            </div>
            <div className="mb-2 text-3xl font-bold text-ring md:text-4xl">500+</div>
            <div className="text-sm text-muted-foreground">{t('stats.securityAudits')}</div>
          </div>
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <div className="rounded-lg bg-ring/10 p-3">
                <Activity className="h-6 w-6 text-ring" />
              </div>
            </div>
            <div className="mb-2 text-3xl font-bold text-ring md:text-4xl">10K+</div>
            <div className="text-sm text-muted-foreground">{t('stats.vulnerabilitiesFound')}</div>
          </div>
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <div className="rounded-lg bg-ring/10 p-3">
                <Lock className="h-6 w-6 text-ring" />
              </div>
            </div>
            <div className="mb-2 text-3xl font-bold text-ring md:text-4xl">24/7</div>
            <div className="text-sm text-muted-foreground">{t('stats.threatMonitoring')}</div>
          </div>
          <div className="text-center">
            <div className="mb-3 flex justify-center">
              <div className="rounded-lg bg-ring/10 p-3">
                <Zap className="h-6 w-6 text-ring" />
              </div>
            </div>
            <div className="mb-2 text-3xl font-bold text-ring md:text-4xl">100%</div>
            <div className="text-sm text-muted-foreground">{t('stats.clientSatisfaction')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
