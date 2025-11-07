import type { Metadata } from 'next';
import { SPEAKERS } from '@/constants';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Speakers | SaaSified and Amplified 2025',
  description: 'Meet our industry expert speakers for SaaSified and Amplified 2025',
};

export default function SpeakersPage() {
  return (
    <div className="speakers-page">
      <section className="page-header">
        <h1>Our Speakers</h1>
        <p>
          Meet the industry experts who will share their insights on SaaS
          innovation
        </p>
      </section>

      <section className="speakers-list">
        {SPEAKERS.map((speaker, index) => {
          const colorClasses = [
            "gdg-yellow-borderleft",
            "gdg-green-borderleft",
            "gdg-red-borderleft",
            "gdg-blue-borderleft",
          ];

          const colorClass = colorClasses[index % colorClasses.length];

          // Map speaker IDs to photo paths (assets folder)
          const PHOTO_MAP: Record<string, string> = {
            "speaker-1": "/assets/jazmine-photo.jpg",
            "speaker-2": "/assets/sermil-photo.jpg",
            "speaker-3": "/assets/shan-photo.jpg",
          };

          const photoSrc =
            PHOTO_MAP[speaker.id];

          return (
            <article key={speaker.id} className="speaker-card">
              <div className="speaker-body">
                <div className="speaker-header">
                  <Image
                    src={photoSrc}
                    alt={`${speaker.name} photo`}
                    className="speaker-photo"
                    width={200}
                    height={200}
                  />
                  <h2>{speaker.name}</h2>
                  <p className="speaker-title">{speaker.title}</p>
                </div>

                <div className={`speaker-topic ${colorClass}`}>
                  <h3>{speaker.topic}</h3>
                  <p>{speaker.topicDescription}</p>
                </div>

                <div className="speaker-bio">
                  <h4>About the Speaker</h4>
                  {speaker.biography.split("\n\n").map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
