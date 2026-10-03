"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { products, shopCategories, type CatalogFilter } from "@/lib/catalog";

type ShopExplorerProps = { initialCategory: string };

const allOptions = [{ id: "all" as const, label: "All products" }, ...shopCategories];

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
}

export default function ShopExplorer({ initialCategory }: ShopExplorerProps) {
  const startCategory = allOptions.some((option) => option.id === initialCategory)
    ? (initialCategory as CatalogFilter)
    : "all";
  const [activeCategory, setActiveCategory] = useState<CatalogFilter>(startCategory);
  const [search, setSearch] = useState("");

  const visibleProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatch = activeCategory === "all" || product.category === activeCategory;
      const searchMatch = !term || `${product.name} ${product.description}`.toLowerCase().includes(term);
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <>
      <section className="shop-controls" aria-label="Find products">
        <div className="shop-controls-top">
          <p className="results-count" aria-live="polite">
            {visibleProducts.length} {visibleProducts.length === 1 ? "product" : "products"}
            {search ? ` matching “${search}”` : activeCategory !== "all" ? ` in ${shopCategories.find((item) => item.id === activeCategory)?.label}` : " in the original price sheet"}
          </p>
          <label className="catalog-search">
            <span className="sr-only">Search the collection</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search the collection"
            />
            <span aria-hidden="true">⌕</span>
          </label>
        </div>
        <div className="category-filters" role="group" aria-label="Filter products by category">
          {allOptions.map((category) => (
            <button
              className={activeCategory === category.id ? "filter-pill is-selected" : "filter-pill"}
              key={category.id}
              type="button"
              aria-pressed={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {visibleProducts.length > 0 ? (
        <div className="product-grid" aria-live="polite">
          {visibleProducts.map((product, index) => {
            const category = shopCategories.find((item) => item.id === product.category);
            return (
              <article className={`product-card product-card--${product.category}`} key={product.id}>
                <div className={`product-art product-art--${product.category}`} aria-hidden="true">
                  <span className="product-art-index">SJC&nbsp; · &nbsp;{product.id.padStart(2, "0")}</span>
                  <span className="product-art-shape" />
                  <span className="product-art-label">{category?.label}</span>
                  <span className="product-art-number">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="product-card-copy">
                  <div className="product-meta-line">
                    <span>{category?.label}</span>
                    <strong>{formatPrice(product.price)}</strong>
                  </div>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <Link
                    href={`/contact?topic=product&product=${encodeURIComponent(product.name)}`}
                    className="product-ask-link"
                    aria-label={`Ask about ${product.name}, listed at ${formatPrice(product.price)}`}
                  >
                    Ask about this product <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="empty-results">
          <p className="eyebrow">Nothing by that name</p>
          <h2>Try another search.</h2>
          <p>Or speak with us about a shade, product family, or current availability.</p>
          <button className="button button-dark" type="button" onClick={() => { setSearch(""); setActiveCategory("all"); }}>
            Show all products
          </button>
        </div>
      )}
    </>
  );
}
