import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { poppins } from "@/app/fonts";
import { HERO_ASSETS } from "@/constants";

type AuthShellProps = {
  readonly title: string;
  readonly description: string;
  readonly variant: "login" | "register";
  readonly children: ReactNode;
};

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Link
      className={`inline-flex rounded-md focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white ${className}`}
      href="/"
      aria-label="ByteSpace home"
    >
      <Image
        className="h-9 w-8 object-contain 2xl:h-11 2xl:w-10"
        src={HERO_ASSETS.logo}
        alt=""
        width={116}
        height={126}
        priority
      />
    </Link>
  );
}

export default function AuthShell({
  title,
  description,
  variant,
  children,
}: AuthShellProps) {
  return (
    <div className="h-svh overflow-hidden bg-[#003BE2] text-white [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-position:top_left] [background-size:160px_160px] max-lg:[background-size:96px_96px]">
      <div
        className={`mx-auto grid h-svh max-w-[1800px] grid-rows-[40svh_60svh] lg:grid-rows-1 ${
          variant === "login"
            ? "lg:grid-cols-2"
            : "lg:grid-cols-[54.5%_45.5%]"
        }`}
      >
        <section className="relative hidden h-svh min-h-0 flex-col overflow-hidden pt-9 pl-[9vw] lg:flex 2xl:pt-12">
          <LogoMark />

          <div className="mt-14 max-w-[650px] 2xl:mt-[68px]">
            <h2
              className={`${poppins.className} text-[24px] leading-tight font-semibold tracking-[-0.035em] 2xl:text-[28px]`}
            >
              {title}
            </h2>
            <p className="mt-5 text-base leading-[1.6] text-white/90 xl:text-lg 2xl:text-[21px]">
              {description}
            </p>
          </div>

          <Image
            className={`mt-12 h-auto w-[72%] max-w-[660px] object-contain object-left-top ${
              variant === "login" ? "xl:mt-20" : "xl:mt-24"
            } 2xl:mt-20`}
            src="/assets/auth/auth-hero.png"
            alt=""
            width={2207}
            height={2343}
            sizes="(max-width: 1023px) 0px, (max-width: 1535px) 38vw, 660px"
            priority
          />
        </section>

        <section className="relative flex h-[40svh] min-h-0 items-center justify-center overflow-hidden lg:hidden">
          <LogoMark className="absolute top-4 left-5 z-10" />
          <Image
            className="absolute -bottom-[7%] h-[34svh] w-auto max-w-[94%] object-contain"
            src="/assets/auth/auth-hero.png"
            alt=""
            width={2207}
            height={2343}
            sizes="94vw"
            priority
          />
        </section>

        <section
          className={`relative flex h-[60svh] min-h-0 items-stretch justify-center px-3 py-2 sm:px-6 sm:py-3 lg:h-svh lg:items-center lg:justify-start lg:py-12 lg:pr-12 ${
            variant === "login" ? "lg:pl-6" : "lg:pl-0"
          }`}
        >
          {children}
        </section>
      </div>
    </div>
  );
}
