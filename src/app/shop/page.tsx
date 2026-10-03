import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ShopExplorer from "@/components/shop-explorer";

export const metadata: Metadata = {
  title: "The collection",
  description:
    "Browse Saint James Cosmetics face, eye, lip, skincare, makeup kit, cosmetic bag and glitter collections with published price-sheet amounts.",
};

type ShopPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;

  return (
    <main id="main-content">
      <section className="page-hero page-hero--shop" aria-labelledby="shop-title">
        <Image
          className="page-hero-image"
          src="/images/saint-james-ritual.png"
          alt="A softly lit editorial still life inspired by the art of makeup"
          fill
          priority
          sizes="100vw"
        />
        <div className="page-hero-shade" aria-hidden="true" />
        <div className="page-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>The collection</span></nav>
          <p className="eyebrow">Color&nbsp; · &nbsp;care&nbsp; · &nbsp;confidence</p>
          <h1 id="shop-title">The <em>collection.</em></h1>
          <p>
            Explore makeup, skincare, cosmetic bags, artist kits, and finishing touches created by Patricia Saint James for women of color.
          </p>
        </div>
        <span className="page-hero-mark">Find your own way to wear it&nbsp; / &nbsp;02</span>
      </section>

      <section className="catalog-section" id="catalog" aria-labelledby="catalog-heading">
        <div className="shell">
          <h2 className="sr-only" id="catalog-heading">Browse Saint James Cosmetics products</h2>
          <div className="price-disclosure">
            <span>
              Prices shown are transcribed from the price sheet on the original Saint James Cosmetics website. Because that catalogue may not reflect current stock or pricing, please call to confirm availability, shades, shipping, and payment before ordering. The illustrated color artwork is editorial, not current product packaging.
            </span>
          </div>
          <ShopExplorer initialCategory={params.category ?? "all"} />

          <section className="bath-note" aria-labelledby="bath-title">
            <div>
              <p className="eyebrow">A quieter ritual</p>
              <h2 id="bath-title">A little time to unwind.</h2>
            </div>
            <div>
              <p>
                The original site also describes a line of skincare products for all skin types and delicious bath enhancers. Individual bath products and prices are not listed on the published price sheet; contact Saint James Cosmetics for current details.
              </p>
              <Link className="text-link" href="/contact?topic=product&product=Bath%20enhancers">Ask about bath enhancers <span aria-hidden="true">↗</span></Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
