import { SEARCH_COURSES } from "@/app/(search)/courses/_data/courses";

export const CREATOR = {
  slug: "purepearl-studio",
  name: "PurePearl Studio",
  role: "Passionate UI/UX, Web designer",
  avatar: "/assets/creator/purepearl-studio.png",
  productCount: 3,
  followerCount: 12,
  biography: [
    "Welcome to the creative world of [Creator’s Name]. Here, you’ll discover the passion, expertise, and inspiration that drive my creative journey. Let’s explore and learn together!",
    "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  ],
} as const;

export const CREATOR_COURSES = SEARCH_COURSES.slice(0, 6);
