import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import PrivacyPolicy from '@/components/senhub-privacy-policy'

export default function PrivacyPolicyPage() {
  return (
    <div className='min-h-screen'>
      <Header showNav={false} />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  )
}
