export const SEARCH_CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
] as const;

export type SearchCategory = (typeof SEARCH_CATEGORIES)[number];

export type SearchCourse = {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly category: Exclude<SearchCategory, "Featured">;
  readonly image: string;
  readonly imageAlt: string;
  readonly lessons: number;
  readonly duration: string;
  readonly comments: number;
  readonly rating: number;
  readonly level: "Beginner";
  readonly price: number;
};

const COURSE_TEMPLATES = [
  {
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    image: "/assets/discover-passion/1.jpg",
    imageAlt: "Designer creating interface wireframes at a desk",
  },
  {
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    category: "Drawing & Painting",
    image: "/assets/discover-passion/6.jpg",
    imageAlt: "Collection of digital interface icons",
  },
  {
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    category: "Social Media",
    image: "/assets/discover-passion/5.jpg",
    imageAlt: "Analytics dashboard displayed on a laptop",
  },
  {
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    category: "Creative Marketing",
    image: "/assets/discover-passion/4.jpg",
    imageAlt: "Organized creative workspace with a desktop computer",
  },
  {
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    category: "Marketing",
    image: "/assets/discover-passion/3.jpg",
    imageAlt: "Financial performance chart on a computer screen",
  },
  {
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    category: "Animation",
    image: "/assets/discover-passion/2.jpg",
    imageAlt: "Team developing ideas during a workshop",
  },
] as const;

export const SEARCH_COURSES: readonly SearchCourse[] = Array.from(
  { length: 15 },
  (_, repeatIndex) =>
    COURSE_TEMPLATES.map((course, courseIndex) => ({
      ...course,
      id: `${course.slug}-${repeatIndex + 1}`,
      slug: course.slug,
      lessons: 17,
      duration: "2 hours 16 mins",
      comments: 59,
      rating: 4.5,
      level: "Beginner" as const,
      price: 25,
      relevance: 90 - repeatIndex * COURSE_TEMPLATES.length - courseIndex,
    })),
).flat();
