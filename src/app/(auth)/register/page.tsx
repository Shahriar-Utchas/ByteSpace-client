import type { Metadata } from "next";
import Link from "next/link";

import { poppins } from "@/app/fonts";
import AuthField from "../_components/AuthField";
import AuthShell from "../_components/AuthShell";

export const metadata: Metadata = {
  title: "Create an Account | ByteSpace",
  description: "Create your ByteSpace account.",
};

export default function RegisterPage() {
  return (
    <AuthShell
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
      variant="register"
    >
      <div className="flex h-full min-h-0 w-full max-w-[760px] flex-col overflow-hidden rounded-[22px] bg-white p-4 text-[#202329] sm:p-5 lg:h-[calc(100svh-6rem)] lg:max-h-[1030px] lg:rounded-[28px] lg:p-[clamp(20px,5vh,64px)] 2xl:rounded-[32px] 2xl:px-20 2xl:py-[clamp(48px,6vh,80px)]">
        <p className="text-xs font-medium text-[#003BE2] lg:text-[clamp(13px,1.8vh,18px)] 2xl:text-[clamp(18px,1.8vh,24px)]">
          Create an Account
        </p>
        <h1
          className={`${poppins.className} mt-1 max-w-[540px] text-2xl leading-[1.2] font-semibold tracking-[-0.045em] lg:mt-[clamp(6px,1.2vh,12px)] lg:text-[clamp(28px,4.5vh,48px)] 2xl:text-[clamp(42px,4.2vh,56px)]`}
        >
          Welcome to
          <span className="block">ByteSpace</span>
        </h1>

        <form
          className="mt-2 space-y-2 lg:mt-[clamp(12px,3vh,32px)] lg:space-y-[clamp(8px,1.7vh,20px)] 2xl:mt-[clamp(32px,4vh,56px)] 2xl:space-y-[clamp(18px,2.2vh,32px)]"
          action="/register"
          method="post"
        >
          <AuthField
            id="register-name"
            label="Full Name"
            name="name"
            type="text"
            placeholder="Jamie Davis"
            autoComplete="name"
            large
            required
          />
          <AuthField
            id="register-email"
            label="Email"
            name="email"
            type="email"
            placeholder="designer@example.com"
            autoComplete="email"
            large
            required
          />
          <AuthField
            id="register-password"
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            autoComplete="new-password"
            large
            minLength={8}
            required
          />

          <div className="flex justify-end pt-1">
            <button
              className="h-10 cursor-pointer rounded-full bg-[#D4FB20] px-8 text-[clamp(13px,1.5vh,16px)] font-medium text-[#142800] transition-shadow hover:shadow-[0_10px_26px_rgba(45,67,0,0.2)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#003BE2] lg:h-[clamp(36px,4.5vh,48px)] 2xl:h-[clamp(48px,4.5vh,60px)] 2xl:px-9 2xl:text-[clamp(16px,1.65vh,22px)]"
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>

        <p className="mt-auto pt-[clamp(8px,2vh,24px)] text-center text-[clamp(11px,1.3vh,14px)] text-[#777B84] 2xl:pt-[clamp(24px,3.5vh,48px)] 2xl:text-[clamp(16px,1.5vh,20px)]">
          Already have an account?{" "}
          <Link
            className="rounded-sm text-[#003BE2] no-underline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#003BE2]"
            href="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
