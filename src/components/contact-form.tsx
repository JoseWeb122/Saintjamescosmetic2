"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const topics = [
  { value: "product", label: "Product availability or an order" },
  { value: "shade", label: "Shade or product guidance" },
  { value: "mail-order", label: "Mail-order information" },
  { value: "general", label: "A general enquiry" },
] as const;

const validTopics = new Set(topics.map((topic) => topic.value));

type ContactFormProps = { initialProduct?: string; initialTopic?: string };

export default function ContactForm({ initialProduct = "", initialTopic = "general" }: ContactFormProps) {
  const [topic, setTopic] = useState(validTopics.has(initialTopic as (typeof topics)[number]["value"]) ? initialTopic : "general");
  const [productName, setProductName] = useState(initialProduct.slice(0, 180));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<{ kind: "success" | "error"; message: string } | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setPending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, topic, productName, message, website }),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        setStatus({ kind: "error", message: result.error ?? "Your note could not be sent. Please try again." });
        return;
      }

      setStatus({ kind: "success", message: "Thank you — your enquiry has been received. For time-sensitive order questions, please call (310) 494-8094." });
      setMessage("");
    } catch {
      setStatus({ kind: "error", message: "We couldn't reach the enquiry form. Please email psjcosmetics@yahoo.com or call (310) 494-8094." });
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-field">
          <span>Your name</span>
          <input
            autoComplete="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            minLength={2}
            maxLength={120}
            placeholder="Name"
          />
        </label>
        <label className="form-field">
          <span>Email address</span>
          <input
            autoComplete="email"
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            maxLength={254}
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-field">
          <span>Phone <em>optional</em></span>
          <input
            autoComplete="tel"
            type="tel"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            maxLength={40}
            placeholder="(000) 000-0000"
          />
        </label>
        <label className="form-field">
          <span>How can we help?</span>
          <select name="topic" value={topic} onChange={(event) => setTopic(event.target.value)}>
            {topics.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>
      </div>

      <label className="form-field">
        <span>Product <em>optional</em></span>
        <input
          name="productName"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
          maxLength={180}
          placeholder="Is there a particular product or shade you have in mind?"
        />
      </label>

      <label className="form-field">
        <span>Your note</span>
        <textarea
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder="Share a little about what you are looking for…"
        />
      </label>

      <label className="honeypot" aria-hidden="true">
        Leave this field empty
        <input
          tabIndex={-1}
          autoComplete="off"
          name="website"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </label>

      <p className="form-privacy-note">Please don’t include payment-card details. Enquiry information is used to respond to your message.</p>
      <div className="form-submit-row">
        <button className="button button-dark" type="submit" disabled={pending}>
          {pending ? "Sending your note…" : "Send an enquiry"}
          <span aria-hidden="true">↗</span>
        </button>
        <span className="form-response" aria-live="polite">
          {status && (
            <span className={status.kind === "success" ? "form-status is-success" : "form-status is-error"}>
              {status.message}
            </span>
          )}
        </span>
      </div>
    </form>
  );
}
