import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact & orders",
  description:
    "Contact Saint James Cosmetics about products, current shade availability, ordering, and mail-order details. Call (310) 494-8094.",
};

type ContactPageProps = {
  searchParams: Promise<{ product?: string; topic?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;

  return (
    <main id="main-content">
      <section className="page-hero page-hero--contact" aria-labelledby="contact-title">
        <Image
          className="page-hero-image"
          src="/images/saint-james-skin.png"
          alt="A calm, warm beauty ritual"
          fill
          priority
          sizes="100vw"
        />
        <div className="page-hero-shade" aria-hidden="true" />
        <div className="page-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Contact &amp; orders</span></nav>
          <p className="eyebrow">We’d love to hear from you</p>
          <h1 id="contact-title">Let’s talk <em>beauty.</em></h1>
          <p>Ask about a shade, a product, or how to order. For orders and a personal conversation, call Saint James Cosmetics directly.</p>
        </div>
        <span className="page-hero-mark">Contact Saint James&nbsp; / &nbsp;04</span>
      </section>

      <section className="contact-section shell" aria-labelledby="contact-form-heading">
        <div className="contact-layout">
          <div className="contact-form-wrap">
            <p className="eyebrow">A note to Saint James Cosmetics</p>
            <h2 id="contact-form-heading">What are you looking for?</h2>
            <p className="contact-form-intro">
              Ask about products, available colors, or mail ordering. The published catalogue prices and shades should be confirmed by phone before an order is placed.
            </p>
            <ContactForm initialProduct={params.product} initialTopic={params.topic} />
          </div>

          <aside className="contact-sidebar" aria-label="Direct contact information">
            <section className="contact-info-card contact-info-card--dark">
              <p className="eyebrow">For an immediate reply</p>
              <h3>Call us directly.</h3>
              <p>Orders and product questions are welcomed by phone.</p>
              <a href="tel:+13104948094">(310) 494-8094</a>
              <a href="mailto:psjcosmetics@yahoo.com">psjcosmetics@yahoo.com</a>
            </section>

            <section className="contact-info-card" id="mail-orders">
              <p className="eyebrow">Mail order</p>
              <h3>Prefer to write?</h3>
              <address>
                Saint James Cosmetics, Inc.<br />
                P.O. Box 15073<br />
                Beverly Hills, CA 90209-2073
              </address>
              <p>The original website provides this address for mail orders. Please call first to confirm current products, payment, and fulfillment details.</p>
            </section>
          </aside>
        </div>

        <div className="ordering-strip">
          <span className="ordering-strip-mark" aria-hidden="true">SJC</span>
          <span><strong>Ordering, at a glance.</strong> The original website lists Visa and Mastercard and complimentary shipping on orders of $50 or more. Please call to confirm current payment and shipping terms before ordering. This redesigned site does not accept card payments.</span>
        </div>
      </section>
    </main>
  );
}
