"use client";

import Image from "next/image";
import { useState } from "react";

import { poppins } from "@/app/fonts";
import { HERO_ASSETS } from "@/constants";

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
] as const;

type Category = (typeof CATEGORIES)[number];
type CourseCategory = Exclude<Category, "Featured">;

type Course = {
  readonly id: number;
  readonly title: string;
  readonly category: CourseCategory;
  readonly image: string;
  readonly imageAlt: string;
  readonly lessons: number;
  readonly duration: string;
  readonly comments: number;
  readonly rating: number;
  readonly level: string;
  readonly price: number;
};

const COURSES = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    image: "/assets/discover-passion/1.jpg",
    imageAlt: "Designer creating interface wireframes at a desk",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
  {
    id: 2,
    title: "Build Digital Assets",
    category: "Digital Illustration",
    image: "/assets/discover-passion/6.jpg",
    imageAlt: "Collection of digital interface icons",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
  {
    id: 3,
    title: "The Power of Big Data",
    category: "Data Science",
    image: "/assets/discover-passion/5.jpg",
    imageAlt: "Analytics dashboard displayed on a laptop",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
  {
    id: 4,
    title: "Balancing Productivity and Creativity",
    category: "Productivity",
    image: "/assets/discover-passion/4.jpg",
    imageAlt: "Organized creative workspace with a desktop computer",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
  {
    id: 5,
    title: "Mastering Money Management",
    category: "Marketing",
    image: "/assets/discover-passion/3.jpg",
    imageAlt: "Financial performance chart on a computer screen",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    category: "Freelance & Entrepreneurship",
    image: "/assets/discover-passion/2.jpg",
    imageAlt: "Team developing ideas during a workshop",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
] as const satisfies readonly Course[];

function LevelIcon() {
  return (
    <svg
      className="size-3"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 12V9M7 12V6M11 12V3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="min-w-0 rounded-[14px] border border-[#DADCE1] bg-white p-2.5 transition-shadow duration-200 hover:shadow-[0_18px_45px_rgba(16,30,67,0.10)] lg:rounded-[20px] lg:p-3.5 2xl:rounded-[25px] 2xl:p-[18px]">
      <div className="relative aspect-[1.72/1] overflow-hidden rounded-[9px] bg-[#ECEDEF] lg:rounded-[13px] 2xl:rounded-2xl">
        <Image
          className="object-cover"
          src={course.image}
          alt={course.imageAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 52px), (max-width: 1023px) 28vw, (max-width: 1535px) 30vw, 480px"
        />

        <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-1 text-[7px] leading-none text-[#696D75] lg:inset-x-3 lg:bottom-3 lg:text-[9px] 2xl:inset-x-4 2xl:bottom-4 2xl:text-[11px]">
          <span className="whitespace-nowrap rounded-full bg-white/85 px-2 py-1.5 backdrop-blur-sm">
            {course.lessons} Lessons
          </span>
          <span className="whitespace-nowrap rounded-full bg-white/85 px-2 py-1.5 backdrop-blur-sm">
            {course.duration}
          </span>
          <span className="whitespace-nowrap rounded-full bg-white/85 px-2 py-1.5 backdrop-blur-sm">
            {course.comments} Comments
          </span>
        </div>
      </div>

      <div className="px-0.5 pt-3 pb-0.5 lg:px-0 lg:pt-4 2xl:pt-5">
        <div className="flex min-w-0 items-center gap-2">
          <h3 className="min-w-0 flex-1 truncate text-[13px] leading-tight font-bold tracking-[-0.025em] text-[#11131A] lg:text-lg 2xl:text-[22px]">
            {course.title}
          </h3>
          <p className="flex shrink-0 items-center gap-1 text-[11px] leading-none text-[#6F737B] lg:text-sm 2xl:text-[17px]">
            {course.rating.toFixed(1)}
            <span className="text-[#C9CCD1]" aria-hidden="true">
              ★
            </span>
            <span className="sr-only">out of 5 stars</span>
          </p>
        </div>

        <p className="mt-1 text-[7px] leading-none text-[#8B8F98] lg:text-[10px] 2xl:text-xs">
          by <span className="font-medium text-[#003BE2]">purespark studio</span>
        </p>

        <div className="mt-3 flex items-center justify-between gap-2 lg:mt-4 2xl:mt-5">
          <span className="inline-flex h-6 items-center gap-1 rounded-full bg-[#F5F5F6] px-2.5 text-[8px] font-medium text-[#555962] lg:h-8 lg:px-3 lg:text-[10px] 2xl:h-10 2xl:px-4 2xl:text-xs">
            <LevelIcon />
            {course.level}
          </span>

          <div className="flex items-center" aria-label="Popular with students">
            <div className="flex">
              {HERO_ASSETS.avatars.slice(0, 4).map((avatar, index) => (
                <Image
                  className="-ml-1.5 size-6 rounded-full border-2 border-white object-cover first:ml-0 lg:-ml-2 lg:size-8 2xl:-ml-2.5 2xl:size-10"
                  key={avatar}
                  src={avatar}
                  alt={`Student ${index + 1}`}
                  width={32}
                  height={32}
                />
              ))}
            </div>
            <span className="-ml-1 grid size-7 place-items-center rounded-full border-2 border-white bg-[#D4FB20] text-[7px] font-bold text-[#173000] lg:size-9 lg:text-[9px] 2xl:size-11 2xl:text-[11px]">
              26+
            </span>
          </div>
        </div>

        <p className="mt-3 flex items-end leading-none lg:mt-4 2xl:mt-5">
          <strong className="text-[15px] font-bold tracking-[-0.03em] text-[#003BE2] lg:text-xl 2xl:text-[25px]">
            ${course.price}
          </strong>
          <span className="mb-px ml-0.5 text-[7px] text-[#777B84] lg:text-[9px] 2xl:text-[11px]">
            /lifetime
          </span>
        </p>
      </div>
    </article>
  );
}

export default function DiscoverPassion() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Featured");
  const filteredCourses =
    activeCategory === "Featured"
      ? COURSES
      : COURSES.filter((course) => course.category === activeCategory);

  return (
    <section
      className="bg-white py-12 lg:py-[74px] 2xl:py-[92px] max-sm:py-10"
      aria-labelledby="discover-passion-heading"
    >
      <div className="home-container">
        <header className="text-center">
          <h2
            className={`${poppins.className} mx-auto max-w-[580px] text-[28px] leading-[1.12] font-semibold tracking-[-0.04em] text-[#090B14] lg:max-w-[760px] lg:text-[42px] 2xl:max-w-[950px] 2xl:text-[52px] max-sm:text-[25px]`}
            id="discover-passion-heading"
          >
            Discover Your Passion,
            <span className="block">Build Your Skills</span>
          </h2>
          <p className="mx-auto mt-3.5 max-w-[560px] text-[10px] leading-[1.65] text-[#92959D] lg:mt-5 lg:max-w-[760px] lg:text-sm 2xl:mt-6 2xl:max-w-[950px] 2xl:text-[17px] max-sm:text-[11px]">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology
            to the arts, and make a difference in your career and life.
          </p>
        </header>

        <div className="mx-auto mt-7 max-w-[720px] lg:mt-10 lg:max-w-[1440px] 2xl:mt-[50px] 2xl:max-w-[1600px]">
          <ul className="flex flex-wrap items-center justify-center gap-2 lg:gap-3 2xl:gap-[15px]">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;

              return (
                <li key={category}>
                  <button
                    className={`inline-flex h-[25px] cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-3 text-[9px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003BE2] lg:h-9 lg:px-4 lg:text-[11px] 2xl:h-[45px] 2xl:px-5 2xl:text-sm ${
                      isActive
                        ? "bg-[#D4FB20] text-[#163100]"
                        : "bg-[#F5F5F6] text-[#555963] hover:bg-[#E9EAEC]"
                    }`}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
            <li>
              <span className="inline-flex h-[25px] items-center px-1 text-[9px] font-medium text-[#003BE2] lg:h-9 lg:text-[11px] 2xl:h-[45px] 2xl:text-sm">
                + More
              </span>
            </li>
          </ul>
        </div>

        <div
          className="mt-11 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-[70px] lg:gap-8 2xl:mt-[88px] 2xl:gap-10 max-sm:mx-auto max-sm:max-w-[390px]"
          id="courses"
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard course={course} key={course.id} />
            ))
          ) : (
            <div
              className="col-span-full rounded-[18px] border border-dashed border-[#D5D8DE] bg-[#FAFAFB] px-6 py-16 text-center"
              role="status"
            >
              <p className="text-sm font-medium text-[#343740] lg:text-base">
                No courses are available in {activeCategory} yet.
              </p>
              <button
                className="mt-4 cursor-pointer rounded-full bg-[#D4FB20] px-5 py-2 text-xs font-medium text-[#163100] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003BE2]"
                type="button"
                onClick={() => setActiveCategory("Featured")}
              >
                View featured courses
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
