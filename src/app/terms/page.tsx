import { PageHero } from '@/components/PageHero'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteShell } from '@/components/SiteShell'
import { CONTACT_EMAILS, SITE_NAME, SITE_URL, buildMetadata } from '@/lib/site'

export const metadata = buildMetadata({
  title: 'Terms of Use',
  description: `Terms of Use for the ${SITE_NAME} website and TekBox application.`,
  path: '/terms/',
})

const updated = 'July 13, 2026'

export default function TermsPage() {
  return (
    <SiteShell>
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Terms"
          title="Terms of Use"
          description={`Effective date: ${updated}. These Terms of Use govern your access to and use of the Blind Teknologis website at ${SITE_URL} and, where applicable, the TekBox application and related services.`}
        />

        <section className="bg-white py-18 sm:py-24">
          <article className="section-shell max-w-4xl space-y-10 text-sm leading-7 text-copy">
            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                1. Agreement
              </h2>
              <p className="mt-3">
                By accessing or using the Blind Teknologis website or TekBox services, you agree to
                these Terms. If you are using the services on behalf of a company, you represent that
                you have authority to bind that company. If you do not agree, do not use the
                website or services.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                2. Definitions
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-charcoal">Website</strong> means {SITE_URL} and related
                  marketing pages operated by Blind Teknologis.
                </li>
                <li>
                  <strong className="text-charcoal">TekBox</strong> or <strong className="text-charcoal">Application</strong>{" "}
                  means Blind Teknologis software products, dashboards, APIs, and related tools made
                  available to authorized users.
                </li>
                <li>
                  <strong className="text-charcoal">Customer Data</strong> means data submitted to or
                  processed by TekBox on behalf of a customer, including vehicle and service context
                  authorized for processing.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                3. Website Use
              </h2>
              <p className="mt-3">
                The Website is provided for informational and business-contact purposes. Product
                descriptions may describe capabilities that are in development. Marketing content
                does not constitute a warranty that any feature is generally available unless
                expressly stated in a customer agreement.
              </p>
              <p className="mt-3">You agree not to:</p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Use the Website in violation of law or third-party rights</li>
                <li>Attempt unauthorized access, scraping that impairs service, or security probing without written permission</li>
                <li>Misrepresent your identity or affiliation when submitting forms</li>
                <li>Upload malware or interfere with Website operation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                4. Early Access and Pre-Release Software
              </h2>
              <p className="mt-3">
                TekBox may be offered in early access, beta, or preview form. Pre-release software
                may be incomplete, change without notice, contain defects, and may be withdrawn.
                Feedback you provide may be used by Blind Teknologis to improve the product without
                obligation to you, and you grant Blind Teknologis a royalty-free license to use that
                feedback.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                5. TekBox Application Terms
              </h2>
              <h3 className="mt-4 font-semibold text-charcoal">5.1 License</h3>
              <p className="mt-2">
                Subject to these Terms and any applicable order form or customer agreement, Blind
                Teknologis grants authorized users a limited, non-exclusive, non-transferable,
                revocable right to access and use TekBox for the customer’s internal business
                purposes in automotive service operations.
              </p>
              <h3 className="mt-4 font-semibold text-charcoal">5.2 Accounts and access</h3>
              <p className="mt-2">
                Customers are responsible for user accounts, credential security, and for
                configuring access appropriately. You must promptly notify{" "}
                <a href={`mailto:${CONTACT_EMAILS.support}`} className="text-brand-red hover:underline">
                  {CONTACT_EMAILS.support}
                </a>{" "}
                of suspected unauthorized use.
              </p>
              <h3 className="mt-4 font-semibold text-charcoal">5.3 Acceptable use</h3>
              <p className="mt-2">You will not, and will not allow others to:</p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Reverse engineer, decompile, or attempt to derive source code except where prohibited restrictions are unlawful</li>
                <li>Resell, sublicense, or provide TekBox as a service to third parties without written permission</li>
                <li>Use TekBox to violate privacy, consumer, automotive, or other applicable law</li>
                <li>Submit unlawful, infringing, or harmful content</li>
                <li>Circumvent technical protections or rate limits</li>
                <li>Represent TekBox outputs as guaranteed OEM specifications when the product marks data as unknown, incomplete, or provisional</li>
              </ul>
              <h3 className="mt-4 font-semibold text-charcoal">5.4 Customer Data</h3>
              <p className="mt-2">
                As between the parties, the customer retains rights in Customer Data. Blind
                Teknologis processes Customer Data to provide and improve the services, maintain
                security, and as described in the Privacy Policy. Customers represent they have the
                rights and notices required to provide Customer Data (including vehicle and service
                information) for processing.
              </p>
              <h3 className="mt-4 font-semibold text-charcoal">5.5 Integrations</h3>
              <p className="mt-2">
                TekBox may connect to third-party shop systems through APIs (including Tekmetric)
                when authorized. Blind Teknologis is not responsible for third-party system
                availability, accuracy, or terms. Customers must comply with those third-party terms
                and obtain required authorizations.
              </p>
              <h3 className="mt-4 font-semibold text-charcoal">5.6 No substitute for professional judgment</h3>
              <p className="mt-2">
                TekBox provides informational decision support. It does not replace licensed
                technician judgment, OEM procedures, safety inspections, or legal obligations. Users
                remain responsible for repair recommendations, customer communications, and
                compliance with applicable automotive and consumer rules.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                6. Intellectual Property
              </h2>
              <p className="mt-3">
                The Website, TekBox, branding, logos, designs, software, documentation, and related
                materials are owned by Blind Teknologis or its licensors. No rights are granted
                except as expressly stated. “Blind Teknologis,” “TekBox,” and related marks are
                trademarks of Blind Teknologis.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                7. Confidentiality
              </h2>
              <p className="mt-3">
                Non-public product, pricing, security, and business information shared in early
                access or partner diligence must be kept confidential and used only for evaluating
                or using the services, unless disclosure is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                8. Disclaimers
              </h2>
              <p className="mt-3 uppercase tracking-[0.04em]">
                To the maximum extent permitted by law, the Website and TekBox are provided “as is”
                and “as available,” without warranties of any kind, whether express, implied, or
                statutory, including merchantability, fitness for a particular purpose, title, and
                non-infringement. Blind Teknologis does not warrant that outputs will be error-free,
                complete, or uninterrupted, or that vehicle intelligence will identify every
                service need.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                9. Limitation of Liability
              </h2>
              <p className="mt-3 uppercase tracking-[0.04em]">
                To the maximum extent permitted by law, Blind Teknologis and its officers,
                directors, employees, and agents will not be liable for any indirect, incidental,
                special, consequential, exemplary, or punitive damages, or any loss of profits,
                revenue, data, or goodwill, arising out of or related to these Terms or use of the
                Website or TekBox, even if advised of the possibility. Our aggregate liability for
                claims relating to the Website or free/early-access use will not exceed one hundred
                U.S. dollars (USD $100). Liability under a paid customer agreement is governed by
                that agreement if it conflicts with this section.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                10. Indemnification
              </h2>
              <p className="mt-3">
                You will defend and indemnify Blind Teknologis against claims arising from your
                misuse of the services, your Customer Data, your violation of these Terms or law, or
                your violation of third-party rights or third-party platform terms.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                11. Suspension and Termination
              </h2>
              <p className="mt-3">
                We may suspend or terminate access to the Website or TekBox for breach, risk to the
                service or others, legal requirement, or end of an early-access program. Provisions
                that by nature should survive (including IP, disclaimers, limitations, and
                indemnity) will survive termination.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                12. Governing Law
              </h2>
              <p className="mt-3">
                These Terms are governed by the laws of the United States and the State of
                California, excluding conflict-of-law rules, unless a customer agreement specifies
                otherwise. Exclusive venue for disputes arising from Website use is the state or
                federal courts located in California, unless mandatory consumer protections require
                otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                13. Changes
              </h2>
              <p className="mt-3">
                We may update these Terms by posting a revised version with an updated effective
                date. Continued use after changes become effective constitutes acceptance, except
                where a separate customer agreement requires a different amendment process.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-charcoal">
                14. Contact
              </h2>
              <p className="mt-3">
                Legal / terms questions:{" "}
                <a href={`mailto:${CONTACT_EMAILS.general}`} className="text-brand-red hover:underline">
                  {CONTACT_EMAILS.general}
                </a>
              </p>
              <p className="mt-2">
                Support:{" "}
                <a href={`mailto:${CONTACT_EMAILS.support}`} className="text-brand-red hover:underline">
                  {CONTACT_EMAILS.support}
                </a>
              </p>
              <p className="mt-2">
                Privacy:{" "}
                <a href={`mailto:${CONTACT_EMAILS.privacy}`} className="text-brand-red hover:underline">
                  {CONTACT_EMAILS.privacy}
                </a>
              </p>
              <p className="mt-2">
                API / integrations:{" "}
                <a href={`mailto:${CONTACT_EMAILS.api}`} className="text-brand-red hover:underline">
                  {CONTACT_EMAILS.api}
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
