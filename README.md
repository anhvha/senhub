# SenHub Landing Page

A modern landing page built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Configuration

All site configuration is centralized in `src/config/site.ts`:

- **Links**: Social media, Calendly, Shopify app
- **API**: Backend endpoints for newsletter subscription
- **Content**: Hero text, features, FAQ items

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL |

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Container.tsx
│   │   └── Input.tsx
│   └── sections/          # Page sections
│       ├── HeroSection.tsx
│       ├── ValuePropositionSection.tsx
│       ├── SimpleSection.tsx
│       ├── CatalogSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── FAQSection.tsx
│       └── Footer.tsx
└── config/
    └── site.ts            # Site configuration
```

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## License

MIT
