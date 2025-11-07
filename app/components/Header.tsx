'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <header>
        <nav>
        <div className="nav-brand">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
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
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={isActive(link.href) ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mobile-register-item">
            <a 
              href="https://bit.ly/phsw25-SaasifiedandAmplified" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mobile-register-button"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register Now
            </a>
          </li>
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
          <button 
            className="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </nav>
    </header>
    </>
  );
}
