import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Container } from '@/components/ui'

const footerLinks = [
  { label: 'Privacy Policy', href: '/senhub-privacy-policy' },
]

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-[200px] pb-12 relative z-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[14px] text-[#A3A3A3] font-normal leading-[1.5]">
            {siteConfig.footer.copyright}
          </p>

          <div className="flex items-center gap-8">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[14px] text-[#A3A3A3] hover:text-white transition-colors font-normal leading-[1.5]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
