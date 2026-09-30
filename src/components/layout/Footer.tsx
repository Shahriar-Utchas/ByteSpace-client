import Image from "next/image";
import Link from "next/link";

import { clashDisplay } from "@/app/fonts";
import { HERO_ASSETS } from "@/constants";

type FooterLink = {
  readonly label: string;
  readonly href: string;
};

const FOOTER_LINK_GROUPS = [
  [
    { label: "Featured Courses", href: "/#courses" },
    { label: "Featured Categories", href: "/#courses" },
    { label: "Business", href: "/#courses" },
    { label: "IT", href: "/#courses" },
    { label: "Design", href: "/#courses" },
  ],
  [
    { label: "Development", href: "/#courses" },
    { label: "Marketing", href: "/#courses" },
    { label: "Photography", href: "/#courses" },
    { label: "Finance", href: "/#courses" },
    { label: "Sport", href: "/#courses" },
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

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-12 text-[#30333A] max-sm:pt-12 max-sm:pb-8">
      <div className="mx-auto w-[calc(100%_-_2rem)] max-w-[1080px] lg:w-[calc(100%_-_5rem)]">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-[100px]">
          <div className="max-w-[525px]">
            <Link
              className={`${clashDisplay.className} inline-flex items-center gap-2 rounded-sm text-[20px] font-semibold tracking-[-0.025em] text-[#181A20] no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003BE2]`}
              href="/"
              aria-label="ByteSpace home"
            >
              <Image
                className="h-7 w-[26px] object-contain"
                src={HERO_ASSETS.logo}
                alt=""
                width={116}
                height={126}
              />
              <span>ByteSpace</span>
            </Link>

            <p className="mt-4 text-[13px] leading-[1.6] text-[#555962]">
              Stay Up to date with our latest features and releases by joining our
              newsletter.
            </p>

            <form
              className="mt-9 flex max-w-[470px] items-center gap-4 max-sm:flex-col max-sm:items-stretch"
              action=""
              method="get"
            >
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                className="h-[46px] min-w-0 flex-1 rounded-full border border-[#C9CCD2] bg-white px-5 text-xs text-[#1D2027] outline-none placeholder:text-[#666A73] focus:border-[#003BE2] focus:ring-3 focus:ring-[#003BE2]/15"
                id="footer-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
              <button
                className="h-11 cursor-pointer rounded-full bg-[#D4FB20] px-6 text-xs font-medium text-[#142800] transition-shadow hover:shadow-[0_8px_20px_rgba(48,70,0,0.18)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#003BE2] max-sm:self-start"
                type="submit"
              >
                Search
              </button>
            </form>

            <p className="mt-5 max-w-[470px] text-[10px] leading-[1.65] text-[#555962]">
              By subscribing, you agree to our Privacy Policy and consent to receive
              updates from our company.
            </p>
          </div>

          <nav
            className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:gap-x-12"
            aria-label="Footer navigation"
          >
            {FOOTER_LINK_GROUPS.map((group, groupIndex) => (
              <ul className="space-y-5" key={`footer-group-${groupIndex + 1}`}>
                {group.map((link) => (
                  <li key={link.label}>
                    <Link className={footerLinkStyles} href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-28 border-t border-[#D1D4D9] pt-5 max-md:mt-16">
          <div className="flex items-center justify-between gap-6 text-[10px] text-[#3E4148] max-sm:flex-col max-sm:items-start">
            <p>© 2023 ByteSpace. All rights reserved.</p>

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
