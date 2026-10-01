import Image from "next/image";
import Link from "next/link";

import { poppins } from "@/app/fonts";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <>
      <section
        className="min-h-[960px] overflow-hidden bg-[var(--search-blue)] text-white max-md:min-h-[760px]"
        style={{
          backgroundImage:
            "linear-gradient(var(--search-grid) 1px, transparent 1px), linear-gradient(90deg, var(--search-grid) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
        aria-labelledby="not-found-title"
      >
        <Navbar variant="search" />

        <div className="course-container flex min-h-[840px] flex-col items-center pt-[100px] pb-16 text-center max-md:min-h-[680px] max-md:pt-20 max-sm:pt-16">
          <Image
            className="h-auto w-[min(64vw,920px)] min-w-[330px] select-none max-sm:w-[118%] max-sm:min-w-0"
            src="/assets/not-found/404.png"
            alt="404"
            width={920}
            height={358}
            priority
          />

          <h1
            className={`${poppins.className} -mt-[62px] max-w-[920px] text-[clamp(2.25rem,4.45vw,4rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-[#F5F5F6] max-sm:-mt-5`}
            id="not-found-title"
          >
            The page you are looking
            <br className="max-sm:hidden" /> for doesn’t exist
          </h1>

          <p className="mt-10 text-base leading-[1.6] text-[#CED0D3] max-sm:mt-7 max-sm:max-w-[310px] max-sm:text-sm">
            Try to use a correct url or go back to homepage to start again
          </p>

          <Link
            className="mt-8 inline-flex h-12 items-center rounded-full bg-[var(--search-lime)] px-7 text-lg font-medium text-[#142800] no-underline transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(48,70,0,0.2)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white"
            href="/"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <Footer variant="search" />
    </>
  );
}
