"use client";

import { poppins } from "@/app/fonts";

type SearchPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function ArrowIcon({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "previous" ? "m14.5 5-7 7 7 7" : "m9.5 5 7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SearchPagination({
  currentPage,
  totalPages,
  onPageChange,
}: SearchPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: Math.min(totalPages, 5) }, (_, index) => index + 1);

  return (
    <nav className="flex items-center justify-center gap-6" aria-label="Course results pages">
      <button
        className="grid h-12 w-14 cursor-pointer place-items-center rounded-full border border-[var(--search-border)] bg-white text-[var(--search-text)] transition-colors hover:bg-[var(--search-soft)] disabled:cursor-not-allowed disabled:text-[var(--search-border)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--search-blue)]"
        type="button"
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ArrowIcon direction="previous" />
      </button>

      {pages.map((page) => (
        <button
          className={`${poppins.className} cursor-pointer text-xl leading-7 font-semibold tracking-[-0.01em] transition-colors focus-visible:rounded focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--search-blue)] ${
            currentPage === page
              ? "text-[var(--search-border)]"
              : "text-[var(--search-text)] hover:text-[var(--search-blue)]"
          }`}
          type="button"
          key={page}
          aria-label={`Page ${page}`}
          aria-current={currentPage === page ? "page" : undefined}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="grid h-12 w-14 cursor-pointer place-items-center rounded-full border border-[var(--search-border)] bg-white text-[var(--search-text)] transition-colors hover:bg-[var(--search-soft)] disabled:cursor-not-allowed disabled:text-[var(--search-border)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--search-blue)]"
        type="button"
        aria-label="Next page"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ArrowIcon direction="next" />
      </button>
    </nav>
  );
}
