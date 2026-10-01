"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

import { poppins } from "@/app/fonts";
import { Navbar } from "@/components/layout";

type SearchHeroProps = {
  initialQuery: string;
  onSearch: (query: string) => void;
};

export default function SearchHero({ initialQuery, onSearch }: SearchHeroProps) {
  const [query, setQuery] = useState(initialQuery);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(query.trim());
  }

  return (
    <header className="relative isolate h-[360px] overflow-visible bg-[var(--search-blue)] text-[var(--search-surface)] [background-image:linear-gradient(var(--search-grid)_2px,transparent_2px),linear-gradient(90deg,var(--search-grid)_2px,transparent_2px)] [background-position:top_left] [background-size:120px_120px] max-md:h-auto max-md:min-h-[340px] max-md:[background-size:80px_80px]">
      <Navbar variant="search" />

      <div className="course-container flex flex-col items-center pt-11 max-md:pt-9 max-sm:pt-7">
        <h1
          className={`${poppins.className} text-center text-[clamp(1.85rem,3vw,2.25rem)] leading-[1.2] font-semibold tracking-[-0.01em] [text-wrap:balance] max-sm:max-w-[280px] max-sm:text-[26px]`}
        >
          Find Your Next Course
        </h1>

        <form
          className="mt-8 flex w-full max-w-[624px] items-start gap-4 max-sm:flex-col max-sm:items-stretch"
          role="search"
          onSubmit={handleSubmit}
        >
          <label className="flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-6 text-[var(--search-placeholder)] shadow-sm focus-within:outline-3 focus-within:outline-offset-3 focus-within:outline-[var(--search-lime)] max-sm:w-full max-sm:px-5">
            <span className="sr-only">Search courses</span>
            <Image
              src="/assets/search/search.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
            <input
              className="min-w-0 flex-1 bg-transparent text-lg leading-[1.6] text-[var(--search-text)] outline-none placeholder:text-[var(--search-placeholder)]"
              name="query"
              type="search"
              value={query}
              placeholder="Search"
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <label className="relative flex h-12 shrink-0 items-center rounded-full bg-[var(--search-lime)] text-[var(--search-text)] focus-within:outline-3 focus-within:outline-offset-3 focus-within:outline-white max-sm:self-start">
            <span className="sr-only">Search type</span>
            <select
              className="h-full cursor-pointer appearance-none rounded-full bg-transparent py-3 pr-14 pl-6 text-lg leading-[1.2] font-medium outline-none"
              defaultValue="courses"
            >
              <option value="courses">Courses</option>
            </select>
            <Image
              className="pointer-events-none absolute right-6"
              src="/assets/search/chevron-down.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
          </label>
        </form>
      </div>
    </header>
  );
}
