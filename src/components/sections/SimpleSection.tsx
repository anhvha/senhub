'use client'

import {
  Sparkles,
  ShoppingBag,
  RefreshCcw,
  Globe,
  Truck,
  Zap,
  LucideIcon,
  Layout,
} from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Container } from '@/components/ui'

const iconMap: Record<string, LucideIcon> = {
  'sparkles': Sparkles,
  'shopping-bag': ShoppingBag,
  'refresh-ccw': RefreshCcw,
  'globe': Globe,
  'truck': Truck,
  'zap': Zap,
}

export function SimpleSection() {
  const { simpleSection } = siteConfig

  return (
    <section className="py-20 lg:py-[120px] bg-white">
      <Container>
        <div className="text-center mb-[80px]">
          <span className="text-[24px] leading-[1.6] font-normal text-[#6C70DD] block mb-4">
            {simpleSection.badge}
          </span>

          <h2 className="text-[40px] md:text-[48px] font-medium leading-[1.3] tracking-[-0.02em] text-[#303030] whitespace-pre-line max-w-[900px] mx-auto mb-6">
            {simpleSection.title}
          </h2>

          <p className="text-[16px] md:text-[20px] leading-[1.6] text-[#616161] tracking-[-0.02em] max-w-[800px] mx-auto">
            {simpleSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {simpleSection.cards.map((card, index) => {
            const Icon = iconMap[card.icon] || Layout

            return (
              <div
                key={index}
                className="
                  flex flex-col p-6 rounded-xl border transition-all h-full group cursor-pointer
                  bg-white border-[#E5E5E5] 
                  hover:bg-[#7781EF] hover:border-[#FFF4ED] hover:shadow-sm
                "
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white border border-[#E5E5E5]/40 text-[#7781EF] group-hover:bg-white/25 group-hover:border-white/15 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-[18px] font-semibold leading-[1.4] tracking-[-0.012em] mb-2 text-[#303030] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-white/50 transition-colors">
                  {card.title}
                </h3>

                <p className="text-[13px] leading-[1.5] tracking-[-0.012em] text-[#737373] group-hover:text-[#FAFAFA] transition-colors">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
