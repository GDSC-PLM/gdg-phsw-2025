import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PARTNERS } from '@/constants';

export const metadata: Metadata = {
  title: 'Partners | SaaSified and Amplified 2025',
  description: 'Our partners and sponsors for SaaSified and Amplified 2025',
};

// Helper function to get tier display name
const getTierDisplayName = (tier: string): string => {
  switch (tier) {
    case 'major':
      return 'Major Partners';
    case 'minor':
      return 'Minor Partners';
    default:
      return 'Partners';
  }
};

// Group partners by tier
const groupPartnersByTier = () => {
  const grouped: Record<string, typeof PARTNERS> = {};
  
  PARTNERS.forEach((partner) => {
    const tier = partner.tier;
    if (!grouped[tier]) {
      grouped[tier] = [];
    }
    grouped[tier].push(partner);
  });

  // Define tier order - major first, then minor
  const tierOrder: string[] = ['major', 'minor'];
  
  return tierOrder
    .filter(tier => grouped[tier])
    .map(tier => ({
      tier,
      partners: grouped[tier],
    }));
};

export default function PartnersPage() {
  const groupedPartners = groupPartnersByTier();

  return (
    <div className="partners-page">
      <section className="page-header">
        <h1>Our Partners</h1>
        <p>Thank you to our partners who make this event possible</p>
      </section>

      {groupedPartners.map(({ tier, partners }) => (
        <section key={tier} className="partners-section">
          <h2 className="partners-tier-title">{getTierDisplayName(tier)}</h2>
          <div className="partners-list">
            {partners.map((partner) => (
              <article key={partner.id} className="partner-card">
                <div className="partner-logo">
                  <Image
                    src={partner.logoUrl}
                    alt={partner.name}
                    width={300}
                    height={200}
                    style={{ objectFit: 'contain', background: 'transparent' }}
                  />
                  <div className="partner-name-overlay">{partner.name}</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

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
