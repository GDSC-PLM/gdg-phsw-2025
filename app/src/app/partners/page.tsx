import type { Metadata } from 'next';
import Link from 'next/link';
import { PARTNERS } from '@/constants';

export const metadata: Metadata = {
  title: 'Partners | SaaSified and Amplified 2025',
  description: 'Our partners and sponsors for SaaSified and Amplified 2025',
};

export default function PartnersPage() {
  return (
    <div className="partners-page">
      <section className="page-header">
        <h1>Our Partners</h1>
        <p>Thank you to our partners who make this event possible</p>
      </section>

      <section className="partners-list">
        {PARTNERS.map((partner) => (
          <article key={partner.id} className="partner-card">
            <h3>{partner.name}</h3>
            {partner.description && <p>{partner.description}</p>}
            {partner.websiteUrl && (
              <a
                href={partner.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-link"
              >
                Visit Website →
              </a>
            )}
          </article>
        ))}
      </section>

      <section className="become-partner">
        <h2>Become a Partner</h2>
        <p>
          Interested in partnering with GDGoC PLM for this event?
        </p>
        <Link href="/about" className="partner-cta">
          Learn About Partnership Opportunities
        </Link>
      </section>
    </div>
  );
}
