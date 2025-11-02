import Link from 'next/link';
import { Countdown } from '@/components';
import { EVENT_DETAILS, EVENT_DATE, REGISTRATION_LINK, ABOUT_EVENT } from '@/constants';

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>{EVENT_DETAILS.name}</h1>
        <p className="tagline">{EVENT_DETAILS.tagline}</p>
        <p className="theme">{EVENT_DETAILS.theme}</p>
      </section>

      <section className="event-details">
        <h2>Event Details</h2>
        <div className="details-grid">
          <div className="detail-item">
            <strong>Date:</strong> {EVENT_DETAILS.date}
          </div>
          <div className="detail-item">
            <strong>Time:</strong> {EVENT_DETAILS.time}
          </div>
          <div className="detail-item">
            <strong>Venue:</strong> {EVENT_DETAILS.venue}
          </div>
          <div className="detail-item">
            <strong>Format:</strong> {EVENT_DETAILS.format}
          </div>
          <div className="detail-item">
            <strong>Audience:</strong> {EVENT_DETAILS.audience}
          </div>
        </div>
      </section>

      <section className="countdown-section">
        <h2>Event Countdown</h2>
        <Countdown targetDate={EVENT_DATE} />
      </section>

      <section className="cta-section">
        {REGISTRATION_LINK.url ? (
          <a
            href={REGISTRATION_LINK.url}
            target={REGISTRATION_LINK.openInNewTab ? '_blank' : '_self'}
            rel={REGISTRATION_LINK.openInNewTab ? 'noopener noreferrer' : undefined}
            className="cta-button"
          >
            {REGISTRATION_LINK.label}
          </a>
        ) : (
          <p>Registration link coming soon!</p>
        )}
      </section>

      <section className="about-preview">
        <h2>About the Event</h2>
        <p>{ABOUT_EVENT.description.split('\n\n')[0]}</p>
        <Link href="/about" className="read-more">
          Learn More →
        </Link>
      </section>

      <section className="quick-links">
        <h2>Quick Links</h2>
        <div className="links-grid">
          <Link href="/speakers" className="quick-link-card">
            <h3>Speakers</h3>
            <p>Meet our industry experts</p>
          </Link>
          <Link href="/schedule" className="quick-link-card">
            <h3>Schedule</h3>
            <p>View the event timeline</p>
          </Link>
          <Link href="/faq" className="quick-link-card">
            <h3>FAQ</h3>
            <p>Get your questions answered</p>
          </Link>
          <Link href="/partners" className="quick-link-card">
            <h3>Partners</h3>
            <p>See our sponsors</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
