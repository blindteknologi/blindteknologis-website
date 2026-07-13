import { PageHero } from '@/components/PageHero'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteShell } from '@/components/SiteShell'
import { CONTACT_EMAILS, SITE_NAME, SITE_URL, buildMetadata } from '@/lib/site'

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: `Privacy Policy for ${SITE_NAME} website and TekBox application services.`,
  path: '/privacy/',
})

const updated = 'July 13, 2026'

export default function PrivacyPage() {
  return (
    <SiteShell>
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Privacy"
          title="Privacy Policy"
          description={`Effective date: ${updated}. This Privacy Policy explains how Blind Teknologis collects, uses, discloses, and protects information when you use our website at ${SITE_URL} and our TekBox application and related services.`}
        />

        <section className="bg-white py-18 sm:py-24">
          <article className="section-shell max-w-4xl space-y-10 text-sm leading-7 text-copy">
            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                1. Who We Are
              </h2>
              <p className="mt-3">
                Blind Teknologis (“Blind Teknologis,” “we,” “us,” or “our”) builds TekBox, a knowledge
                platform for automotive repair shop operations. This policy covers our public
                marketing website, early-access and contact forms, and TekBox application services
                when made available to customers and authorized users.
              </p>
              <p className="mt-3">
                Privacy requests and data-protection inquiries:{" "}
                <a href={`mailto:${CONTACT_EMAILS.privacy}`} className="text-brand-red hover:underline">
                  {CONTACT_EMAILS.privacy}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                2. Scope
              </h2>
              <p className="mt-3">This policy applies to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Visitors to our website and pages under {SITE_URL}</li>
                <li>Individuals who submit contact, early-access, sales, API, or support forms</li>
                <li>Authorized users of TekBox application services (when provisioned)</li>
                <li>Business contacts involved in partner, vendor, or integration diligence</li>
              </ul>
              <p className="mt-3">
                This policy does not make Blind Teknologis a shop management system of record. Where
                TekBox connects to a shop system (for example, Tekmetric) through an approved API,
                that system’s own privacy terms and your shop’s policies continue to apply to data
                originating in that system.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                3. Information We Collect
              </h2>
              <h3 className="mt-4 font-semibold text-charcoal">3.1 Information you provide</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Name, email address, job title, phone number, and business location</li>
                <li>Shop or company details you choose to include in forms or correspondence</li>
                <li>Message content, support requests, and early-access interest details</li>
                <li>Account credentials and profile details for TekBox users (when accounts exist)</li>
              </ul>
              <h3 className="mt-4 font-semibold text-charcoal">3.2 Operational / product data</h3>
              <p className="mt-2">
                Depending on configuration and customer authorization, TekBox may process vehicle
                identifiers (such as VIN), service history entries, maintenance evaluations,
                capability and evidence records, and related operational context needed to provide
                the service. We design TekBox to preserve provenance and to avoid inventing
                unverified automotive facts.
              </p>
              <h3 className="mt-4 font-semibold text-charcoal">3.3 Automatically collected technical data</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>IP address, browser type, device type, and approximate location derived from IP</li>
                <li>Pages viewed, referring URLs, and basic interaction logs needed for security and reliability</li>
                <li>Cookies or similar technologies used for essential site function and, where enabled, analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                4. How We Use Information
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Respond to inquiries, early-access requests, sales conversations, and support tickets</li>
                <li>Operate, secure, maintain, and improve the website and TekBox services</li>
                <li>Authenticate users and enforce access controls</li>
                <li>Provide vehicle intelligence, maintenance, evidence, and related product features</li>
                <li>Communicate service notices, security alerts, and material product updates</li>
                <li>Comply with law, enforce terms, and protect rights, safety, and integrity of the service</li>
                <li>Support partner diligence and API/integration review when you initiate that process</li>
              </ul>
              <p className="mt-3">
                We do not sell personal information. We do not use customer shop operational data to
                train public generative models for unrelated third-party products.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                5. Legal Bases (Where Applicable)
              </h2>
              <p className="mt-3">
                Where required (including for individuals in the EEA/UK), we process personal data
                based on one or more of: performance of a contract or pre-contract steps; legitimate
                interests in operating a secure B2B software business; consent where requested; and
                legal obligation.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                6. Sharing and Disclosure
              </h2>
              <p className="mt-3">We may share information with:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Service providers who assist with hosting, email delivery, analytics, security, or support under contractual confidentiality obligations</li>
                <li>Shop-system or API partners only as needed to fulfill an authorized integration you or your organization requests</li>
                <li>Professional advisors (legal, accounting) under confidentiality</li>
                <li>Authorities when required by law or to protect rights and safety</li>
                <li>A successor entity in connection with a merger, acquisition, or asset transfer, subject to continued protection consistent with this policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                7. Data Retention
              </h2>
              <p className="mt-3">
                We retain information only as long as needed for the purposes described above,
                including legal, accounting, dispute, and security requirements. Retention periods
                vary by data type and customer agreement. Form submissions are retained as needed to
                complete the inquiry and maintain business records.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                8. Security
              </h2>
              <p className="mt-3">
                We implement administrative, technical, and organizational measures designed to
                protect information against unauthorized access, alteration, disclosure, or
                destruction. No method of transmission or storage is perfectly secure. You are
                responsible for safeguarding credentials issued to your users.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                9. International Transfers
              </h2>
              <p className="mt-3">
                We operate primarily in the United States. If information is transferred across
                borders, we take steps designed to ensure an appropriate level of protection
                consistent with applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                10. Your Rights and Choices
              </h2>
              <p className="mt-3">
                Depending on your location, you may have rights to access, correct, delete, or
                restrict certain personal information, or to object to certain processing. To
                exercise rights, contact{" "}
                <a href={`mailto:${CONTACT_EMAILS.privacy}`} className="text-brand-red hover:underline">
                  {CONTACT_EMAILS.privacy}
                </a>
                . We may need to verify your identity before fulfilling a request. If you are an
                employee or contractor of a shop customer, we may redirect your request to that
                customer as the appropriate controller of workplace account data.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                11. Children’s Privacy
              </h2>
              <p className="mt-3">
                Our services are directed to businesses and adult professionals. We do not knowingly
                collect personal information from children under 16.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                12. Third-Party Links and Systems
              </h2>
              <p className="mt-3">
                Our website or application may link to third-party sites or connect to third-party
                shop systems. Their privacy practices are governed by their own policies. Review
                those policies before providing information to them.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                13. Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. The effective date above will
                change when updates are posted. Material changes may also be communicated by email
                or in-product notice where appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                14. Contact
              </h2>
              <p className="mt-3">
                Privacy Officer / privacy inquiries:{" "}
                <a href={`mailto:${CONTACT_EMAILS.privacy}`} className="text-brand-red hover:underline">
                  {CONTACT_EMAILS.privacy}
                </a>
              </p>
              <p className="mt-2">
                General inquiries:{" "}
                <a href={`mailto:${CONTACT_EMAILS.general}`} className="text-brand-red hover:underline">
                  {CONTACT_EMAILS.general}
                </a>
              </p>
              <p className="mt-2">Support:{" "}
                <a href={`mailto:${CONTACT_EMAILS.support}`} className="text-brand-red hover:underline">
                  {CONTACT_EMAILS.support}
                </a>
              </p>
            </section>
          </article>
        </section>
      </main>
      <SiteFooter />
    </SiteShell>
  )
}
