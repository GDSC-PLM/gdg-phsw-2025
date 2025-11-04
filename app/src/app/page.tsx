'use client'
import Link from 'next/link';
import { Countdown } from '@/components';
import { EVENT_DETAILS, EVENT_DATE, REGISTRATION_LINK, ABOUT_EVENT } from '@/constants';

export default function Home() {

  return (
    <div className="home-page">
      <section className="hero">
        <h1>
          <span className="gdg-red-text">SaaSified</span> and
          <span className="gdg-blue-text"> Amplified</span>: Ascending{" "}
          <span className="gdg-green-text">Software</span> to the Sky
        </h1>
        <p className="tagline">{EVENT_DETAILS.tagline}</p>
        <p className="theme">{EVENT_DETAILS.theme}</p>
      </section>

      <section className="event-details">
        <div className="details-grid">
          <div className="detail-item">
            <strong className="gdg-yellow-text">Date:</strong>{" "}
            <p>{EVENT_DETAILS.date}</p>
          </div>
          <div className="detail-item">
            <strong className="gdg-red-text">Time:</strong>{" "}
            {EVENT_DETAILS.time}
          </div>
          <div className="detail-item">
            <strong className="gdg-blue-text">Venue:</strong>{" "}
            <p>{EVENT_DETAILS.venue}</p>
          </div>
          <div className="detail-item">
            <strong className="gdg-green-text">Format:</strong>{" "}
            <p>{EVENT_DETAILS.format}</p>
          </div>
        </div>
      </section>

      <section className="countdown-section">
        <h2 className="section-header-light">Event Countdown</h2>
        <Countdown targetDate={EVENT_DATE} />
      </section>

      <section className="cta-section">
        {REGISTRATION_LINK.url ? (
          <a
            href={REGISTRATION_LINK.url}
            target={REGISTRATION_LINK.openInNewTab ? "_blank" : "_self"}
            rel={
              REGISTRATION_LINK.openInNewTab
                ? "noopener noreferrer"
                : undefined
            }
            className="cta-button"
          >
            {REGISTRATION_LINK.label}
          </a>
        ) : (
          <p>Registration link coming soon!</p>
        )}
      </section>

      <section className="about-preview">
        <h2 className="section-header">About the Event</h2>
        <p>{ABOUT_EVENT.description.split("\n\n")[0]}</p>
        <Link href="/about" className="read-more">
          Learn More →
        </Link>
      </section>

      <section className="quick-links">
        <h2 className="section-header">Quick Links</h2>
        <div className="links-grid">
          <Link href="/speakers" className="quick-link-card">
            <h3 className="gdg-yellow-text">Speakers</h3>
            <p>Meet our industry experts</p>
          </Link>
          <Link href="/schedule" className="quick-link-card">
            <h3 className="gdg-red-text">Schedule</h3>
            <p>View the event timeline</p>
          </Link>
          <Link href="/faq" className="quick-link-card">
            <h3 className="gdg-blue-text">FAQ</h3>
            <p>Get your questions answered</p>
          </Link>
          <Link href="/partners" className="quick-link-card">
            <h3 className="gdg-green-text">Partners</h3>
            <p>See our sponsors</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
