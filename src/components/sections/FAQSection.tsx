'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Container } from '@/components/ui'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-[#101010] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-[18px] font-semibold text-[#101010] leading-[1.2]">{question}</span>
        <ChevronDown
          className={`w-6 h-6 text-[#101010] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-[14px] text-[#616161] leading-[1.5] font-normal">{answer}</p>
      </div>
    </div>
  )
}

export function FAQSection() {
  const { faq } = siteConfig
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[140px]">
          <div className="flex-1 max-w-[653px]">
            <span className="text-[24px] leading-[1.6] font-normal text-[#6C70DD] block mb-4">
              {faq.badge}
            </span>

            <h2 className="text-[48px] font-medium leading-[1.3] tracking-[-0.02em] text-[#0A0A0A] mb-6">
              {faq.title}
            </h2>

            <p className="text-[16px] text-[#616161] leading-[1.6] tracking-[-0.02em] max-w-[400px]">
              {faq.description}
            </p>
          </div>

          <div className="flex-1">
            <div className="bg-white p-4 lg:p-0">
              {faq.items.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
