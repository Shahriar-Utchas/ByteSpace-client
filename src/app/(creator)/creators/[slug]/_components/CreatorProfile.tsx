"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { poppins } from "@/app/fonts";
import SearchControls from "@/app/(search)/courses/_components/SearchControls";
import SearchCourseCard from "@/app/(search)/courses/_components/SearchCourseCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { CREATOR, CREATOR_COURSES } from "../_data/creator";

export default function CreatorProfile() {
  const [following, setFollowing] = useState(false);
  const [priceFilter, setPriceFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("relevant");

  const courses = useMemo(() => {
    const filtered = CREATOR_COURSES.filter((course) => {
      const matchesCategory = categoryFilter === "all" || course.category === categoryFilter;
      const matchesLevel = levelFilter === "all" || course.level === levelFilter;
      const matchesPrice = priceFilter === "all" || priceFilter === "paid" || (priceFilter === "25" && course.price === 25);
      return matchesCategory && matchesLevel && matchesPrice;
    });

    return [...filtered].sort((a, b) => {
      if (sortOrder === "title") return a.title.localeCompare(b.title);
      if (sortOrder === "rating") return b.rating - a.rating;
      if (sortOrder === "price-low") return a.price - b.price;
      return 0;
    });
  }, [categoryFilter, levelFilter, priceFilter, sortOrder]);

  return (
    <>
      <section
        className="overflow-hidden bg-[var(--search-blue)] text-white"
        style={{
          backgroundImage:
            "linear-gradient(var(--search-grid) 1px, transparent 1px), linear-gradient(90deg, var(--search-grid) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
        aria-labelledby="creator-name"
      >
        <Navbar variant="search" />

        <div className="course-container min-h-[472px] pt-[52px] pb-20 max-md:pt-10 max-md:pb-14">
          <div className="flex items-center gap-6 max-sm:items-start">
            <Image
              className="size-24 shrink-0 rounded-3xl object-cover max-sm:size-20 max-sm:rounded-2xl"
              src={CREATOR.avatar}
              alt={`${CREATOR.name} creator portrait`}
              width={96}
              height={96}
              priority
            />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h1
                  className={`${poppins.className} text-4xl leading-[1.2] font-semibold tracking-[-0.01em] text-[#F5F5F6] max-md:text-[32px] max-sm:text-[28px]`}
                  id="creator-name"
                >
                  {CREATOR.name}
                </h1>
                <span className="inline-flex h-9 items-center rounded-full bg-[var(--search-lime)] px-6 text-base font-medium text-[#142800]">
                  Creator
                </span>
              </div>
              <p className="mt-2 text-lg leading-[1.6] text-[#CED0D3]">{CREATOR.role}</p>
            </div>
          </div>

          <div className="mt-10 text-lg leading-[1.6] text-[#CED0D3]">
            {CREATOR.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <div className="mt-10 flex items-center justify-between gap-6 max-sm:flex-wrap">
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-lg leading-[1.6] text-[var(--search-text)]">
                <strong className="font-medium text-[var(--search-blue)]">{CREATOR.productCount}</strong>
                Products
              </span>
              <span className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-lg leading-[1.6] text-[var(--search-text)]" aria-live="polite">
                <strong className="font-medium text-[var(--search-blue)]">{CREATOR.followerCount + (following ? 1 : 0)}</strong>
                Followers
              </span>
            </div>
            <button
              className="h-12 cursor-pointer rounded-full bg-[var(--search-lime)] px-7 text-lg font-medium text-[#142800] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(48,70,0,0.2)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white"
              type="button"
              aria-pressed={following}
              onClick={() => setFollowing((current) => !current)}
            >
              {following ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </section>

      <main className="bg-white pt-16 pb-16 max-md:pt-12 max-md:pb-14" id="creator-courses">
        <div className="course-container">
          <SearchControls
            activeCategory="Featured"
            categoryFilter={categoryFilter}
            levelFilter={levelFilter}
            priceFilter={priceFilter}
            sortOrder={sortOrder}
            onCategoryTabChange={() => undefined}
            onCategoryFilterChange={setCategoryFilter}
            onLevelFilterChange={setLevelFilter}
            onPriceFilterChange={setPriceFilter}
            onSortOrderChange={setSortOrder}
            showCategoryTabs={false}
          />

          <section className="mt-10" aria-label={`${CREATOR.name} courses`}>
            <p className="sr-only" aria-live="polite">{courses.length} courses shown</p>
            {courses.length > 0 ? (
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
                {courses.map((course) => <SearchCourseCard course={course} key={course.id} />)}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-[var(--search-border)] bg-[var(--search-soft)] px-6 py-16 text-center">
                <h2 className={`${poppins.className} text-xl font-semibold text-[var(--search-text)]`}>No courses match these filters</h2>
                <button
                  className="mt-5 h-11 cursor-pointer rounded-full bg-[var(--search-lime)] px-6 font-medium text-[var(--search-text)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--search-blue)]"
                  type="button"
                  onClick={() => {
                    setCategoryFilter("all");
                    setLevelFilter("all");
                    setPriceFilter("all");
                    setSortOrder("relevant");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer variant="search" />
    </>
  );
}
