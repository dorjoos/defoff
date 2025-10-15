"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Search, Bug, FileText, Lock } from "lucide-react"
import { useTranslations } from '@/hooks/use-translations'

export function FeaturesSection() {
  const t = useTranslations('features')
  
  const features = [
   
    {
      icon: Bug,
      title: t('webAppSecurity.title'),
      description: t('webAppSecurity.description'),
    },
    {
      icon: Lock,
      title: t('socialEngineering.title'),
      description: t('socialEngineering.description'),
    },
    {
      icon: Search,
      title: t('networkPentesting.title'),
      description: t('networkPentesting.description'),
    },
    {
      icon: FileText,
      title: t('detailedReporting.title'),
      description: t('detailedReporting.description'),
    },
  ]
  return (
    <section id="services" className="border-b border-border bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">{t('title')}</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            {t('description')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card transition-all hover:border-ring/50 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-ring/10">
                  <feature.icon className="h-6 w-6 text-ring" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
