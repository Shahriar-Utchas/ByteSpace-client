import Image from "next/image";

import { PlayIcon } from "./CourseIcons";

export default function CoursePreview() {
  return (
    <div className="relative aspect-[181/120] w-full overflow-hidden rounded-3xl bg-[#ECEDEF]">
      <Image
        className="object-cover object-center"
        src="/assets/course-detail/course-preview.png"
        alt="Course instructor wearing glasses and a purple sweater"
        fill
        priority
        sizes="(max-width: 1023px) calc(100vw - 32px), 724px"
      />
      <button
        className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-2xl bg-[#A58F8A] text-white shadow-[0_14px_35px_rgba(36,37,40,0.28)] transition-transform hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--search-lime)] max-sm:size-16"
        type="button"
        aria-label="Play course preview"
      >
        <span className="grid size-12 place-items-center rounded-full bg-white text-[#B09790] max-sm:size-10">
          <PlayIcon className="ml-1 size-7 max-sm:size-6" />
        </span>
      </button>
    </div>
  );
}
