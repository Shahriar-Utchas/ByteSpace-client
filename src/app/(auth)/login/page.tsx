import type { Metadata } from "next";
import Link from "next/link";

import { poppins } from "@/app/fonts";
import AuthField from "../_components/AuthField";
import AuthShell from "../_components/AuthShell";

export const metadata: Metadata = {
  title: "Sign In | ByteSpace",
  description: "Sign in to your ByteSpace account.",
};

function FacebookIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path
        d="M13.35 19v-6.35h2.13l.32-2.48h-2.45V8.59c0-.72.2-1.21 1.23-1.21h1.31V5.16c-.23-.03-1-.1-1.91-.1-1.89 0-3.18 1.15-3.18 3.27v1.84H8.67v2.48h2.13V19h2.55Z"
        fill="white"
      />
    </svg>
  );
}

export default function LoginPage() {
  return (
    <AuthShell
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      variant="login"
    >
      <div className="flex h-full min-h-0 w-full max-w-[580px] flex-col overflow-hidden rounded-[22px] bg-white p-4 text-[#202329] sm:p-5 lg:h-[calc(100svh-6rem)] lg:max-h-[834px] lg:rounded-[28px] lg:p-[clamp(24px,5vh,56px)] 2xl:max-w-[620px] 2xl:rounded-[32px] 2xl:p-[clamp(40px,5vh,64px)]">
        <p className="text-[11px] font-medium text-[#003BE2] lg:text-[clamp(13px,1.5vh,16px)]">
          Sign In
        </p>
        <h1
          className={`${poppins.className} mt-1 text-[26px] leading-none font-semibold tracking-[-0.045em] lg:mt-2 lg:text-[clamp(32px,4vh,40px)]`}
        >
          Welcome Back
        </h1>

        <form
          className="mt-4 space-y-3 lg:mt-[clamp(24px,4.5vh,48px)] lg:space-y-[clamp(12px,2.2vh,24px)]"
          action="/login"
          method="post"
        >
          <AuthField
            id="login-email"
            label="Email"
            name="email"
            type="email"
            placeholder="designer@example.com"
            autoComplete="email"
            required
          />
          <AuthField
            id="login-password"
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            autoComplete="current-password"
            required
          />

          <div className="flex justify-end pt-2">
            <button
              className="h-9 cursor-pointer rounded-full bg-[#D4FB20] px-6 text-xs font-medium text-[#142800] transition-shadow hover:shadow-[0_9px_24px_rgba(45,67,0,0.2)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#003BE2] lg:h-11 lg:px-7 lg:text-sm"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-4 flex items-center gap-3 text-[10px] text-[#92969F] lg:mt-[clamp(28px,7vh,80px)] lg:gap-4 lg:text-xs">
          <span className="h-px flex-1 bg-[#C8CBD1]" />
          <span>or</span>
          <span className="h-px flex-1 bg-[#C8CBD1]" />
        </div>

        <div className="mt-2.5 flex justify-center gap-3 lg:mt-[clamp(14px,2.5vh,28px)] lg:gap-4">
          <button
            className="grid size-9 cursor-pointer place-items-center rounded-[11px] border border-[#D2D5DB] text-black transition-colors hover:bg-[#F5F5F6] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#003BE2] lg:size-12 lg:rounded-[14px]"
            type="button"
            aria-label="Continue with Facebook"
          >
            <span className="scale-75 lg:scale-100">
              <FacebookIcon />
            </span>
          </button>
          <button
            className="grid size-9 cursor-pointer place-items-center rounded-[11px] border border-[#D2D5DB] text-xl leading-none font-bold text-black transition-colors hover:bg-[#F5F5F6] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#003BE2] lg:size-12 lg:rounded-[14px] lg:text-[25px]"
            type="button"
            aria-label="Continue with Google"
          >
            G
          </button>
        </div>

        <p className="mt-auto pt-2 text-center text-[10px] text-[#777B84] lg:pt-[clamp(20px,3.5vh,40px)] lg:text-xs">
          New user?{" "}
          <Link
            className="rounded-sm text-[#003BE2] no-underline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#003BE2]"
            href="/register"
          >
            Create an account
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
