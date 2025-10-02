'use client'

import { APP_NAME } from '@/consts'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is SenHub AI and how does it work?',
    answer:
      'SenHub AI is an AI-powered POD platform that quickly creates designs and mockups, helping sellers launch campaigns in minutes.',
  },
  {
    question: 'How many designs can I create with my credits?',
    answer:
      'Each AI credit allows you to generate one design. You can use your credits to create as many designs as your balance allows.',
  },
  {
    question: "Can I use SenHub AI designs for commercial purposes?",
    answer: "Absolutely. Every design you create with SenHub AI comes with full commercial rights — you're free to sell them anywhere, with no restrictions.",
  },
    {
    question: "How is SenHub AI different from other AI image platforms?",
    answer: "We built SenHub AI specifically for print-on-demand sellers. Our AI doesn't just create beautiful designs — it creates designs that sell. Unlike other platforms, we remove all the technical noise (no models, no GPU setup, no jargon), so you can stay focused on creating and growing your business.",
  },
  {
    question: 'What kind of support do you provide?',
    answer:
      'Support via chat, email, and video calls whenever you need help with designs or campaigns.',
  },
  {
    question: 'Can I try SenHub AI before committing to a paid plan?',
    answer:
      'Yes! SenHub AI offers a free trial with 20 AI credits so you can explore design generation, mockups, and campaign creation before choosing a paid plan.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id='faq' className='lg:pt-12 lg:pb-24 lg:px-32 p-8'>
      <div className='container mx-auto px-4'>
        <div className='text-center space-y-4 md:mb-16 mb-4'>
          <h2 className='text-4xl font-bold text-balance'>
            Frequently Asked Questions
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-balance'>
            Find answers to common questions about {APP_NAME}.
            
             {/* Can&apos;t find what
            you&apos;re looking for?
            <a href='#' className='text-primary hover:underline ml-1'>
              Contact our support team
            </a>
            . */}
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className='bg-card border border-border/50 rounded-lg overflow-hidden'
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors'
                >
                  <span className='font-semibold text-lg pr-4'>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className='h-5 w-5 text-muted-foreground flex-shrink-0' />
                  ) : (
                    <ChevronDown className='h-5 w-5 text-muted-foreground flex-shrink-0' />
                  )}
                </button>
                {openIndex === index && (
                  <div className='px-6 pb-4'>
                    <p className='text-muted-foreground leading-relaxed'>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? We&apos;re here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                Join Discord Community
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
