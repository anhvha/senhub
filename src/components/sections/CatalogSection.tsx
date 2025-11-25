'use client'

import {
  ShoppingBag,
  Flame,
  Coffee,
  Shirt,
  Watch,
  Image as ImageIcon,
  Sticker,
  MoreHorizontal,
  LucideIcon,
} from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Container } from '@/components/ui'

const iconMap: Record<string, LucideIcon> = {
  'shopping-bag': ShoppingBag,
  'flame': Flame,
  'coffee': Coffee,
  'shirt': Shirt,
  'watch': Watch,
  'image': ImageIcon,
  'sticker': Sticker,
  'more-horizontal': MoreHorizontal,
}

export function CatalogSection() {
  const { catalog } = siteConfig

  return (
    <section className="py-20 lg:py-[120px] bg-[#7781EF]">
      <Container>
        <div className="text-center mb-[80px]">
          <span className="text-[24px] leading-[1.6] font-normal text-white block mb-4">
            {catalog.badge}
          </span>

          <h2 className="text-[40px] md:text-[48px] font-medium leading-[1.3] tracking-[-0.02em] text-white mb-6">
            {catalog.title}
          </h2>

          <p className="text-[18px] leading-[1.6] tracking-[-0.012em] text-white/80 max-w-[600px] mx-auto">
            {catalog.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {catalog.categories.map((category, index) => {
            const Icon = iconMap[category.icon] || ShoppingBag

            return (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-xl border border-[#F2F2F2] shadow-[0px_4px_74px_0px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#F7F7F7] group-hover:bg-[#7781EF] transition-colors flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#303030] group-hover:text-white transition-colors" />
                </div>
                <span className="text-[20px] font-semibold leading-[1.4] tracking-[-0.012em] text-[#303030] text-center">
                  {category.label}
                </span>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
