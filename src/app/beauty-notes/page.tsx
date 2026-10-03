import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Beauty notes",
  description:
    "A thoughtful edit of the original Saint James Cosmetics beauty advice on moisturizing, color, and personal expression.",
};

export default function BeautyNotesPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero--contact" aria-labelledby="notes-title">
        <Image
          className="page-hero-image"
          src="/images/saint-james-hero.png"
          alt="A softly lit editorial beauty portrait"
          fill
          priority
          sizes="100vw"
        />
        <div className="page-hero-shade" aria-hidden="true" />
        <div className="page-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Beauty notes</span></nav>
          <p className="eyebrow">A little wisdom, to take with you</p>
          <h1 id="notes-title">Beauty <em>notes.</em></h1>
          <p>Original Saint James ideas on caring for skin, choosing color, and making beauty feel like your own.</p>
        </div>
        <span className="page-hero-mark">Beauty tips&nbsp; / &nbsp;New discoveries</span>
      </section>

      <section className="notes-intro shell">
        <div className="notes-intro-inner">
          <Reveal>
            <p className="eyebrow">Small rituals, real expression</p>
            <h2>A routine should feel <em>like yours.</em></h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Saint James’s original beauty notes are refreshingly direct: begin with care, choose color that makes you feel like yourself, and let makeup enhance—not replace—your natural beauty.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="notes-grid shell" aria-label="Saint James beauty tips">
        <Reveal>
          <article className="note-card">
            <span className="note-index">01&nbsp; · &nbsp;Skin first</span>
            <h2>Begin with a little care.</h2>
            <p>
              The original Saint James beauty tip recommends using a good moisturizer before makeup. Explore the published skincare range and ask which options are currently available.
            </p>
            <Link href="/shop?category=skincare">Explore skincare&nbsp; ↗</Link>
          </article>
        </Reveal>
        <Reveal delay={80}>
          <article className="note-card">
            <span className="note-index">02&nbsp; · &nbsp;Your color</span>
            <h2>Make room for expression.</h2>
            <p>
              A soft touch or a bolder accent can each have their moment. The collection includes foundations, face color, eye color, and shades for lips; ask directly about current shades.
            </p>
            <Link href="/shop?category=complexion">Explore complexion&nbsp; ↗</Link>
          </article>
        </Reveal>
        <Reveal delay={160}>
          <article className="note-card">
            <span className="note-index">03&nbsp; · &nbsp;A classic lip</span>
            <h2>A little color goes a long way.</h2>
            <p>
              The original “New Discoveries” note celebrated a red lip for any season. Ask about today’s available lipstick shades, glosses, and lip liners.
            </p>
            <Link href="/shop?category=lips">Explore lips&nbsp; ↗</Link>
          </article>
        </Reveal>
      </section>

      <section className="notes-image-break" aria-labelledby="notes-image-title">
        <Image
          src="/images/saint-james-skin.png"
          alt="A woman with rich brown skin enjoying a quiet skincare moment"
          fill
          sizes="100vw"
        />
        <div className="notes-image-content">
          <p className="eyebrow eyebrow-light">The original motto</p>
          <h2 id="notes-image-title">Beauty is love <em>from within.</em></h2>
          <p>
            That idea has always been at the heart of Saint James Cosmetics. Explore the collection on your own, or talk with the brand about a product that feels right for you.
          </p>
          <Link className="button button-light" href="/contact">Ask a question <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
