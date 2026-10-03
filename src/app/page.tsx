import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import { featuredProductIds, products } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Beauty from within",
  description:
    "Saint James Cosmetics by Patricia Saint James: color, complexion, skincare and beauty essentials created especially for women of color.",
};

const homeCollections = [
  {
    id: "complexion",
    number: "01 / FACE",
    title: "Complexion & face",
    copy: "Foundations, finishing powders, corrective color and blush.",
    className: "category-tile--complexion",
  },
  {
    id: "eyes",
    number: "02 / EYES",
    title: "Eyes",
    copy: "Eye color, liners, brow products and mascara.",
    className: "category-tile--eyes",
  },
  {
    id: "lips",
    number: "03 / LIPS",
    title: "Lips & tips",
    copy: "Lipstick, gloss, liners and a little sparkle.",
    className: "category-tile--lips",
  },
  {
    id: "skincare",
    number: "04 / SKIN",
    title: "Skin & care",
    copy: "Skincare for all types, with bath enhancers also in the collection.",
    className: "category-tile--skincare",
  },
] as const;

const reasons = [
  {
    number: "01",
    title: "Created with women of color in mind",
    copy: "The collection was designed by Patricia Saint James especially for women of color and a range of skin tones.",
  },
  {
    number: "02",
    title: "Beauty experience, made personal",
    copy: "Patricia’s background spans makeup, skincare, and fashion; she has shared simple techniques with her clients.",
  },
  {
    number: "03",
    title: "Color, care, and the finishing touches",
    copy: "Explore complexion, eyes, lips, skincare, artist kits, cosmetic bags and the bath enhancers mentioned on the original site.",
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
}

export default function HomePage() {
  const featured = products.filter((product) => featuredProductIds.includes(product.id as (typeof featuredProductIds)[number]));

  return (
    <main id="main-content">
      <section className="home-hero" aria-labelledby="hero-title">
        <Image
          className="home-hero-image"
          src="/images/saint-james-hero.png"
          alt="An editorial beauty portrait in warm light"
          fill
          priority
          sizes="100vw"
        />
        <div className="home-hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-content-inner">
            <p className="eyebrow">Beverly Hills&nbsp; · &nbsp;For women of color</p>
            <h1 className="hero-title" id="hero-title">
              Beauty that is<br /><em>love from within.</em>
            </h1>
            <p className="hero-description">
              Saint James Cosmetics by Patricia Saint James: considered color, skincare, and beauty essentials shaped around the women they are made for.
            </p>
            <div className="hero-actions">
              <Link className="button button-light" href="/shop">
                Explore the collection <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-dark" href="/about">
                Meet Patricia <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
        <span className="hero-bottom-note">Color · complexion · care</span>
        <span className="hero-edition">A personal point of view&nbsp; / &nbsp;01</span>
      </section>

      <section className="trust-ribbon" aria-label="Saint James Cosmetics at a glance">
        <div className="trust-ribbon-inner shell">
          <div className="trust-ribbon-item"><span className="trust-ribbon-number">01</span><span className="trust-ribbon-label">Created by Patricia<br />Saint James</span></div>
          <div className="trust-ribbon-item"><span className="trust-ribbon-number">02</span><span className="trust-ribbon-label">Made for women<br />of color</span></div>
          <div className="trust-ribbon-item"><span className="trust-ribbon-number">03</span><span className="trust-ribbon-label">Makeup, skincare<br />&amp; beauty tips</span></div>
          <div className="trust-ribbon-item"><span className="trust-ribbon-number">04</span><span className="trust-ribbon-label">Orders by phone<br />(310) 494-8094</span></div>
        </div>
      </section>

      <section className="brand-intro shell" aria-labelledby="brand-intro-title">
        <div className="brand-intro-grid">
          <Reveal className="brand-intro-copy">
            <p className="eyebrow">A beauty point of view</p>
            <h2 id="brand-intro-title">Color with a sense of <em>self.</em></h2>
            <p>
              Saint James Cosmetics is a Beverly Hills makeup and skincare line created by Patricia Saint James especially for women of color. The collection brings together vibrant color, everyday essentials, and a belief that cosmetics are a way to enhance your inner beauty.
            </p>
            <Link className="text-link" href="/about">The story of Saint James <span aria-hidden="true">↗</span></Link>
          </Reveal>
          <Reveal className="brand-visual" delay={130}>
            <div className="brand-visual-image">
              <Image
                src="/images/saint-james-skin.png"
                alt="A woman with rich brown skin pausing for a quiet skincare ritual"
                fill
                sizes="(max-width: 700px) 100vw, 43vw"
              />
            </div>
            <div className="brand-visual-caption">
              <span>Patricia Saint James</span>
              <span>A personal approach to beauty.</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="collections-section" aria-labelledby="collections-title">
        <div className="shell">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">Explore the collection</p>
              <h2 id="collections-title">A ritual in <em>every detail.</em></h2>
            </div>
            <p className="section-heading-copy">
              Find a considered edit of makeup, skincare, artist kits, cosmetic bags, and more. Browse by the way you like to get ready.
            </p>
          </Reveal>
          <div className="category-grid">
            {homeCollections.map((collection, index) => (
              <Reveal key={collection.id} delay={index * 70}>
                <Link className={`category-tile ${collection.className}`} href={`/shop?category=${collection.id}`}>
                  <span className="category-tile-index">{collection.number}</span>
                  <div className="category-tile-content">
                    <h3>{collection.title}</h3>
                    <p>{collection.copy}</p>
                  </div>
                  <span className="category-tile-arrow" aria-hidden="true">↗</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="featured-bottom">
            <Link className="arrow-link" href="/shop">View the full collection <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="featured-section" aria-labelledby="featured-title">
        <div className="shell">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">A few places to begin</p>
              <h2 id="featured-title">Selected for a <em>closer look.</em></h2>
            </div>
            <p className="section-heading-copy">
              Just a glimpse of the published collection. Ask about current shades, details, and availability before placing an order.
            </p>
          </Reveal>
          <div className="featured-grid">
            {featured.map((product, index) => {
              const kind = product.category === "complexion" ? "COMPLEXION" : product.category === "eyes" ? "EYES" : product.category === "lips" ? "LIPS" : "SKINCARE";
              return (
                <Reveal key={product.id} delay={index * 65}>
                  <article className="featured-card">
                    <div className={`featured-card-art featured-card-art--${product.category}`} aria-hidden="true">
                      <span className="featured-art-number">SJC&nbsp; · &nbsp;{product.id.padStart(2, "0")}</span>
                      <span className="featured-art-kind">{kind}</span>
                    </div>
                    <div className="featured-card-body">
                      <div className="featured-card-meta"><span>{kind}</span><span>{formatPrice(product.price)}</span></div>
                      <h3>{product.name}</h3>
                      <Link className="text-link" href={`/contact?topic=product&product=${encodeURIComponent(product.name)}`}>
                        Ask about this product <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <div className="featured-bottom">
            <Link className="arrow-link" href="/shop">Browse all published products <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="editorial-break" aria-labelledby="editorial-title">
        <div className="editorial-image">
          <Image
            src="/images/saint-james-ritual.png"
            alt="A color artist’s compact and brush, arranged on a softly lit surface"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
        <Reveal className="editorial-copy">
          <p className="eyebrow">The Saint James difference</p>
          <h2 id="editorial-title">Beauty is never <em>one shade.</em></h2>
          <p>
            Created especially for women of color, Saint James brings face, eye, and lip color together with skincare and clear, personal beauty education. Explore the range or ask about the shades and products that suit you.
          </p>
          <Link className="text-link" href="/beauty-notes">Read the beauty notes <span aria-hidden="true">↗</span></Link>
        </Reveal>
      </section>

      <section className="why-section" aria-labelledby="why-title">
        <div className="shell why-grid">
          <Reveal className="why-intro">
            <p className="eyebrow">A more personal beauty experience</p>
            <h2 id="why-title">Made with <em>intention.</em></h2>
            <p>
              Makeup and skincare experience, shared with warmth and without a complicated routine. That is the foundation of Saint James Cosmetics.
            </p>
            <Link className="text-link" href="/contact">Ask us a question <span aria-hidden="true">↗</span></Link>
          </Reveal>
          <div className="reason-list">
            {reasons.map((reason, index) => (
              <Reveal key={reason.number} delay={index * 70}>
                <article className="reason-row">
                  <span className="reason-num">{reason.number}</span>
                  <div className="reason-copy"><h3>{reason.title}</h3><p>{reason.copy}</p></div>
                  <span className="reason-arrow" aria-hidden="true">↗</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-quote-section" aria-label="Saint James Cosmetics philosophy">
        <div className="brand-quote-inner">
          <p className="eyebrow">The philosophy</p>
          <blockquote>“Beauty that is Love from Within.”</blockquote>
          <p>
            Patricia Saint James calls this the way you should live your life. Cosmetics, in her words, are a wonderful way to enhance your inner beauty.
          </p>
          <Link className="text-link" href="/about">More about the founder <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-inner">
          <p className="eyebrow">Discover Saint James</p>
          <h2>Make it <em>your own.</em></h2>
          <p>
            Explore the collection or speak with Saint James Cosmetics directly about products, color, and ordering.
          </p>
          <div className="cta-actions">
            <Link className="button button-light" href="/shop">Explore the collection <span aria-hidden="true">↗</span></Link>
            <a className="button button-dark" href="tel:+13104948094">Call (310) 494-8094 <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}
