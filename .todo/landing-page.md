# Senhub Landing Page - Todo

## Figma Design Reference
- **File**: [Senhub Platform](https://www.figma.com/design/V3FMlzYhjaXSMrunpkQjel/Senhub-Platform)
- **Node**: 2302-65378 (Landing Page V2 - Draft)

---

## 📋 Project Setup

- [ ] Xóa project cũ
- [ ] Khởi tạo Next.js project mới với TypeScript
- [ ] Cài đặt dependencies:
  - Tailwind CSS
  - Lucide React (icons)
  - Framer Motion (animations - optional)
- [ ] Setup folder structure
- [ ] Config fonts: Inter

---

## 🎨 Design Tokens

### Colors (từ Figma)
- **Primary/Main**: Brand color cho buttons
- **Neutral/10**: Text light
- **Background**: #FFFFFF, #0A0A0A (dark sections)
- **Border**: #8A8A8A, #101010

### Typography
- **Heading Large**: Inter 600, 48px, line-height 1.3, letter-spacing -2%
- **Heading Medium**: Inter 600, 24px, line-height 1.2
- **Heading Small**: Inter 600, 18px, line-height 1.2
- **Body**: Inter 450, 13-16px, line-height 1.5
- **Caption**: Inter 500, 14px

---

## 🏗️ Components cần build

### Common Components
- [ ] `Button` - Primary, Outline variants
- [ ] `Badge` - For "New feature" tag
- [ ] `Container` - Max-width wrapper
- [ ] `SectionTitle` - Reusable section header

### Sections
- [ ] `Header` - Navigation bar
- [ ] `HeroSection`
  - Badge: "New feature: Corporate gifts"
  - Title: "Boost Loyalty With Simple, Meaningful Branded Gifts"
  - Description: "Create and branded gift products in minutes - no design skills, no inventory, fully handled inside SenHub."
  - CTA Buttons: "Book a video call" (Primary), "Install app" (Outline)
  - Background pattern (SVG with 10% opacity)
- [ ] `FeatureSection` - Feature cards grid
- [ ] `FAQSection` - Accordion FAQ
- [ ] `Footer`
  - Social links: Instagram, Facebook, Twitter, YouTube
  - Newsletter signup form (email input + button)
  - Copyright text

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   └── Container.tsx
│   └── sections/
│       ├── Header.tsx
│       ├── HeroSection.tsx
│       ├── FeatureSection.tsx
│       ├── FAQSection.tsx
│       └── Footer.tsx
└── lib/
    └── utils.ts
```

---

## 🖼️ Assets cần export từ Figma

- [ ] Logo Senhub
- [ ] Hero background pattern (SVG)
- [ ] Feature icons/illustrations
- [ ] Social media icons (hoặc dùng Lucide)

---

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## 🚀 Deployment

- [ ] Config Netlify/Vercel
- [ ] Setup domain
- [ ] Test production build

---

## ✅ Progress Tracking

| Section | Status | Notes |
|---------|--------|-------|
| Project Setup | ✅ Done | Next.js 15 + TypeScript + Tailwind |
| Config File | ✅ Done | `src/config/site.ts` |
| SEO Optimization | ✅ Done | Meta tags, OpenGraph, Twitter Cards, robots |
| UI Components | ✅ Done | Button, Badge, Container, Input |
| Header | ✅ Done | Fixed header with nav |
| Hero Section | ✅ Done | Badge, title, CTAs - dark bg |
| Value Proposition | ✅ Done | "Turn one-time buyers..." + checklist |
| Simple Section | ✅ Done | Tabs: Platform, Support, Quality, Shipping, Partner |
| Catalog Section | ✅ Done | Product categories grid - purple bg |
| How It Works | ✅ Done | 3 steps with numbers |
| FAQ Section | ✅ Done | Side-by-side layout |
| CTA Section | ✅ Done | Purple gradient background |
| Footer | ✅ Done | Copyright, links, social icons |
| Images | ✅ Done | Downloaded from Figma |
| Responsive | ✅ Done | Fully responsive layouts |
| Analytics | ✅ Done | Mixpanel Integration |
| Deploy | ⏳ Pending | |

---

## 📝 Config File Location

**File**: `src/config/site.ts`

Chứa tất cả các cấu hình:
- `links.calendly` - Link đặt lịch video call
- `links.installApp` - Link cài app Shopify
- `links.social.*` - Links mạng xã hội (Instagram, Facebook, Twitter, YouTube)
- `api.baseUrl` - URL backend API
- `api.endpoints.subscribeNewsletter` - Endpoint đăng ký newsletter
- `hero.*` - Nội dung Hero section
- `features[]` - Danh sách features
- `faq[]` - Danh sách FAQ
