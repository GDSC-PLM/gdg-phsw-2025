'use client';

import { REGISTRATION_LINK } from '@/constants/eventData';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/speakers', label: 'Speakers' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/faq', label: 'FAQ' },
    { href: '/partners', label: 'Partners' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header>
      <nav>
        <div className="nav-brand">
          <Link href="/">
            <Image
              src="/assets/gdsc-plm-logo.svg"
              alt="Google Developer Groups on Campus - PLM"
              width={130}
              height={36}
              className="nav-logo-image"
              priority
            />
          </Link>
        </div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={isActive(link.href) ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <div className="nav-collaboration">
            <p className="collaboration-text">In collaboration with</p>
            <div className="phsw-logo">
              <span className="phsw-ph">PH</span>
              <div className="phsw-text">
                <span>STARTUP</span>
                <span>WEEK</span>
                <span>2025</span>
              </div>
            </div>
          </div>
          <div className="nav-cta">
            <a 
              href="https://bit.ly/phsw25-SaasifiedandAmplified" 
              target="_blank" 
              rel="noopener noreferrer"
              className="register-button"
            >
              Register
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
