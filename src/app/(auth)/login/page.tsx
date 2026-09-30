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
      <div className="flex h-[77svh] min-h-[700px] w-full max-w-[580px] flex-col rounded-[28px] bg-white p-8 text-[#202329] sm:p-12 xl:max-h-[834px] xl:p-14 2xl:max-w-[620px] 2xl:rounded-[32px] 2xl:p-16">
        <p className="text-sm font-medium text-[#003BE2] 2xl:text-base">Sign In</p>
        <h1
          className={`${poppins.className} mt-2 text-[34px] leading-none font-semibold tracking-[-0.045em] 2xl:text-[40px]`}
        >
          Welcome Back
        </h1>

        <form className="mt-12 space-y-6" action="/login" method="post">
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
              className="h-11 cursor-pointer rounded-full bg-[#D4FB20] px-7 text-sm font-medium text-[#142800] transition-shadow hover:shadow-[0_9px_24px_rgba(45,67,0,0.2)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#003BE2]"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-20 flex items-center gap-4 text-xs text-[#92969F]">
          <span className="h-px flex-1 bg-[#C8CBD1]" />
          <span>or</span>
          <span className="h-px flex-1 bg-[#C8CBD1]" />
        </div>

        <div className="mt-7 flex justify-center gap-4">
          <button
            className="grid size-12 cursor-pointer place-items-center rounded-[14px] border border-[#D2D5DB] text-black transition-colors hover:bg-[#F5F5F6] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#003BE2]"
            type="button"
            aria-label="Continue with Facebook"
          >
            <FacebookIcon />
          </button>
          <button
            className="grid size-12 cursor-pointer place-items-center rounded-[14px] border border-[#D2D5DB] text-[25px] leading-none font-bold text-black transition-colors hover:bg-[#F5F5F6] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#003BE2]"
            type="button"
            aria-label="Continue with Google"
          >
            G
          </button>
        </div>

        <p className="mt-auto pt-10 text-center text-xs text-[#777B84]">
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
