"use client"

import { Award, Shield, CheckCircle2, CreditCard } from "lucide-react"
import { useTranslations } from '@/hooks/use-translations'

export function CertificationsSection() {
  const t = useTranslations('certifications')
  
  const certifications = [
    {
      name: t('oscp.name'),
      fullName: t('oscp.fullName'),
      icon: Shield,
      description: t('oscp.description'),
    },
    {
      name: t('oswe.name'),
      fullName: t('oswe.fullName'),
      icon: Award,
      description: t('oswe.description'),
    },
    {
      name: t('iso27001.name'),
      fullName: t('iso27001.fullName'),
      icon: CheckCircle2,
      description: t('iso27001.description'),
    },
    {
      name: t('pciDss.name'),
      fullName: t('pciDss.fullName'),
      icon: CreditCard,
      description: t('pciDss.description'),
    },
  ]

  return (
    <section className="border-b border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t('title')}
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => {
            const Icon = cert.icon
            return (
              <div
                key={cert.name}
                className="group relative overflow-hidden rounded-lg border border-border bg-background p-6 transition-all hover:border-ring/50 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-ring/10 p-2.5 transition-colors group-hover:bg-ring/20">
                    <Icon className="h-5 w-5 text-ring" />
                  </div>
                  <div className="text-xl font-bold text-foreground">{cert.name}</div>
                </div>
                <div className="mb-2 text-sm font-medium text-foreground">{cert.fullName}</div>
                <div className="text-xs text-muted-foreground">{cert.description}</div>

                {/* Subtle hover effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ring/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
