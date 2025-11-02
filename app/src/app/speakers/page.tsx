import type { Metadata } from 'next';
import { SPEAKERS } from '@/constants';

export const metadata: Metadata = {
  title: 'Speakers | SaaSified and Amplified 2025',
  description: 'Meet our industry expert speakers for SaaSified and Amplified 2025',
};

export default function SpeakersPage() {
  return (
    <div className="speakers-page">
      <section className="page-header">
        <h1>Our Speakers</h1>
        <p>Meet the industry experts who will share their insights on SaaS innovation</p>
      </section>

      <section className="speakers-list">
        {SPEAKERS.map((speaker) => (
          <article key={speaker.id} className="speaker-card">
            <div className="speaker-header">
              <h2>{speaker.name}</h2>
              <p className="speaker-title">{speaker.title}</p>
            </div>

            <div className="speaker-topic">
              <h3>{speaker.topic}</h3>
              <p>{speaker.topicDescription}</p>
            </div>

            <div className="speaker-bio">
              <h4>About the Speaker</h4>
              {speaker.biography.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
