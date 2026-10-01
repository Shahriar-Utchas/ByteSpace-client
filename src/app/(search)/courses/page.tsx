import type { Metadata } from "next";

import CourseSearchPage from "./_components/CourseSearchPage";

export const metadata: Metadata = {
  title: "Find Courses | ByteSpace",
  description: "Search and explore ByteSpace courses.",
};

type CoursesPageProps = {
  searchParams: Promise<{ query?: string | string[] }>;
};

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const { query } = await searchParams;
  const initialQuery = Array.isArray(query) ? query[0] : query ?? "";

  return <CourseSearchPage initialQuery={initialQuery} />;
}
