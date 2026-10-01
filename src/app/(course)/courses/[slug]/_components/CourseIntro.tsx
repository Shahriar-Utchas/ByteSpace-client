import Link from "next/link";

import { poppins } from "@/app/fonts";

import { COURSE_DETAIL } from "../_data/course-detail";
import { LevelIcon, ShareIcon, StarIcon, StudentsIcon } from "./CourseIcons";

const BADGES = [
  { label: COURSE_DETAIL.level, icon: LevelIcon },
  { label: `${COURSE_DETAIL.rating} (${COURSE_DETAIL.reviews} reviews)`, icon: StarIcon },
  { label: `${COURSE_DETAIL.students} Students`, icon: StudentsIcon },
] as const;

export default function CourseIntro() {
  return (
    <section className="course-detail-container pt-12 text-white md:pt-16" aria-labelledby="course-title">
      <div className="flex items-start justify-between gap-6 max-md:flex-col">
        <div className="min-w-0">
          <h1
            className={`${poppins.className} max-w-[900px] text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] font-semibold tracking-[-0.025em]`}
            id="course-title"
          >
            {COURSE_DETAIL.title}
          </h1>
          <p className={`${poppins.className} mt-1 text-base leading-6 font-semibold md:text-xl md:leading-7`}>
            {COURSE_DETAIL.subtitle}
          </p>
          <p className="mt-7 text-base leading-[1.6]">
            by <span className="font-medium text-[var(--search-lime)]">{COURSE_DETAIL.creator}</span>
          </p>
        </div>

        <button
          className="inline-flex h-11 shrink-0 cursor-pointer items-center gap-2 rounded-full bg-[var(--search-lime)] px-6 text-base font-medium text-[#142800] transition-transform hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white md:mt-2"
          type="button"
          aria-label="Share this course"
        >
          <ShareIcon className="size-5" />
          Share
        </button>
      </div>

      <div className="mt-5 flex flex-wrap gap-4">
        {BADGES.map(({ label, icon: Icon }) => (
          <span
            className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-[var(--search-text)]"
            key={label}
          >
            <Icon className="size-5 text-[var(--search-blue)]" />
            {label}
          </span>
        ))}
      </div>

      <Link className="sr-only" href="#course-content">
        Skip to course content
      </Link>
    </section>
  );
}
