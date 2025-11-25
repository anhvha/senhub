export const siteConfig = {
  name: 'SenHub',
  description:
    'Create branded gift products in minutes - no design skills, no inventory, fully handled inside SenHub.',
  url: 'https://senhub.com',

  links: {
    calendly: 'https://calendly.com/duongvt-senprints/branded-gift-demo-call',
    installApp: 'https://apps.shopify.com/senhub-global-pod?utm_source=Landingpage&utm_medium=Landing+page+&utm_campaign=BOGOS',
  },

  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://pod-api.senhub.com',
    endpoints: {
      subscribeNewsletter: '/shopify/subscribe',
    },
  },

  hero: {
    badge: 'New feature: Corporate gifts',
    title: 'Boost Loyalty With Simple, Meaningful Branded Gifts',
    description:
      'Create branded gift products in minutes - no design skills, no inventory, fully handled inside SenHub.',
    ctaPrimary: 'Book a video call',
    ctaSecondary: 'Install app',
  },

  valueProposition: {
    badge: 'Why Branded Gifts Work',
    title: 'Turn one-time buyers into lifelong customers',
    description:
      'Branded gifts make customers feel valued - and help your store stand out instantly. Totes, candles, apparel, and other small gifts become daily reminders of your brand, building long-term loyalty with zero extra operations work.',
    features: [
      'Higher repeat purchase rates',
      'Stronger brand identity',
      'Premium customer experience',
      'Works across all niches and store sizes',
    ],
  },

  simpleSection: {
    badge: '"This seems complicated..." (Here\'s the truth)',
    title: 'Gifting doesn’t have to be complicated.\nSenHub makes it simple',
    description:
      'Everything happens in a few guided steps. You don’t need to design, source, warehouse, or ship anything — we handle the backend so you can focus on your brand.',
    cards: [
      {
        icon: 'sparkles',
        title: 'AI Design Engine',
        description: 'Generates on-brand assets instantly',
      },
      {
        icon: 'shopping-bag',
        title: 'No Minimum Orders',
        description: 'Order 1 unit or 10,000',
      },
      {
        icon: 'refresh-ccw',
        title: 'Shopify Sync',
        description: 'Seamless integration',
      },
      {
        icon: 'truck',
        title: 'Global Shipping',
        description: 'We handle logistics entirely',
      },
      {
        icon: 'zap',
        title: 'Fully on-demand',
        description: 'Produced only when ordered',
      },
    ],
  },

  catalog: {
    badge: 'Gift Options You Can Create',
    title: 'A full catalog of meaningful branded gifts',
    description: 'All customizable with your logo, message, brand identity, or AI-generated designs.',
    categories: [
      { icon: 'handbag', label: 'Tote bag' },
      { icon: 'flame', label: 'Candles' },
      { icon: 'coffee', label: 'Mugs' },
      { icon: 'shirt', label: 'Apparel' },
      { icon: 'watch', label: 'Accessories' },
      { icon: 'image', label: 'Poster' },
      { icon: 'sticker', label: 'Stickers' },
      { icon: 'more-horizontal', label: 'And more' },
    ],
  },

  howItWorks: {
    badge: 'How it works',
    title: 'Start gifting in under 10 minutes',
    description: 'Everything happens in a few guided steps. You don’t need to design, source, warehouse, or ship anything — we handle the backend so you can focus on your brand.',
    steps: [
      {
        number: '1',
        title: 'Step 1: Choose your product',
        description:
          'Totes, candles, apparel, mugs, and more.',
        image: '/images/steps/step-1-preview.png',
      },
      {
        number: '2',
        title: 'Step 2: Add your branding',
        description:
          'Upload your logo, add a message, or use AI to generate an on-brand design.',
        image: '/images/steps/step-2-preview.png',
      },
      {
        number: '3',
        title: 'Step 3: Publish or send',
        description:
          'We create, package, and ship automatically - no inventory needed.',
        image: '/images/steps/step-3-preview.png',
      },
    ],
  },

  faq: {
    badge: 'Any questions?',
    title: 'Want to learn more?',
    description:
      'Focus on building your brand while we handle the design, sourcing, production, and global delivery.',
    items: [
      {
        question: 'Do I need design skills?',
        answer:
          'No — our AI can create your design in seconds.',
      },
      {
        question: 'How much does it cost to start?',
        answer:
          'No setup cost. You only pay for items when they’re produced.',
      },
      {
        question: 'Do I need to buy in bulk?',
        answer:
          'No minimums — order one or many.',
      },
      {
        question: 'Can I check the quality?',
        answer:
          'Yes — you can request a sample before launching.',
      },
      {
        question: 'Does it take long to learn?',
        answer:
          'Most merchants learn everything in 5–10 minutes.',
      },
    ],
  },

  cta: {
    title: "Let’s build your first branded gift together",
    description:
      "Please leave your email below so we can contact you as soon as possible.",
    placeholder: 'Enter your email to get started',
    buttonText: 'Submit',
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} SenHub. All rights reserved.`,
    links: ['Privacy Policy'],
  },
}

export type SiteConfig = typeof siteConfig
