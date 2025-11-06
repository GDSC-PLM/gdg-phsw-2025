'use client';

import { REGISTRATION_LINK } from '@/constants/eventData';
import Link from 'next/link';
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
          <Link href="/">GDGoC PLM</Link>
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
        <div className="nav-cta">
          <a 
            href={REGISTRATION_LINK.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="register-button"
          >
            Register
          </a>
        </div>
      </nav>
    </header>
  );
}
