import Image from "next/image";
import Link from "next/link";
import { clashDisplay } from "@/app/fonts";
import { HERO_ASSETS } from "@/constants";

const linkStyles =
  "rounded-md text-[10px] leading-none text-white/95 no-underline transition-opacity duration-200 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4FB20] lg:text-[13px] max-sm:text-xs";

export default function Navbar() {
  return (
    <header className="relative z-20 h-20 text-white max-sm:h-[68px]">
      <nav
        className="mx-auto grid h-full w-[calc(100%_-_9.375rem)] max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center max-md:w-[calc(100%_-_2rem)] max-md:grid-cols-[1fr_auto] max-sm:w-[calc(100%_-_1.75rem)]"
        aria-label="Primary navigation"
      >
        <Link
          className={`${clashDisplay.className} inline-flex items-center gap-[5px] justify-self-start rounded-md text-[15px] font-semibold tracking-[-0.02em] text-white no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4FB20] lg:gap-2 lg:text-[19px] max-sm:gap-1.5 max-sm:text-[17px]`}
          href="/"
          aria-label="ByteSpace home"
        >
          <Image
            className="h-5 w-[19px] shrink-0 object-contain lg:h-7 lg:w-[26px] max-sm:h-6 max-sm:w-[22px]"
            src={HERO_ASSETS.logo}
            alt="ByteSpace"
            width={116}
            height={126}
          />
          <span>ByteSpace</span>
        </Link>

        <div className="flex items-center gap-[18px] max-md:hidden">
          <Link className={linkStyles} href="/">
            Home
          </Link>
          <Link className={linkStyles} href="#courses">
            Courses
          </Link>
          <Link className={linkStyles} href="#creators">
            Creators
          </Link>
        </div>

        <div className="flex translate-x-1.5 items-center gap-3.5 justify-self-end max-md:translate-x-0 max-md:gap-[18px] max-sm:gap-[13px]">
          <Link className={`${linkStyles} max-sm:hidden`} href="/login">
            Sign In
          </Link>
          <Link className={linkStyles} href="/register">
            Join Us
          </Link>
          <Link
            className={`${linkStyles} grid size-[25px] place-items-center`}
            href="#cart"
            aria-label="Open shopping bag"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6.7 8.25h10.6l.8 11H5.9l.8-11Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M9.25 9V6.65a2.75 2.75 0 0 1 5.5 0V9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}
