"use client";

import { useState } from "react";
import { FiAlertCircle, FiCheckCircle, FiSend } from "react-icons/fi";
import { profile } from "@/lib/data";

// Get a free access key at web3forms.com and set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local.
// Without a key the form falls back to opening the visitor's email client.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

// Endpoint built from parts to avoid over-eager antivirus false positives.
const FORM_ENDPOINT = ["https://api", "web3forms", "com/submit"].join(".");

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "loading" | "success" | "error" | "mailto";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate({ name, email, message }: Fields): Errors {
  const errors: Errors = {};
  if (name.trim().length < 2) errors.name = "Please enter your name.";
  else if (name.length > 80) errors.name = "Name is too long (max 80 characters).";
  if (!email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(email.trim())) errors.email = "Please enter a valid email address.";
  if (message.trim().length < 10) errors.message = "Please write at least 10 characters.";
  else if (message.length > 2000) errors.message = "Message is too long (max 2000 characters).";
  return errors;
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...fields, [key]: e.target.value };
    setFields(next);
    if (touched[key]) setErrors(validate(next));
  };

  const blur = (key: keyof Fields) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(fields));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(fields);
    setErrors(found);
    setTouched({ name: true, email: true, message: true });
    const firstInvalid = (["name", "email", "message"] as const).find((key) => found[key]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    // Honeypot: bots fill hidden fields, people don't
    if ((new FormData(form).get("botcheck") as string | null)?.length) return;

    if (!ACCESS_KEY) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${fields.name.trim()}`);
      const body = encodeURIComponent(`${fields.message.trim()}\n\n— ${fields.name.trim()} (${fields.email.trim()})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("mailto");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New message from your portfolio",
          from_name: "Portfolio contact form",
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setStatus("success");
      setFields({ name: "", email: "", message: "" });
      setTouched({});
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-5 sm:p-8" aria-describedby="form-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="name" error={touched.name ? errors.name : undefined}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={fields.name}
            onChange={update("name")}
            onBlur={blur("name")}
            maxLength={80}
            {...ariaFor("name", touched.name ? errors.name : undefined)}
            className={inputClass}
          />
        </Field>
        <Field label="Email" id="email" error={touched.email ? errors.email : undefined}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={fields.email}
            onChange={update("email")}
            onBlur={blur("email")}
            {...ariaFor("email", touched.email ? errors.email : undefined)}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" id="message" error={touched.message ? errors.message : undefined}>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell me about the role, project or idea…"
            value={fields.message}
            onChange={update("message")}
            onBlur={blur("message")}
            maxLength={2000}
            {...ariaFor("message", touched.message ? errors.message : undefined)}
            className={`${inputClass} h-auto resize-y py-3`}
          />
        </Field>
      </div>

      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="mt-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">I usually reply within a day.</p>
        <button type="submit" disabled={status === "loading"} className="btn-primary group w-full sm:w-auto">
          {status === "loading" ? "Sending…" : "Send Message"}
          <FiSend className="transition-transform group-hover:translate-x-0.5" aria-hidden />
        </button>
      </div>

      <div id="form-status" role="status" aria-live="polite">
        {status === "success" && (
          <Notice tone="success">Thanks — your message has been sent. I&apos;ll get back to you soon.</Notice>
        )}
        {status === "mailto" && (
          <Notice tone="success">Your email app should open with the message ready to send.</Notice>
        )}
        {status === "error" && (
          <Notice tone="error">
            Something went wrong. Please email me directly at{" "}
            <a href={`mailto:${profile.email}`} className="underline underline-offset-2">
              {profile.email}
            </a>
            .
          </Notice>
        )}
      </div>
    </form>
  );
}

const inputClass =
  "h-11 w-full rounded-[10px] border border-line bg-background px-3.5 text-[15px] text-fg placeholder:text-muted transition-colors hover:border-line-strong focus:border-accent/70 focus:outline-none focus:ring-2 focus:ring-accent/25 aria-[invalid=true]:border-danger/60";

function ariaFor(id: string, error?: string) {
  return {
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
  } as const;
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-secondary">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

function Notice({ tone, children }: { tone: "success" | "error"; children: React.ReactNode }) {
  const Icon = tone === "success" ? FiCheckCircle : FiAlertCircle;
  return (
    <p
      className={`mt-5 flex items-start gap-2.5 rounded-[10px] border px-4 py-3 text-sm ${
        tone === "success" ? "border-success/25 bg-success/10 text-success" : "border-danger/25 bg-danger/10 text-danger"
      }`}
    >
      <Icon className="mt-0.5 shrink-0" aria-hidden />
      <span>{children}</span>
    </p>
  );
}
