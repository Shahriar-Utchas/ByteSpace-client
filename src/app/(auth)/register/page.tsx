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
      <div className="flex h-[77svh] min-h-[760px] w-full max-w-[760px] flex-col rounded-[28px] bg-white p-8 text-[#202329] sm:p-12 xl:max-h-[1030px] xl:p-16 2xl:rounded-[32px] 2xl:px-20 2xl:py-20">
        <p className="text-base font-medium text-[#003BE2] xl:text-lg 2xl:text-[24px]">
          Create an Account
        </p>
        <h1
          className={`${poppins.className} mt-3 max-w-[540px] text-[40px] leading-[1.2] font-semibold tracking-[-0.045em] xl:text-[48px] 2xl:text-[56px]`}
        >
          Welcome to
          <span className="block">ByteSpace</span>
        </h1>

        <form className="mt-8 space-y-5 2xl:mt-14 2xl:space-y-8" action="/register" method="post">
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
              className="h-12 cursor-pointer rounded-full bg-[#D4FB20] px-8 text-base font-medium text-[#142800] transition-shadow hover:shadow-[0_10px_26px_rgba(45,67,0,0.2)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#003BE2] 2xl:h-[60px] 2xl:px-9 2xl:text-[22px]"
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>

        <p className="mt-auto pt-12 text-center text-sm text-[#777B84] 2xl:text-[20px]">
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
