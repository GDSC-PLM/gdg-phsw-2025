'use client'
import Link from 'next/link';
import Image from 'next/image';
import { Countdown, Stars, Airplane, Trail } from '@/components';
import { EVENT_DETAILS, EVENT_DATE, REGISTRATION_LINK, ABOUT_EVENT } from '@/constants';

export default function Home() {

  return (
    <div className="home-page">
      <div className="hero">
        {/* Decorative Elements */}
        <div className="hero-decorations">
          <Stars count={20} className="hero-stars" />
          <div className="hero-ph-map">
            <Image
              src="/assets/ph-map.png"
              alt="Philippines Map - Start Local, Go Global"
              width={500}
              height={500}
              className="ph-map-image"
              priority
            />
          </div>
          <div className="hero-trails">
            <Trail variant="trail1" className="trail-1" />
            <Trail variant="trail2" className="trail-2" />
          </div>
          <div className="hero-airplane">
            <Airplane rotation={45} />
          </div>
        </div>
        
        {/* Hero Content - Title partially obscured by airplane */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line-1">SaaSified</span>
            <span className="title-line-2">and</span>
            <span className="title-line-3">Amplified:</span>
            <span className="title-line-4">Ascending Software to the Sky</span>
          </h1>
          <p className="tagline">{EVENT_DETAILS.tagline}</p>
          <p className="theme">{EVENT_DETAILS.theme}</p>
        </div>
      </div>

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
        <div className="countdown-decorations">
          <Stars count={15} className="countdown-stars" />
        </div>
        <h1 className="section-header section-header-light">Event Countdown</h1>
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
        <div className="about-preview-content">
          <div className="about-preview-text">
            <h2 className="section-header">About the Event</h2>
            <p>{ABOUT_EVENT.description.split("\n\n")[0]}</p>
            <Link href="/about" className="read-more">
              Learn More →
            </Link>
          </div>
          <div className="about-preview-visual">
            <Image
              src="/assets/ph-map.png"
              alt="Scaling Filipino Innovation: Start Local, Go Global"
              width={300}
              height={300}
              className="ph-map-preview"
            />
            <p className="theme-highlight">{EVENT_DETAILS.theme}</p>
          </div>
        </div>
      </section>

      <section className="quick-links">
        <div className="quick-links-decorations">
          <Stars count={20} className="quick-links-stars" />
        </div>
        <h2 className="section-header">Quick Links</h2>
        <div className="links-grid">
          <Link href="/speakers" className="quick-link-card">
            <h3 className="gdg-yellow-text">SPEAKERS</h3>
            <p>Meet our industry experts</p>
          </Link>
          <Link href="/schedule" className="quick-link-card">
            <h3 className="gdg-red-text">SCHEDULE</h3>
            <p>View the event timeline</p>
          </Link>
          <Link href="/faq" className="quick-link-card">
            <h3 className="gdg-blue-text">FAQ</h3>
            <p>Get your questions answered</p>
          </Link>
          <Link href="/partners" className="quick-link-card">
            <h3 className="gdg-green-text">PARTNERS</h3>
            <p>See our sponsors</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
