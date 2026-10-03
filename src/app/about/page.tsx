import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "Meet Patricia Saint James, the Beverly Hills beauty founder behind a makeup and skincare line created especially for women of color.",
};

const storyFacts = [
  {
    number: "01",
    title: "A beauty-industry eye",
    copy: "Patricia’s background includes makeup, skincare, and fashion—the worlds that shaped her considered approach to beauty.",
  },
  {
    number: "02",
    title: "Sharing what she knows",
    copy: "She has taught many clients simple industry techniques and basic products to enhance their natural appearance.",
  },
  {
    number: "03",
    title: "Beauty beyond the mirror",
    copy: "Patricia has served as spokesperson and mistress of ceremony for charity events, benefits, and fundraisers, and produces fashion and beauty shows for all ages.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero--story" aria-labelledby="about-title">
        <Image
          className="page-hero-image"
          src="/images/saint-james-skin.png"
          alt="Editorial portrait in a warm, quiet beauty setting"
          fill
          priority
          sizes="100vw"
        />
        <div className="page-hero-shade" aria-hidden="true" />
        <div className="page-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Our story</span></nav>
          <p className="eyebrow">Beverly Hills&nbsp; · &nbsp;A founder’s point of view</p>
          <h1 id="about-title">Beauty, with <em>meaning.</em></h1>
          <p>
            A cosmetics collection by Patricia Saint James, founded on personal experience, thoughtful color, and a simple philosophy: beauty begins within.
          </p>
        </div>
        <span className="page-hero-mark">The Saint James story&nbsp; / &nbsp;03</span>
      </section>

      <section className="story-section shell" aria-labelledby="story-intro-title">
        <div className="story-grid">
          <Reveal className="story-image">
            <Image
              src="/images/saint-james-ritual.png"
              alt="Color artistry and makeup tools arranged in soft light"
              fill
              sizes="(max-width: 700px) 100vw, 45vw"
            />
            <div className="story-image-caption">
              <span>Saint James Cosmetics</span>
              <span>Created by Patricia Saint James</span>
            </div>
          </Reveal>
          <Reveal className="story-copy" delay={120}>
            <p className="eyebrow">The person behind the collection</p>
            <h2 id="story-intro-title">A love of beauty, made <em>personal.</em></h2>
            <p>
              Based in Beverly Hills, Patricia Saint James created an opulent collection of cosmetics especially for women of color and a range of skin tones. The line brings makeup and skincare together with the vibrant color and considered ingredients described in its original story.
            </p>
            <p>
              Patricia’s experience spans makeup, skincare, and fashion. She has shared the simple techniques and basic products she has learned in the beauty industry with her clients, helping them find ways to enhance their natural appearance.
            </p>
            <Link className="text-link" href="/shop">Explore the collection <span aria-hidden="true">↗</span></Link>
          </Reveal>
        </div>
      </section>

      <section className="story-facts shell" aria-label="Patricia Saint James's work">
        <div className="story-facts-grid">
          {storyFacts.map((fact, index) => (
            <Reveal key={fact.number} delay={index * 70}>
              <article className="story-fact">
                <span className="story-fact-number">{fact.number}</span>
                <h3>{fact.title}</h3>
                <p>{fact.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="founder-quote" aria-label="Saint James Cosmetics motto">
        <p className="eyebrow">A way to live</p>
        <blockquote>“Beauty that is Love from Within.”</blockquote>
        <p>Patricia Saint James · Saint James Cosmetics</p>
      </section>

      <section className="cta-section">
        <div className="cta-inner">
          <p className="eyebrow">A personal invitation</p>
          <h2>Make beauty <em>your own.</em></h2>
          <p>Browse the published collection, ask about a product, or place an order directly by phone.</p>
          <div className="cta-actions">
            <Link className="button button-light" href="/shop">Explore the collection <span aria-hidden="true">↗</span></Link>
            <Link className="button button-dark" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
