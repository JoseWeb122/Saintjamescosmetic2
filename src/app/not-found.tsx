import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <div className="not-found-inner">
        <p className="eyebrow">A page not found</p>
        <h1>Let’s find<br /><em>your way.</em></h1>
        <p>That page has moved. Explore the collection or return to Saint James Cosmetics home.</p>
        <div className="cta-actions">
          <Link className="button button-dark" href="/shop">Explore the collection <span aria-hidden="true">↗</span></Link>
          <Link className="button button-outline" href="/">Return home <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </main>
  );
}
