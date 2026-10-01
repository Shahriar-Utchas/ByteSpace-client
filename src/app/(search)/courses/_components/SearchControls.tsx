"use client";

import Image from "next/image";
import type { ReactNode } from "react";

import {
  SEARCH_CATEGORIES,
  type SearchCategory,
} from "../_data/courses";

type SelectControlProps = {
  icon: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
  className?: string;
};

function SelectControl({
  icon,
  label,
  value,
  onChange,
  children,
  className = "",
}: SelectControlProps) {
  return (
    <label
      className={`relative inline-flex h-12 items-center rounded-full border border-[var(--search-border)] bg-white text-[var(--search-muted)] transition-colors focus-within:border-[var(--search-blue)] focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-[var(--search-blue)]/15 hover:border-[#AEB1B6] ${className}`}
    >
      <span className="sr-only">{label}</span>
      <Image
        className="pointer-events-none absolute left-4"
        src={icon}
        alt=""
        width={24}
        height={24}
        aria-hidden="true"
      />
      <select
        className="h-full w-full cursor-pointer appearance-none rounded-full bg-transparent py-3 pr-4 pl-11 text-base leading-[1.2] font-medium outline-none"
        aria-label={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {children}
      </select>
    </label>
  );
}

type SearchControlsProps = {
  activeCategory: SearchCategory;
  categoryFilter: string;
  levelFilter: string;
  priceFilter: string;
  sortOrder: string;
  onCategoryTabChange: (category: SearchCategory) => void;
  onCategoryFilterChange: (category: string) => void;
  onLevelFilterChange: (level: string) => void;
  onPriceFilterChange: (price: string) => void;
  onSortOrderChange: (sort: string) => void;
  showCategoryTabs?: boolean;
};

export default function SearchControls({
  activeCategory,
  categoryFilter,
  levelFilter,
  priceFilter,
  sortOrder,
  onCategoryTabChange,
  onCategoryFilterChange,
  onLevelFilterChange,
  onPriceFilterChange,
  onSortOrderChange,
  showCategoryTabs = true,
}: SearchControlsProps) {
  return (
    <>
      <div className="flex items-start justify-between gap-6 max-md:flex-col">
        <div className="flex flex-wrap gap-4">
          <SelectControl
            className="w-24"
            icon="/assets/search/filter.svg"
            label="Filter courses"
            value={priceFilter}
            onChange={onPriceFilterChange}
          >
            <option value="all">Filter</option>
            <option value="paid">Paid courses</option>
            <option value="25">$25 courses</option>
          </SelectControl>

          <SelectControl
            className="w-[97px]"
            icon="/assets/search/level.svg"
            label="Course level"
            value={levelFilter}
            onChange={onLevelFilterChange}
          >
            <option value="all">Level</option>
            <option value="Beginner">Beginner</option>
          </SelectControl>

          <SelectControl
            className="w-[127px]"
            icon="/assets/search/category.svg"
            label="Course category"
            value={categoryFilter}
            onChange={onCategoryFilterChange}
          >
            <option value="all">Category</option>
            {SEARCH_CATEGORIES.slice(1).map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </SelectControl>
        </div>

        <SelectControl
          className="w-[166px] max-md:self-end max-sm:self-start"
          icon="/assets/search/sort.svg"
          label="Sort courses"
          value={sortOrder}
          onChange={onSortOrderChange}
        >
          <option value="relevant">Most relevant</option>
          <option value="title">Course title</option>
          <option value="rating">Highest rated</option>
          <option value="price-low">Lowest price</option>
        </SelectControl>
      </div>

      {showCategoryTabs ? <div className="mt-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max items-center justify-start gap-4">
          {SEARCH_CATEGORIES.map((category) => {
            const selected = category === activeCategory;

            return (
              <button
                className={`h-[43px] cursor-pointer whitespace-nowrap rounded-full px-4 py-3 text-base leading-[1.2] font-medium transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--search-blue)] ${
                  selected
                    ? "bg-[var(--search-lime)] text-[var(--search-text)]"
                    : "bg-[var(--search-soft)] text-[var(--search-muted)] hover:bg-[#E8E9EB]"
                }`}
                type="button"
                key={category}
                aria-pressed={selected}
                onClick={() => onCategoryTabChange(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div> : null}
    </>
  );
}
