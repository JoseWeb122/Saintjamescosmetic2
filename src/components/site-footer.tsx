import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top shell">
        <div className="footer-brand-block">
          <Link className="footer-wordmark" href="/" aria-label="Saint James Cosmetics home">
            <span>Saint James</span>
            <small>COSMETICS&nbsp; · &nbsp;BEVERLY HILLS</small>
          </Link>
          <p>Color, care, and a beauty philosophy that begins within.</p>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Explore</p>
          <Link href="/shop">The collection</Link>
          <Link href="/about">Our story</Link>
          <Link href="/beauty-notes">Beauty notes</Link>
          <Link href="/policies">Ordering & policies</Link>
        </div>

        <div className="footer-column footer-contact">
          <p className="footer-heading">A personal touch</p>
          <p>For product questions and orders, Patricia’s team welcomes a direct note.</p>
          <a href="tel:+13104948094">(310) 494-8094</a>
          <a href="mailto:psjcosmetics@yahoo.com">psjcosmetics@yahoo.com</a>
          <Link className="footer-contact-link" href="/contact">Send an enquiry <span aria-hidden="true">↗</span></Link>
        </div>
      </div>

      <div className="footer-bottom shell">
        <p>© {new Date().getFullYear()} Saint James Cosmetics, Inc.</p>
        <p className="footer-note">The original website lists complimentary shipping on orders of $50 or more; please confirm when ordering.</p>
        <Link href="/policies">Privacy & returns</Link>
      </div>
    </footer>
  );
}
