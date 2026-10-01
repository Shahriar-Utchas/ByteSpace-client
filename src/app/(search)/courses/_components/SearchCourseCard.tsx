import Image from "next/image";
import Link from "next/link";

import { poppins } from "@/app/fonts";
import { HERO_ASSETS } from "@/constants";

import type { SearchCourse } from "../_data/courses";

export default function SearchCourseCard({ course }: { course: SearchCourse }) {
  return (
    <article className="min-w-0 overflow-hidden rounded-3xl border border-[var(--search-border)] bg-white transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#B3B6BB] hover:shadow-[0_18px_45px_rgba(20,28,48,0.08)] focus-within:border-[var(--search-blue)]">
      <Link
        className="flex h-full min-h-[382px] flex-col p-[15px] text-inherit no-underline focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-[var(--search-blue)]"
        href={`/courses/${course.slug}`}
        aria-label={`View ${course.title}`}
      >
        <div className="relative aspect-[341/195] shrink-0 overflow-hidden rounded-xl bg-[#ECEDEF]">
          <Image
            className="object-cover"
            src={course.image}
            alt={course.imageAlt}
            fill
            sizes="(max-width: 639px) calc(100vw - 62px), (max-width: 1023px) 43vw, (max-width: 1920px) 25vw, 477px"
          />

          <div className="absolute inset-x-3 bottom-[18px] flex items-center justify-between gap-1.5 text-[clamp(0.55rem,0.85vw,0.75rem)] leading-[1.2] font-medium text-[var(--search-meta)] max-sm:inset-x-2 max-sm:bottom-3 max-sm:gap-1 max-sm:text-[8px]">
            <span className="whitespace-nowrap rounded-full bg-[rgba(246,246,246,0.6)] px-3 py-1.5 backdrop-blur-sm max-sm:px-2.5">
              {course.lessons} Lessons
            </span>
            <span className="whitespace-nowrap rounded-full bg-[rgba(246,246,246,0.6)] px-3 py-1.5 backdrop-blur-sm max-sm:px-2.5">
              {course.duration}
            </span>
            <span className="whitespace-nowrap rounded-full bg-[rgba(246,246,246,0.6)] px-3 py-1.5 backdrop-blur-sm max-sm:px-2.5">
              {course.comments} Comments
            </span>
          </div>
        </div>

        <div className="mt-5 flex min-w-0 items-start gap-3">
          <div className="min-w-0 flex-1">
            <h2
              className={`${poppins.className} truncate text-xl leading-[1.2] font-semibold tracking-[-0.01em] text-black`}
              title={course.title}
            >
              {course.title}
            </h2>
            <p className="text-xs leading-[1.6] text-[var(--search-meta)]">
              by <span className="text-[var(--search-blue)]">purepearl studio</span>
            </p>
          </div>

          <span className="flex shrink-0 items-center text-lg leading-[1.6] text-[var(--search-meta)]">
            {course.rating.toFixed(1)}
            <Image
              src="/assets/search/star.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
            <span className="sr-only"> out of 5 stars</span>
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="inline-flex h-8 shrink-0 items-center gap-1 rounded-full bg-[var(--search-soft)] px-3 text-xs leading-[1.2] font-medium text-[var(--search-muted)]">
            <Image
              src="/assets/search/level-small.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden="true"
            />
            {course.level}
          </span>

          <span className="flex items-center" aria-label="Popular with students">
            {HERO_ASSETS.avatars.slice(0, 4).map((avatar, index) => (
              <Image
                className={`size-8 rounded-full border border-white object-cover ${index > 0 ? "-ml-2" : ""}`}
                key={avatar}
                src={avatar}
                alt=""
                width={32}
                height={32}
              />
            ))}
            <span className="-ml-2 grid size-8 place-items-center rounded-full border border-white bg-[var(--search-lime)] text-xs leading-5 font-medium text-[var(--search-text)]">
              26+
            </span>
          </span>
        </div>

        <p className="mt-4 flex items-end leading-none">
          <strong
            className={`${poppins.className} text-xl leading-6 font-semibold tracking-[-0.01em] text-[var(--search-blue)]`}
          >
            ${course.price}
          </strong>
          <span className="text-xs leading-[1.6] text-[var(--search-meta)]">
            /lifetime
          </span>
        </p>
      </Link>
    </article>
  );
}
