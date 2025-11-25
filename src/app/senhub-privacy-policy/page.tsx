import { Container } from '@/components/ui'

export const metadata = {
  title: 'Privacy Policy',
  description: 'SenHub Privacy Policy - Learn how we collect, use, and protect your information.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-[40px] md:text-[48px] font-medium leading-[1.3] tracking-[-0.02em] text-[#303030] mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none">
              <Section title="Introduction">
                <p>
                  We take seriously the privacy of our website Members and Visitors.
                  Please read this privacy policy to learn more about how we treat
                  information, including personally identifiable information, in
                  connection with your use of the senhub.com website and online
                  service (the &ldquo;Service&rdquo;). We provide this privacy policy because you
                  have a right to know what information we collect, how it is used and
                  protected, and the circumstances under which it may be shared or
                  disclosed. If you have comments, suggestions, questions, or concerns
                  regarding our privacy policy, please contact us at{' '}
                  <a href="mailto:privacy@senhub.com" className="text-[#7781EF] hover:underline">
                    privacy@senhub.com
                  </a>.
                </p>
              </Section>

              <Section title="What This Policy Covers">
                <p>
                  This policy covers the ways we treat information, including
                  personally identifiable information, that we obtain from you when
                  you visit our website, order Products through the Service, register
                  to become a Member of the Service, or join our VIP Seller Program.
                  We regard &ldquo;personally identifiable information&rdquo; as information we
                  obtain from you that someone can use to identify or contact you in
                  person, such as your real name, telephone number, email address, or
                  physical mailing address. Information that we use internally to
                  identify you as a Member or a Visitor in our system (e.g., your User
                  ID) is not considered personally identifiable information.
                </p>
              </Section>

              <Section title="What This Policy Does Not Cover">
                <p>
                  This policy does not cover the privacy practices of third parties,
                  such as the practices of third-party payment processing or delivery
                  services, or our Sellers, partners, and/or advertisers. In addition,
                  we may provide links to other services and on occasion to other
                  websites that may interest you. All of these websites operate
                  independently of the Service and each has its own privacy and
                  security practices. We encourage you to review their policies before
                  submitting any personal information to them.
                </p>
              </Section>

              <Section title="Consent To Collection & Processing">
                <p>
                  By using the Service, you consent to having your information,
                  including personally identifiable information, transferred to and
                  processed in the United States and Singapore.
                </p>
              </Section>

              <MainHeading>How We Collect Information</MainHeading>

              <Section title="Information You Provide During Account Creation">
                <p>
                  When you create a registered Member account through the Service, we
                  require that you provide your name, phone number, email address, and
                  your website URL (if applicable). If you chose to enroll in our
                  Seller Program, you must also provide us with your physical address
                  and a description of your business.
                </p>
              </Section>

              <Section title="Information You Provide When Purchasing Products">
                <p>
                  When you purchase a Product through the Service, we require that you
                  provide your name, phone number, email address, shipping address,
                  and appropriate payment information.
                </p>
              </Section>

              <Section title="Information You Provide When Requesting Assistance">
                <p>
                  When you request assistance through or regarding the Service, you
                  may also provide us with personally identifiable information. For
                  example, if you email us regarding an order, you will provide us
                  with your email address; if you email us regarding a shipping issue,
                  you will provide us with your physical address.
                </p>
              </Section>

              <MainHeading>Other Information We Collect</MainHeading>

              <Section title="Log Files & Analytics">
                <p>
                  Similar to many websites and internet services, we gather certain
                  information automatically and store it in web server log files. This
                  information includes your web request, Internet Protocol (&ldquo;IP&rdquo;)
                  address information, unique device identifier (e.g., UDID, MAC
                  Address, etc.), browser type, referring / exit pages and URLs,
                  number of clicks, domain names, landing pages, pages viewed, and
                  other such information. We may analyze such data using our own
                  analytics, Google Analytics, Mixpanel, or other similar third-party services.
                  We use these log files and analytics to improve and administer our site,
                  to analyze trends, and to gather information about our user base.
                </p>
              </Section>

              <Section title="Pixels & Web Beacons">
                <p>
                  We may employ pixels, aka web beacons, which are small blocks of
                  code that do things like allow us or another server to measure
                  viewing of a webpage and to track the online usage patterns of our
                  Members and Visitors. In addition, we may also use pixels or web
                  beacons in HTML-based emails we send, to help us track which emails
                  are opened by recipients. This information is used to enable more
                  accurate reporting, improve the effectiveness of our marketing, and
                  make the Service better for our Members and Visitors.
                </p>
              </Section>

              <Section title="Cookies">
                <p>
                  A cookie is a small text file that is stored on the computer of
                  Members or Visitors for record-keeping purposes. It can also help
                  us understand how you click to our site, what pages you view
                  during your visit, and your account and preference information as
                  a Member of the Service. Cookies also allow us to track and
                  understand the interests of our members, to help us enhance the
                  overall experience on our site.
                </p>
                <p>
                  If you prefer not to receive cookies, you can set your web browser
                  software to disable them. To do so, please refer to the help
                  section of your specific web browser for more information on how
                  to manage or disable cookies.
                </p>
              </Section>

              <Section title="Do Not Track">
                <p>
                  At this time, the Service does not respond to &ldquo;do not track&rdquo; signals
                  sent from browsers.
                </p>
              </Section>

              <MainHeading>Information We Do Not Collect</MainHeading>

              <Section title="Children">
                <p>
                  As explained further in our terms of use, you must be 18 years of
                  age or older – or, if you are under the age of majority in your
                  jurisdiction, have the consent of your parent or legal guardian – to
                  use the Service. We do not knowingly collect personally identifiable
                  information from children. In accordance with the Federal Children&apos;s
                  Online Privacy Protection Act of 1998 (&ldquo;COPPA&rdquo;), we will never
                  knowingly solicit, nor will we accept, personally identifiable
                  information from those known to be under thirteen (13) years of age.
                  If you believe that we have information from or about anyone under
                  thirteen (13) years of age, please notify our Privacy Officer by
                  email at{' '}
                  <a href="mailto:privacy@senhub.com" className="text-[#7781EF] hover:underline">
                    privacy@senhub.com
                  </a>.
                </p>
              </Section>

              <Section title="Payment Information">
                <p>
                  The Service makes it quick and convenient for you to make purchases
                  and receive funds using third party electronic payment processing
                  services. When you make such a payment or receive funds, we will not
                  receive any additional personally identifiable information as a
                  result of these transactions. Third-party payment providers operate
                  independently of our business; we encourage you to fully review the
                  terms of use and privacy policies of any such service you may elect
                  to use.
                </p>
              </Section>

              <MainHeading>How We Use Information</MainHeading>

              <Section title="To Provide You With The Service">
                <p>
                  We use your information for the purposes of providing you with the
                  Service and any Products you may choose to order using the Service.
                </p>
              </Section>

              <Section title="In Our Communications With You">
                <p>
                  We use email and/or prominent notifications on our website as our
                  primary means of informing our users of important Service and
                  promotional announcements.
                </p>
              </Section>

              <Section title="Service-Related Announcements">
                <p>
                  When you register to become a Member of the Service, we use the
                  email address provided during account creation (or any other email
                  address you may specify within your Member account) to deliver
                  important Service-related announcements to you. Examples of
                  Service-related announcements include email verification during
                  registration, requests for password reset, important security or
                  server maintenance updates, upgrades, and new releases or policy
                  changes. These Service-related announcements are considered a
                  fundamental part of the Service; Members cannot opt out of these
                  email announcements.
                </p>
              </Section>

              <Section title="Promotional Announcements">
                <p>
                  In order to improve the experience for our Members and Visitors, we
                  may send regular updates from time to time. These communications are
                  enhancements to our Service and are entirely optional. We make it
                  easy for you to unsubscribe from these communications via a link in
                  the footer of each such email you receive.
                </p>
              </Section>

              <Section title="For Internal Reporting and Analysis">
                <p>
                  As noted above, we use information gathered from log files, cookies,
                  and the like to improve our site, analyze trends, administer the
                  site, track the movements of users around the site, and gather
                  aggregate information about our customers as a whole.
                </p>
              </Section>

              <MainHeading>How We Share and Disclose Information</MainHeading>

              <Section title="To Provide You With The Service">
                <p>
                  We share your information, including your personally identifiable
                  information, for the purpose of providing you with the Service and
                  with any Product you may order through the Service. For example, if
                  you order a physical Product though the Service, we will provide our
                  shipping partners with your name and physical address.
                </p>
              </Section>

              <Section title="Third-Party Service Providers">
                <p>
                  We use other companies, agents, and/or contractors to perform
                  services on our behalf or to assist us with providing the Service
                  to you. For example, we may engage such service providers to
                  provide marketing, communications, infrastructure and IT services,
                  personalize and optimize our service, process credit card
                  transactions, provide customer service, collect debts, and analyze
                  and enhance data. In the course of providing such services to us,
                  these other companies may have access to your information. We do
                  not authorize these companies to use or disclose your personal
                  information, except in connection with providing the services we
                  request from them.
                </p>
              </Section>

              <Section title="Legal Requirements">
                <p>
                  We reserve the right to disclose your information, including your
                  personally identifiable information, when we have a good faith
                  belief that access, use, preservation, or disclosure of such
                  information is necessary to (a) comply with any law, regulation,
                  legal process, or enforceable governmental request; (b) enforce
                  our terms of use, including investigation of potential violations
                  of our terms of use; (c) detect, prevent, or otherwise address
                  fraud or security or technical issues; or (d) protect against harm
                  to our rights, property, or safety, or those of our employees,
                  users, or the public, as required or permitted by law.
                </p>
              </Section>

              <MainHeading>How We Keep Information Secure</MainHeading>

              <Section title="Security Of Account Information">
                <p>
                  The accounts of registered Members are password protected. Please
                  do not share your password with anyone; remember to change your
                  password from time to time, to keep your account secure.
                </p>
              </Section>

              <Section title="Network Security">
                <p>
                  Both we and our partners employ a variety of commercially standard
                  encryption and security technologies and procedures to protect
                  information from unauthorized access. Please be aware that no
                  method of electronic storage or data transmission over the
                  internet is 100% secure; while we strive to use commercially
                  acceptable means to protect your personal information, we cannot
                  guarantee its absolute security.
                </p>
              </Section>

              <MainHeading>Your Personal Choices</MainHeading>

              <Section title="Access To Personal Information">
                <p>
                  We make it easy for Members to view, edit, and/or delete the
                  information they have submitted to the Service; that information
                  is available for editing in the &ldquo;Settings&rdquo; section of your Member
                  account.
                </p>
              </Section>

              <Section title="Editing / Deleting Your Account">
                <p>
                  To remove your Member account from the Service entirely, please
                  contact us by email at{' '}
                  <a href="mailto:privacy@senhub.com" className="text-[#7781EF] hover:underline">
                    privacy@senhub.com
                  </a>.
                </p>
              </Section>

              <Section title="Updates to Our Privacy Policy">
                <p>
                  From time to time, we will review and may make changes to our
                  privacy policy. Please check our Privacy Policy periodically for
                  changes. We will provide additional notice of significant
                  updates. We will post the date our Policy was last updated at
                  the top of the Privacy Policy. Your continued use of the Service
                  after the posting of the modified Privacy Policy constitutes
                  your agreement to abide and be bound by it.
                </p>
                <p>
                  If you have any questions about this privacy policy, the
                  practices of the Service, or your dealings with the Service,
                  please contact us at{' '}
                  <a href="mailto:privacy@senhub.com" className="text-[#7781EF] hover:underline">
                    privacy@senhub.com
                  </a>.
                </p>
              </Section>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

function MainHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[28px] md:text-[32px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#303030] mt-12 mb-6">
      {children}
    </h2>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-[20px] font-semibold leading-[1.4] text-[#303030] mb-3">
        {title}
      </h3>
      <div className="text-[16px] leading-[1.7] text-[#616161] space-y-4">
        {children}
      </div>
    </div>
  )
}
