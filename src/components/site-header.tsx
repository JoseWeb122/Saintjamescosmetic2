"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/shop", label: "The collection" },
  { href: "/about", label: "Our story" },
  { href: "/beauty-notes", label: "Beauty notes" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  return (
    <>
      <div className="announcement-bar">
        <div className="announcement-inner">
          <p>Beauty that is love from within.</p>
          <a href="tel:+13104948094">Orders by phone&nbsp; <span>(310) 494-8094</span></a>
        </div>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Link className="wordmark" href="/" aria-label="Saint James Cosmetics, home" onClick={() => setMenuOpen(false)}>
            <span className="wordmark-main">Saint James</span>
            <span className="wordmark-sub">COSMETICS&nbsp; · &nbsp;BEVERLY HILLS</span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={pathname === link.href ? "nav-link is-active" : "nav-link"}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link className="header-shop-link" href="/shop">
              Explore the collection <span aria-hidden="true">↗</span>
            </Link>
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span>{menuOpen ? "Close" : "Menu"}</span>
              <span className={menuOpen ? "menu-glyph is-open" : "menu-glyph"} aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-navigation" id="mobile-navigation">
            <nav aria-label="Mobile navigation">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="mobile-nav-number">0{index + 1}</span>
                  <span>{link.label}</span>
                  <span className="mobile-nav-arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </nav>
            <div className="mobile-contact-row">
              <span>For orders & enquiries</span>
              <a href="tel:+13104948094">(310) 494-8094</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
