"use client";

import { useState, type FormEvent } from "react";
import { contactFormSchema } from "@/lib/validators";
import { site } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

type Errors = Partial<Record<"name" | "email" | "company" | "message", string>>;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (
          key === "name" ||
          key === "email" ||
          key === "company" ||
          key === "message"
        ) {
          nextErrors[key] = issue.message;
        }
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-lg text-text" role="status">
        Thanks, I will reply {site.replyTime}.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={Boolean(errors.name)}
          className="mt-2 w-full rounded-[10px] border border-border bg-surface px-4 py-3 text-base text-text"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={Boolean(errors.email)}
          className="mt-2 w-full rounded-[10px] border border-border bg-surface px-4 py-3 text-base text-text"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-text"
        >
          Company (optional)
        </label>
        <input
          id="company"
          name="company"
          type="text"
          aria-describedby={errors.company ? "company-error" : undefined}
          aria-invalid={Boolean(errors.company)}
          className="mt-2 w-full rounded-[10px] border border-border bg-surface px-4 py-3 text-base text-text"
        />
        {errors.company && (
          <p id="company-error" className="mt-1 text-sm text-red-400">
            {errors.company}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={6}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={Boolean(errors.message)}
          className="mt-2 w-full rounded-[10px] border border-border bg-surface px-4 py-3 text-base text-text"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-[10px] bg-accent px-6 py-3.5 text-base font-semibold text-accent-text transition-colors duration-150 ease-out hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending" : "Send message"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          Something went wrong. Email me at{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>{" "}
          instead.
        </p>
      )}
    </form>
  );
}
