"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { poppins } from "@/app/fonts";

import { RATING_BREAKDOWN, REVIEWS } from "../_data/course-detail";
import { StarIcon } from "./CourseIcons";

const FILTERS = ["All rating", "5", "4", "3", "2", "1"] as const;

export default function ReviewsCourse() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All rating");
  const visibleReviews = useMemo(
    () => filter === "All rating" ? REVIEWS : REVIEWS.filter((review) => review.rating === Number(filter)),
    [filter],
  );

  return (
    <article className="pb-2">
      <section aria-labelledby="reviews-heading">
        <h2 className={`${poppins.className} text-xl leading-6 font-semibold text-[var(--search-text)]`} id="reviews-heading">
          What Learners Are Saying
        </h2>
        <p className="mt-6 text-base leading-[1.6] text-[var(--search-meta)]">
          Discover what our learners have to say about their experience with &quot;Build Digital Assets: A Comprehensive Guide.&quot; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
        </p>

        <div className="mt-6 flex min-h-[228px] items-center gap-6 rounded-2xl border border-[var(--search-border)] bg-white p-8 max-sm:flex-col max-sm:items-stretch max-sm:p-5">
          <div className="flex h-[140px] w-[130px] shrink-0 flex-col items-center justify-center rounded-lg bg-[var(--search-lime)] text-center max-sm:w-full">
            <span className="text-sm text-[var(--search-text)]">Ratings</span>
            <strong className={`${poppins.className} mt-1 text-4xl leading-none font-semibold text-[var(--search-text)]`}>4.7</strong>
          </div>

          <div className="min-w-0 flex-1 space-y-3">
            {RATING_BREAKDOWN.map((row) => (
              <div className="grid grid-cols-[minmax(80px,1fr)_auto_36px] items-center gap-4 max-sm:grid-cols-[minmax(60px,1fr)_auto_30px] max-sm:gap-2" key={row.stars}>
                <div className="h-2 overflow-hidden rounded-full bg-[#E5E6E8]">
                  <div className="h-full rounded-full bg-[var(--search-lime)]" style={{ width: row.width }} />
                </div>
                <span className="flex gap-1 text-[#4B4C53]" aria-label={`${row.stars} stars`}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <StarIcon className={`size-4 ${index < row.stars ? "text-[#4B4C53]" : "text-[#CED0D3]"}`} key={index} />
                  ))}
                </span>
                <span className="text-right text-sm text-[var(--search-meta)]">{row.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-7" aria-labelledby="individual-reviews-heading">
        <h2 className={`${poppins.className} text-xl leading-6 font-semibold text-[var(--search-text)]`} id="individual-reviews-heading">
          Individual Reviews:
        </h2>
        <div className="mt-5 flex flex-wrap gap-3" role="group" aria-label="Filter reviews by rating">
          {FILTERS.map((option) => {
            const active = option === filter;
            return (
              <button
                className={`inline-flex h-10 cursor-pointer items-center gap-1.5 rounded-full px-5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--search-blue)] ${
                  active ? "bg-[var(--search-lime)] text-[#142800]" : "bg-[var(--search-soft)] text-[var(--search-meta)] hover:text-[var(--search-blue)]"
                }`}
                type="button"
                key={option}
                aria-pressed={active}
                onClick={() => setFilter(option)}
              >
                {option === "All rating" ? null : <StarIcon className="size-4" />}
                {option}
              </button>
            );
          })}
        </div>

        <div className="mt-6 space-y-6" aria-live="polite">
          {visibleReviews.map((review) => (
            <article className="min-h-[218px] rounded-3xl border border-[var(--search-border)] bg-white p-8 max-sm:p-5" key={review.id}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Image className="size-12 rounded-full object-cover" src={review.avatar} alt="" width={48} height={48} />
                  <div>
                    <h3 className="text-base font-medium text-[var(--search-text)]">{review.name}</h3>
                    <p className="text-sm text-[var(--search-meta)]">{review.role}</p>
                  </div>
                </div>
                <time className="shrink-0 text-sm text-[var(--search-meta)]">{review.age}</time>
              </div>
              <div className="mt-5 flex gap-1 text-[#4B4C53]" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }, (_, index) => <StarIcon className="size-5" key={index} />)}
              </div>
              <p className="mt-6 text-base leading-[1.6] text-[var(--search-meta)]">&quot;{review.quote}&quot;</p>
            </article>
          ))}
          {visibleReviews.length === 0 ? (
            <p className="rounded-2xl border border-[var(--search-border)] p-8 text-base text-[var(--search-meta)]">
              No {filter}-star reviews are available yet.
            </p>
          ) : null}
        </div>
      </section>
    </article>
  );
}
