"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useTranslations } from '@/hooks/use-translations'

export function TestimonialsSection() {
  const t = useTranslations('testimonials')
  
  const testimonials = [
    {
      name: t('davidMartinez.name'),
      role: t('davidMartinez.role'),
      content: t('davidMartinez.content'),
      avatar: "/professional-male-executive.jpg",
    },
    {
      name: t('rachelKim.name'),
      role: t('rachelKim.role'),
      content: t('rachelKim.content'),
      avatar: "/professional-asian-woman.png",
    },
    {
      name: t('jamesThompson.name'),
      role: t('jamesThompson.role'),
      content: t('jamesThompson.content'),
      avatar: "/professional-male-cto.jpg",
    },
  ]
  return (
    <section id="testimonials" className="border-b border-border bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">{t('title')}</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            {t('description')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-ring text-ring" />
                  ))}
                </div>
                <p className="mb-6 text-pretty leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
