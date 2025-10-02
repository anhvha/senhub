'use client'

import { Button } from '@/components/ui/button'
import { SHOPIFY_APP_URL } from '@/consts'
import { openInNewTab } from '@/lib/utils'
import { Check, CircleQuestionMark } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className='relative bg-violet-100/30 grid md:grid-cols-[4fr_5fr] md:gap-4 gap-8 lg:pt-12 lg:pb-24 lg:px-32 p-8 items-center'>
      <div className='text-center md:text-left'>
        <div className='font-semibold mb-2 text-lg'>
          <span className='text-primary'>90%</span> faster than traditional POD
        </div>
        <div className='text-3xl font-bold mb-6'>
          SenHub AI Print on Demand. AI-powered.
        </div>
        <ul className='text-base flex flex-col gap-1'>
          <li className='flex gap-2 items-center'>
            <Check size={20} className='text-green-600' />
            Get 20 AI credits for free
          </li>
          <li className='flex gap-2 items-center'>
            <Check size={20} className='text-green-600' />
            Get $500 Promo Credit
            <CircleQuestionMark size={16} />
          </li>
          <li className='flex gap-2 items-center'>
            <Check size={20} className='text-green-600' />
            Launch a POD campaign in just 5 minutes
          </li>
          <li className='flex gap-2 items-center'>
            <Check size={20} className='text-green-600' />
            Access 2 million ready-to-use designs sales
          </li>
        </ul>
        <Button
          className='mt-5'
          size='lg'
          onClick={() => openInNewTab(SHOPIFY_APP_URL)}
        >
          Claim deal
        </Button>
      </div>
      <div className='flex items-center justify-center'>
        <Image
          src='/screenshots/1.png'
          width={600}
          height={800}
          alt='Description'
          className='w-[80%] h-auto rounded-lg transition-opacity duration-500'
        />
      </div>
    </section>
  )
}
