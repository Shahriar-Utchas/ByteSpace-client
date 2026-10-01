"use client";

import { useMemo, useState } from "react";

import SearchControls from "./SearchControls";
import SearchCourseCard from "./SearchCourseCard";
import SearchHero from "./SearchHero";
import SearchPagination from "./SearchPagination";
import {
  SEARCH_COURSES,
  type SearchCategory,
} from "../_data/courses";

const PAGE_SIZE = 18;

export default function CourseSearchPage({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<SearchCategory>("Featured");
  const [priceFilter, setPriceFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("relevant");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const courses = SEARCH_COURSES.filter((course) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        course.title.toLowerCase().includes(normalizedQuery) ||
        course.category.toLowerCase().includes(normalizedQuery);
      const matchesTab =
        activeCategory === "Featured" || course.category === activeCategory;
      const matchesCategory =
        categoryFilter === "all" || course.category === categoryFilter;
      const matchesLevel =
        levelFilter === "all" || course.level === levelFilter;
      const matchesPrice =
        priceFilter === "all" ||
        priceFilter === "paid" ||
        (priceFilter === "25" && course.price === 25);

      return matchesQuery && matchesTab && matchesCategory && matchesLevel && matchesPrice;
    });

    return [...courses].sort((a, b) => {
      switch (sortOrder) {
        case "title":
          return a.title.localeCompare(b.title);
        case "rating":
          return b.rating - a.rating;
        case "price-low":
          return a.price - b.price;
        default:
          return 0;
      }
    });
  }, [activeCategory, categoryFilter, levelFilter, priceFilter, query, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / PAGE_SIZE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const visibleCourses = filteredCourses.slice(
    (safeCurrentPage - 1) * PAGE_SIZE,
    safeCurrentPage * PAGE_SIZE,
  );

  function resetPage() {
    setCurrentPage(1);
  }

  function handleSearch(nextQuery: string) {
    setQuery(nextQuery);
    resetPage();
    const params = new URLSearchParams(window.location.search);
    if (nextQuery) params.set("query", nextQuery);
    else params.delete("query");
    const search = params.toString();
    window.history.pushState(null, "", search ? `/courses?${search}` : "/courses");
  }

  function handlePageChange(page: number) {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    document.getElementById("course-results")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <SearchHero key={query} initialQuery={query} onSearch={handleSearch} />

      <main className="bg-white pt-[72px] pb-[72px] max-md:pt-12 max-md:pb-14 max-sm:pt-9">
        <div className="course-container">
          <SearchControls
            activeCategory={activeCategory}
            categoryFilter={categoryFilter}
            levelFilter={levelFilter}
            priceFilter={priceFilter}
            sortOrder={sortOrder}
            onCategoryTabChange={(category) => {
              setActiveCategory(category);
              setCategoryFilter("all");
              resetPage();
            }}
            onCategoryFilterChange={(category) => {
              setCategoryFilter(category);
              setActiveCategory("Featured");
              resetPage();
            }}
            onLevelFilterChange={(level) => {
              setLevelFilter(level);
              resetPage();
            }}
            onPriceFilterChange={(price) => {
              setPriceFilter(price);
              resetPage();
            }}
            onSortOrderChange={(sort) => {
              setSortOrder(sort);
              resetPage();
            }}
          />

          <section className="mt-[77px] max-md:mt-12" id="course-results" aria-label="Course results">
            <p className="sr-only" aria-live="polite">
              {filteredCourses.length} courses found
            </p>

            {visibleCourses.length > 0 ? (
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {visibleCourses.map((course) => (
                  <SearchCourseCard course={course} key={course.id} />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-[var(--search-border)] bg-[var(--search-soft)] px-6 py-20 text-center">
                <h2 className="text-xl font-bold text-[var(--search-text)]">No courses found</h2>
                <p className="mt-2 text-sm text-[var(--search-muted)]">
                  Try another search term or clear the selected filters.
                </p>
                <button
                  className="mt-6 h-11 cursor-pointer rounded-full bg-[var(--search-lime)] px-6 font-medium text-[var(--search-text)] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--search-blue)]"
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setActiveCategory("Featured");
                    setCategoryFilter("all");
                    setLevelFilter("all");
                    setPriceFilter("all");
                    resetPage();
                    window.history.pushState(null, "", "/courses");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </section>

          <div className="mt-[72px]">
            <SearchPagination
              currentPage={safeCurrentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </main>
    </>
  );
}
