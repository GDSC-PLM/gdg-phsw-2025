import type { Metadata } from 'next';
import { ABOUT_EVENT, ABOUT_GDGOC, PARTNERSHIP_INFO } from '@/constants';

export const metadata: Metadata = {
  title: 'About | SaaSified and Amplified 2025',
  description: 'Learn about our flagship event celebrating Filipino innovation in the digital age',
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="page-header">
        <h1>About the Event</h1>
        <p>Discover the transformative event and learn more about GDGoC PLM.</p>
      </section>

      <section className="event-description">
        <p>{ABOUT_EVENT.description}</p>
        <ul>
          {ABOUT_EVENT.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </section>

      <section className="objectives">
        <h2 className="gdg-red-text section-header ">Objectives</h2>
        <ul>
          {ABOUT_EVENT.objectives.map((objective, index) => {
            const colorClasses = [
              "gdg-yellow-border",
              "gdg-green-border",
              "gdg-red-border",
              "gdg-blue-border",
            ];
            const colorClass = colorClasses[index] ?? "";
            return (
              <li key={index} className={`objective-item ${colorClass}`}>
                {objective}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="partnership">
        <h2 className="gdg-blue-text section-header ">
          Partnership Opportunities
        </h2>
        <p>
          By partnering with GDGoC PLM for SaaSified and Amplified, your
          organization will:
        </p>
        <ul>
          {PARTNERSHIP_INFO.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <p>{PARTNERSHIP_INFO.inKindNote}</p>
      </section>

      <section className="about-gdgoc">
        <h2 className="gdg-green-text section-header">About GDGoC PLM</h2>
        <p>{ABOUT_GDGOC.description}</p>
      </section>
    </div>
  );
}
