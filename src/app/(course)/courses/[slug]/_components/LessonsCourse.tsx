import { poppins } from "@/app/fonts";

import { COURSE_DETAIL, MODULES } from "../_data/course-detail";
import { VideoIcon } from "./CourseIcons";

const headingClass = `${poppins.className} text-xl leading-6 font-semibold text-[var(--search-text)]`;
const bodyClass = "mt-6 text-base leading-[1.6] text-[var(--search-meta)]";

export default function LessonsCourse() {
  return (
    <article className="pb-2">
      <section aria-labelledby="modules-heading">
        <h2 className={headingClass} id="modules-heading">Explore the Modules</h2>
        <p className={bodyClass}>
          Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
        </p>
      </section>

      <section className="mt-6" aria-labelledby="lesson-list-heading">
        <h2 className={headingClass} id="lesson-list-heading">Lesson List</h2>
        <div className="mt-6 space-y-7">
          {MODULES.map((module) => (
            <article className="flex items-start gap-4" key={module.title}>
              <div className="grid size-[72px] shrink-0 place-items-center rounded-3xl bg-[var(--search-lime)] text-[var(--search-text)]">
                <VideoIcon className="size-8" />
              </div>
              <div className="min-w-0 pt-0.5">
                <h3 className="text-base leading-6 font-medium text-[var(--search-text)]">{module.title}</h3>
                <p className="mt-1 text-base leading-[1.6] text-[var(--search-meta)]">{module.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8" aria-labelledby="lesson-content-heading">
        <h2 className={headingClass} id="lesson-content-heading">Lesson Content</h2>
        <p className={bodyClass}>
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>
      </section>

      <section className="mt-8" aria-labelledby="progress-heading">
        <h2 className={headingClass} id="progress-heading">Lesson Progress Tracking</h2>
        <p className={bodyClass}>
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
        </p>
        <div className="mt-6 min-h-[116px] rounded-2xl border border-[var(--search-border)] bg-white p-4">
          <p className="text-sm leading-[1.6] text-[var(--search-text)]">Learning Progress</p>
          <p className={`${poppins.className} mt-0.5 text-4xl leading-[1.2] font-semibold text-[var(--search-text)]`}>
            {COURSE_DETAIL.progress}%
          </p>
          <div
            className="mt-3 h-2 overflow-hidden rounded-full bg-[#E5E6E8]"
            role="progressbar"
            aria-label="Course completion"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={COURSE_DETAIL.progress}
          >
            <div className="h-full rounded-full bg-[var(--search-lime)]" style={{ width: `${COURSE_DETAIL.progress}%` }} />
          </div>
        </div>
      </section>
    </article>
  );
}
