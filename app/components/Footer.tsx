import Link from 'next/link';
import { Stars } from '@/components';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-decorations">
        <Stars count={25} className="footer-stars" skipFirst={true} />
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>SaaSified and Amplified 2025</h3>
          <p>
            A flagship event by Google Developer Groups on Campus – PLM
            <br />
            In collaboration with Philippine Startup Week 2025
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/speakers">Speakers</Link></li>
            <li><Link href="/schedule">Schedule</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/partners">Partners</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            GDGoC PLM
            <br />
            Pamantasan ng Lungsod ng Maynila
            <br />
            Intramuros, Manila
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} GDGoC PLM
        </p>
      </div>
    </footer>
  );
}
