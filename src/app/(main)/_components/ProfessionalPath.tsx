import Image from "next/image";

import { poppins } from "@/app/fonts";

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
] as const;

const BENEFITS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
] as const;

function CheckIcon() {
  return (
    <span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#003BE2] text-white lg:size-[18px] 2xl:size-[23px]">
      <svg
        className="size-2.5 lg:size-3 2xl:size-[15px]"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="m2.5 6.2 2.1 2.1 4.9-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function ProfessionalPath() {
  return (
    <section
      className="relative isolate overflow-hidden bg-white py-16 lg:py-20 2xl:py-[100px] max-sm:py-12"
      aria-labelledby="professional-path-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-[22%] -left-[18%] h-[70%] w-[68%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(203,252,1,0.4)_0%,rgba(203,252,1,0.092)_53%,rgba(203,252,1,0.024)_75%,rgba(203,252,1,0)_100%)]" />
        <div className="absolute -top-[22%] -right-[18%] h-[70%] w-[68%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,59,226,0.08)_0%,rgba(0,59,226,0.0184)_53%,rgba(0,59,226,0.0048)_75%,rgba(0,59,226,0)_100%)]" />
        <div className="absolute -bottom-[25%] -left-[18%] h-[70%] w-[68%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(203,252,1,0.6)_0%,rgba(203,252,1,0.138)_53%,rgba(203,252,1,0.036)_75%,rgba(203,252,1,0)_100%)]" />
        <div className="absolute -right-[18%] -bottom-[25%] h-[70%] w-[68%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,59,226,0.24)_0%,rgba(0,59,226,0.0552)_53%,rgba(0,59,226,0.0144)_75%,rgba(0,59,226,0)_100%)]" />
      </div>

      <div className="home-container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 2xl:gap-20">
          <div className="max-w-[470px] 2xl:max-w-[588px] max-lg:mx-auto max-lg:text-center">
            <h2
              className={`${poppins.className} text-[29px] leading-[1.18] font-semibold tracking-[-0.04em] text-[#292B30] lg:text-[40px] 2xl:text-[50px] max-sm:text-[26px]`}
              id="professional-path-heading"
            >
              Your Path to Professional
              <span className="block">Growth Starts Here!</span>
            </h2>
            <p className="mt-6 text-xs leading-[1.75] text-[#666A73] lg:text-sm 2xl:mt-[30px] 2xl:text-[17px] max-sm:mt-4">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or embark
              on a new career path entirely, we have the resources you need.
            </p>

            <dl className="mt-8 flex items-start gap-10 max-lg:justify-center lg:mt-10 lg:gap-14 2xl:mt-[50px] 2xl:gap-[70px] max-sm:gap-7">
              {STATS.map((stat) => (
                <div className="flex flex-col" key={stat.label}>
                  <dt className="text-[11px] text-[#666A73] lg:text-xs 2xl:text-[15px]">
                    {stat.label}
                  </dt>
                  <dd className="order-first mb-1 text-[22px] leading-none font-medium tracking-[-0.04em] text-[#003BE2] lg:text-[28px] 2xl:text-[35px]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <Image
            className="h-auto w-full max-w-[540px] justify-self-end object-contain 2xl:max-w-[675px] max-lg:mx-auto"
            src="/assets/professional-path/top.png"
            alt="Student learning with a laptop alongside course and progress information"
            width={2812}
            height={2788}
            sizes="(max-width: 1023px) min(100vw - 32px, 520px), (max-width: 1535px) 540px, 675px"
          />
        </div>

        <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 2xl:mt-8 2xl:gap-[100px] max-lg:mt-14">
          <Image
            className="h-auto w-full max-w-[470px] justify-self-start object-contain 2xl:max-w-[588px] max-lg:mx-auto"
            src="/assets/professional-path/bottom.png"
            alt="Course creator holding a tablet with revenue and student statistics"
            width={2345}
            height={2876}
            sizes="(max-width: 1023px) min(100vw - 32px, 460px), (max-width: 1535px) 470px, 588px"
          />

          <div className="max-w-[470px] 2xl:max-w-[588px] max-lg:mx-auto max-lg:text-center">
            <h2
              className={`${poppins.className} text-[29px] leading-[1.18] font-semibold tracking-[-0.04em] text-[#292B30] lg:text-[40px] 2xl:text-[50px] max-sm:text-[26px]`}
            >
              Create &amp; Manage
              <span className="block">Courses Easily.</span>
            </h2>
            <p className="mt-6 text-xs leading-[1.75] text-[#666A73] lg:text-sm 2xl:mt-[30px] 2xl:text-[17px] max-sm:mt-4">
              <strong className="font-medium text-[#292B30]">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <ul className="mt-8 space-y-3 max-lg:mx-auto max-lg:w-fit max-lg:text-left lg:mt-9 2xl:mt-11 2xl:space-y-[15px]">
              {BENEFITS.map((benefit) => (
                <li
                  className="flex items-center gap-2.5 text-xs font-medium text-[#30333A] lg:text-sm 2xl:gap-3 2xl:text-[17px]"
                  key={benefit}
                >
                  <CheckIcon />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
}
