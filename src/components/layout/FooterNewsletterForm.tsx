"use client";

import { FormEvent, useState } from "react";

export default function FooterNewsletterForm({ searchVariant = false }: { searchVariant?: boolean }) {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setMessage("Thanks for subscribing!");
    form.reset();
  }

  return (
    <>
      <form
        className={`flex items-center max-sm:flex-col max-sm:items-stretch ${
          searchVariant ? "mt-[45px] max-w-[504px] gap-6" : "mt-9 max-w-[470px] gap-4"
        }`}
        onSubmit={handleSubmit}
      >
        <label className="sr-only" htmlFor={`footer-email-${searchVariant ? "search" : "default"}`}>
          Email address
        </label>
        <input
          className={`min-w-0 flex-1 rounded-full border border-[#CED0D3] bg-white text-[#242528] outline-none placeholder:text-[#4B4C53] focus:border-[#003BE2] focus:ring-3 focus:ring-[#003BE2]/15 ${
            searchVariant ? "h-[52px] px-6 text-base" : "h-[46px] px-5 text-xs"
          }`}
          id={`footer-email-${searchVariant ? "search" : "default"}`}
          name="email"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          required
        />
        <button
          className={`cursor-pointer rounded-full bg-[#D4FB20] px-6 font-medium text-[#142800] transition-shadow hover:shadow-[0_8px_20px_rgba(48,70,0,0.18)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#003BE2] max-sm:self-start ${
            searchVariant ? "h-[46px] text-lg" : "h-11 text-xs"
          }`}
          type="submit"
        >
          Search
        </button>
      </form>
      <p className="sr-only" role="status" aria-live="polite">
        {message}
      </p>
    </>
  );
}
