import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ordering, privacy & returns",
  description:
    "Review Saint James Cosmetics ordering, mail-order, privacy, shipping, and original published return information.",
};

export default function PoliciesPage() {
  return (
    <main id="main-content" className="shell policy-main">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Ordering &amp; policies</span></nav>
      <header className="policy-intro">
        <p className="eyebrow">The helpful details</p>
        <h1>Ordering &amp; <em>policies.</em></h1>
        <p>Clear, up-front information about ordering, mail delivery, returns, and what happens when you send an enquiry.</p>
      </header>

      <div className="policy-grid">
        <section className="policy-card" aria-labelledby="order-policy-title">
          <p className="eyebrow">Orders &amp; payment</p>
          <h2 id="order-policy-title">Place an order</h2>
          <p>
            Saint James Cosmetics accepts product enquiries by email and this contact form; orders are placed by phone. Call <a href="tel:+13104948094">(310) 494-8094</a> to confirm available products, shades, the total, current payment options, and shipping before ordering.
          </p>
          <p>
            The original Saint James website lists Visa and Mastercard and complimentary shipping on orders of $50 or more. Its published mail-order address is:
          </p>
          <p><strong>Saint James Cosmetics, Inc.<br />P.O. Box 15073<br />Beverly Hills, CA 90209-2073</strong></p>
          <p>Please call before mailing payment or personal information. This redesigned website does not offer an online checkout or collect card details.</p>
        </section>

        <section className="policy-card" aria-labelledby="return-policy-title">
          <p className="eyebrow">Original published return terms</p>
          <h2 id="return-policy-title">Returns &amp; exchanges</h2>
          <p>
            The original website’s return policy states that returns must be made within 10 days of purchase and be in original, unused condition. It lists an exchange for an item of equal or lesser value or store credit; it does not offer refunds. Return shipping is the buyer’s responsibility.
          </p>
          <p>
            It gives the same P.O. Box 15073, Beverly Hills, CA 90209-2073 return address. Because these terms are from the original published policy, please call or email to confirm the current policy before sending a return.
          </p>
          <p><a href="tel:+13104948094">Confirm return details by phone&nbsp; ↗</a></p>
        </section>

        <section className="policy-card" aria-labelledby="privacy-policy-title">
          <p className="eyebrow">Your information</p>
          <h2 id="privacy-policy-title">Privacy</h2>
          <p>
            The original Saint James Cosmetics privacy notice states that personal information is not rented or sold and is used to fulfill orders and respond to customers. It also describes email marketing as optional.
          </p>
          <p>
            On this redesigned site, the contact form stores the name, email, optional phone, enquiry topic, optional product, and message you submit so that the enquiry can be handled. The form does not collect payment-card details or add you to a marketing list. Please do not include financial or other sensitive information in your message.
          </p>
          <p>To ask about information you have submitted, email <a href="mailto:psjcosmetics@yahoo.com">psjcosmetics@yahoo.com</a>.</p>
        </section>

        <section className="policy-card" aria-labelledby="availability-title">
          <p className="eyebrow">Products &amp; published prices</p>
          <h2 id="availability-title">Availability</h2>
          <p>
            Product names, descriptions, and prices shown in the collection are taken from the original Saint James Cosmetics website. They are published for reference and may not reflect present inventory, shades, or pricing. Call before ordering so current details can be confirmed.
          </p>
          <p>
            A few older product names and original page references may not appear in the published price sheet. Bath enhancers are mentioned on the original site, but individual items and prices are not listed.
          </p>
          <p><Link href="/shop">Browse the collection&nbsp; ↗</Link></p>
        </section>
      </div>

      <p className="policy-disclaimer">Saint James Cosmetics’ original website is the source of the historical prices, mail-order address, shipping statement, and return terms reproduced here. For current arrangements, call the business before placing an order or sending a return.</p>
    </main>
  );
}
