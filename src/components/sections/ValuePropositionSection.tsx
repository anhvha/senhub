'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Container } from '@/components/ui'

export function ValuePropositionSection() {
  const { valueProposition } = siteConfig

  return (
    <section className="py-20 lg:py-[120px] bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[100px]">
          <div className="flex-1 max-w-[580px]">
            <span className="text-[24px] leading-[1.6] font-normal text-[#7781EF] block mb-4">
              {valueProposition.badge}
            </span>

            <h2 className="text-[40px] md:text-[48px] font-medium leading-[1.35] tracking-[-0.03em] text-[#303030] mb-6">
              {valueProposition.title}
            </h2>

            <p className="text-[20px] leading-[1.6] text-[#616161] tracking-[-0.02em] mb-8">
              {valueProposition.description}
            </p>

            <ul className="space-y-6">
              {valueProposition.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-[20px] h-[20px] rounded-full bg-[#7781EF] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white stroke-[3px]" />
                  </span>
                  <span className="text-[20px] leading-[1.6] tracking-[-0.02em] text-[#616161] font-normal">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 w-full lg:w-auto">
            <div className="flex gap-3 lg:gap-4">
              {/* Column 1 */}
              <div className="flex flex-col gap-3 lg:gap-4 w-[53.5%]">
                <div className="relative w-full pt-[124%] rounded-xl overflow-hidden">
                  <Image
                    src="/images/products/product-1.png"
                    alt="Product showcase 1"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 385px"
                  />
                </div>
                <div className="relative w-full pt-[48%] rounded-xl overflow-hidden">
                  <Image
                    src="/images/products/product-4.png"
                    alt="Product showcase 4"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 385px"
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-3 lg:gap-4 w-[44.8%]">
                <div className="relative w-full pt-[111%] rounded-xl overflow-hidden">
                  <Image
                    src="/images/products/product-2.png"
                    alt="Product showcase 2"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 323px"
                  />
                </div>
                <div className="relative w-full pt-[93%] rounded-xl overflow-hidden">
                  <Image
                    src="/images/products/product-3.png"
                    alt="Product showcase 3"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 323px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
