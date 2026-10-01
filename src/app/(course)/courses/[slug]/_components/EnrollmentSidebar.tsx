import Image from "next/image";
import Link from "next/link";

import { poppins } from "@/app/fonts";

import { COURSE_DETAIL, COURSE_FEATURES, SIDEBAR_LESSONS } from "../_data/course-detail";
import { FeatureIcon } from "./CourseIcons";

export default function EnrollmentSidebar() {
  return (
    <aside
      className="w-full rounded-3xl border border-[var(--search-border)] bg-white px-10 py-10 text-[var(--search-text)] shadow-[0_10px_30px_rgba(20,28,48,0.03)] lg:min-h-[960px] max-sm:px-5 max-sm:py-7"
      aria-label="Course enrollment information"
    >
      <h2 className={`${poppins.className} text-xl leading-6 font-semibold`}>112 Lessons (24 hours)</h2>

      <ol className="mt-7 space-y-4">
        {SIDEBAR_LESSONS.map((lesson) => (
          <li className="grid grid-cols-[24px_minmax(0,1fr)_auto] items-start gap-2 text-sm leading-[1.25]" key={lesson.number}>
            <span>{lesson.number}</span>
            <span>{lesson.title}</span>
            <span className="pl-3 text-[var(--search-blue)]">{lesson.duration}</span>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm text-[var(--search-meta)]">99 more videos</p>

      <p className="mt-8 max-w-[300px] text-sm leading-[1.6] text-[var(--search-meta)]">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <p className="mt-5 flex items-end leading-none">
        <strong className={`${poppins.className} text-4xl leading-none font-semibold text-[var(--search-blue)]`}>
          ${COURSE_DETAIL.price}
        </strong>
        <span className="pb-1 text-sm text-[var(--search-meta)]">/lifetime</span>
      </p>

      <button
        className="mt-7 h-12 w-full cursor-pointer rounded-full bg-[var(--search-lime)] text-base font-medium text-[#142800] transition-shadow hover:shadow-[0_8px_20px_rgba(48,70,0,0.18)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--search-blue)]"
        type="button"
      >
        Enroll Now
      </button>

      <h3 className={`${poppins.className} mt-7 text-xl leading-6 font-semibold`}>This course include</h3>
      <ul className="mt-6 space-y-4 text-sm leading-[1.5] text-[var(--search-meta)]">
        {COURSE_FEATURES.map((feature, index) => (
          <li className="flex items-center gap-3" key={feature}>
            <FeatureIcon className="size-5 shrink-0 text-[var(--search-blue)]" index={index} />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-7 border-t border-[var(--search-border)] pt-7">
        <div className="flex items-center gap-4">
          <Image
            className="size-12 rounded-full object-cover"
            src="/assets/creator/purepearl-studio.png"
            alt="PurePearl Studio creator"
            width={48}
            height={48}
          />
          <div>
            <h3 className="text-base font-medium">PurePearl Studio</h3>
            <p className="text-sm text-[var(--search-meta)]">Professional Creator</p>
          </div>
        </div>
        <p className="mt-7 text-sm leading-[1.6] text-[var(--search-meta)]">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>
        <Link
          className="mt-6 inline-flex h-10 items-center rounded-full border border-[var(--search-border)] px-5 text-sm font-medium text-[var(--search-text)] no-underline transition-colors hover:border-[var(--search-blue)] hover:text-[var(--search-blue)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--search-blue)]"
          href="/creators/purepearl-studio"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}
