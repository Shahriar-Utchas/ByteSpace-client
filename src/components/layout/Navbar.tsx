"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { clashDisplay } from "@/app/fonts";

type NavbarProps = {
  variant?: "default" | "search";
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/#creators" },
] as const;

export default function Navbar({ variant = "default" }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isSearch = variant === "search";
  const linkStyles = `rounded-md text-white/95 no-underline transition-opacity duration-200 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4FB20] ${
    isSearch ? "text-base leading-6" : "text-[10px] leading-none lg:text-[13px]"
  }`;

  return (
    <header
      className={`relative z-20 text-white ${isSearch ? "h-[120px] max-md:h-20" : "h-20 max-sm:h-[68px]"}`}
    >
      <nav
        className={`${isSearch ? "course-container" : "home-container max-sm:w-[calc(100%_-_1.75rem)]"} grid h-full grid-cols-[1fr_auto_1fr] items-center max-md:grid-cols-[1fr_auto]`}
        aria-label="Primary navigation"
      >
        <Link
          className={`${clashDisplay.className} inline-flex items-center justify-self-start rounded-md font-semibold text-white no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4FB20] ${
            isSearch
              ? "gap-2 text-2xl leading-none max-sm:text-xl"
              : "gap-[5px] text-[15px] tracking-[-0.02em] lg:gap-2 lg:text-[19px] max-sm:gap-1.5 max-sm:text-[17px]"
          }`}
          href="/"
          aria-label="ByteSpace home"
        >
          <Image
              className={
                isSearch
                  ? "size-8 shrink-0 object-contain max-sm:size-7"
                  : "size-5 shrink-0 object-contain lg:size-7 max-sm:size-6"
              }
              src="/assets/hero-assets/logo-mark.svg"
              alt=""
              width={32}
              height={32}
            priority={isSearch}
          />
          <span>ByteSpace</span>
        </Link>

        <div className={`hidden items-center md:flex ${isSearch ? "gap-6" : "gap-[18px]"}`}>
          {NAV_LINKS.map((link, index) => (
            <Link
              className={`${linkStyles} ${isSearch && index === 0 ? "font-medium" : "font-normal"}`}
              href={link.href}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={`hidden items-center justify-self-end md:flex ${isSearch ? "gap-6" : "translate-x-1.5 gap-3.5"}`}>
          <Link className={linkStyles} href="/login">
            Sign In
          </Link>
          <Link className={linkStyles} href="/register">
            Join Us
          </Link>
          <Link
            className={`${linkStyles} grid size-6 place-items-center`}
            href="#cart"
            aria-label="Open shopping bag"
          >
            <Image
              src="/assets/search/shopping-bag.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
          </Link>
        </div>

        <button
          className="grid size-11 cursor-pointer place-items-center justify-self-end rounded-full border border-white/30 bg-white/10 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#D4FB20] md:hidden"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="m5 5 14 14M19 5 5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen ? (
        <div
          className="absolute inset-x-0 top-full border-t border-white/15 bg-[#003BE2] px-4 py-4 shadow-[0_18px_35px_rgba(0,25,110,0.24)] md:hidden"
          id="mobile-navigation"
        >
          <div className="course-container flex flex-col gap-1">
            {[...NAV_LINKS, { label: "Sign In", href: "/login" }, { label: "Join Us", href: "/register" }].map(
              (link) => (
                <Link
                  className="rounded-xl px-4 py-3 text-sm font-medium text-white no-underline hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4FB20]"
                  href={link.href}
                  key={link.label}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
