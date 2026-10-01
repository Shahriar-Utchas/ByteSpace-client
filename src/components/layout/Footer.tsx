import Image from "next/image";
import Link from "next/link";

import { clashDisplay } from "@/app/fonts";
import FooterNewsletterForm from "./FooterNewsletterForm";

type FooterLink = {
  readonly label: string;
  readonly href: string;
};

const FOOTER_LINK_GROUPS = [
  [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/courses" },
    { label: "Business", href: "/courses" },
    { label: "IT", href: "/courses" },
    { label: "Design", href: "/courses" },
  ],
  [
    { label: "Development", href: "/courses" },
    { label: "Marketing", href: "/courses" },
    { label: "Photography", href: "/courses" },
    { label: "Finance", href: "/courses" },
    { label: "Sport", href: "/courses" },
  ],
  [
    { label: "Become a Creator", href: "/register" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
] as const satisfies readonly (readonly FooterLink[])[];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
] as const satisfies readonly FooterLink[];

const footerLinkStyles =
  "rounded-sm text-xs leading-none text-[#3E4148] no-underline transition-colors hover:text-[#003BE2] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#003BE2]";

export default function Footer({ variant = "default" }: { variant?: "default" | "search" }) {
  const isSearch = variant === "search";

  return (
    <footer
      className={`bg-white text-[#242528] max-sm:pb-8 ${
        isSearch
          ? "min-h-[525px] border-t border-[#CED0D3] pt-[70px] pb-12 max-sm:pt-12"
          : "pt-16 pb-12 max-sm:pt-12"
      }`}
    >
      <div className={isSearch ? "course-container" : "home-container"}>
        <div
          className={`grid gap-14 lg:grid-cols-[1.15fr_1fr] ${
            isSearch ? "lg:grid-cols-[528px_1fr] lg:gap-[92px]" : "lg:gap-[100px]"
          }`}
        >
          <div className={isSearch ? "max-w-[528px]" : "max-w-[525px]"}>
            <Link
              className={`${clashDisplay.className} inline-flex items-center gap-2 rounded-sm font-semibold text-[#242528] no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003BE2] ${
                isSearch ? "text-2xl" : "text-[20px] tracking-[-0.025em]"
              }`}
              href="/"
              aria-label="ByteSpace home"
            >
              <Image
                className={isSearch ? "size-8 object-contain" : "size-7 object-contain"}
                src="/assets/hero-assets/logo-mark.svg"
                alt=""
                width={32}
                height={32}
              />
              <span>ByteSpace</span>
            </Link>

            <p
              className={`mt-4 text-[#4B4C53] ${
                isSearch ? "text-sm leading-[1.6]" : "text-[13px] leading-[1.6]"
              }`}
            >
              Stay Up to date with our latest features and releases by joining our
              newsletter.
            </p>

            <FooterNewsletterForm searchVariant={isSearch} />

            <p
              className={`text-[#4B4C53] ${
                isSearch
                  ? "mt-6 max-w-[504px] text-xs leading-[1.6]"
                  : "mt-5 max-w-[470px] text-[10px] leading-[1.65]"
              }`}
            >
              By subscribing, you agree to our Privacy Policy and consent to receive
              updates from our company.
            </p>
          </div>

          <nav
            className={`grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 ${
              isSearch ? "lg:gap-x-10 lg:pt-12" : "lg:gap-x-12"
            }`}
            aria-label="Footer navigation"
          >
            {FOOTER_LINK_GROUPS.map((group, groupIndex) => (
              <ul
                className={isSearch ? "space-y-4" : "space-y-5"}
                key={`footer-group-${groupIndex + 1}`}
              >
                {group.map((link) => (
                  <li key={link.label}>
                    <Link
                      className={`${footerLinkStyles} ${isSearch ? "text-sm leading-[1.6] text-[#242528]" : ""}`}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div
          className={`border-t border-[#CED0D3] pt-[22px] max-md:mt-16 ${
            isSearch ? "mt-[130px]" : "mt-28"
          }`}
        >
          <div
            className={`flex items-center justify-between gap-6 text-[#3E4148] max-sm:flex-col max-sm:items-start ${
              isSearch ? "text-xs leading-[1.6]" : "text-[10px]"
            }`}
          >
            <p>{isSearch ? "@" : "©"} 2023 ByteSpace. All rights reserved.</p>

            <nav aria-label="Legal navigation">
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="rounded-sm text-[#3E4148] no-underline transition-colors hover:text-[#003BE2] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#003BE2]"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
