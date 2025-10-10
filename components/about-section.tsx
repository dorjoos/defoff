"use client"

import { Shield, Code, Lock } from "lucide-react"
import Image from "next/image"
import { useTranslations } from '@/hooks/use-translations'

export function AboutSection() {
  const t = useTranslations('about')
  
  const team = [
    {
      name: t('sarahChen.name'),
      role: t('sarahChen.role'),
      image: "/professional-woman-diverse.png",
      icon: Shield,
      bio: t('sarahChen.bio'),
    },
    {
      name: t('marcusRodriguez.name'),
      role: t('marcusRodriguez.role'),
      image: "/professional-man.jpg",
      icon: Code,
      bio: t('marcusRodriguez.bio'),
    },
    {
      name: t('emilyWatson.name'),
      role: t('emilyWatson.role'),
      image: "/professional-woman-executive.png",
      icon: Lock,
      bio: t('emilyWatson.bio'),
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">{t('title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t('description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const Icon = member.icon
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <div className="mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-center">{member.name}</h3>
                  <p className="text-primary font-medium text-center mb-4">{member.role}</p>
                </div>

                <p className="text-muted-foreground text-center leading-relaxed">{member.bio}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
