"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useTranslations } from '@/hooks/use-translations'

export function PricingSection() {
  const t = useTranslations('pricing')
  
  const plans = [
    {
      name: t('essential.name'),
      price: t('essential.price'),
      description: t('essential.description'),
      features: t('essential.features'),
      cta: t('essential.cta'),
      popular: false,
    },
    {
      name: t('professional.name'),
      price: t('professional.price'),
      description: t('professional.description'),
      features: t('professional.features'),
      cta: t('professional.cta'),
      popular: true,
    },
    {
      name: t('enterprise.name'),
      price: t('enterprise.price'),
      description: t('enterprise.description'),
      features: t('enterprise.features'),
      cta: t('enterprise.cta'),
      popular: false,
    },
  ]
  return (
    <section id="pricing" className="border-b border-border bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">{t('title')}</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            {t('description')}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-border ${plan.popular ? "border-ring shadow-lg shadow-ring/20" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-ring px-4 py-1 text-sm font-medium text-background">
                    {t('mostPopular')}
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== t('enterprise.price') && <span className="text-muted-foreground">{t('perAssessment')}</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-ring" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "bg-ring text-background hover:bg-ring/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
