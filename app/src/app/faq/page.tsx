import type { Metadata } from 'next';
import { FAQ_ITEMS } from '@/constants';

export const metadata: Metadata = {
  title: 'FAQ | SaaSified and Amplified 2025',
  description: 'Frequently asked questions about SaaSified and Amplified 2025',
};

export default function FAQPage() {
  return (
    <div className="faq-page">
      <section className="page-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about the event</p>
      </section>

      <section className="faq-list">
        {FAQ_ITEMS.map((item) => (
          <article key={item.id} className="faq-item">
            <h3 className="faq-question">{item.question}</h3>
            <p className="faq-answer">{item.answer}</p>
          </article>
        ))}
      </section>

      <section className="contact-section">
        <h2>Still have questions?</h2>
        <p>
          Reach out to us through our social media channels or contact the GDGoC PLM team directly.
        </p>
      </section>
    </div>
  );
}
