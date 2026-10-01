import type { ReactNode } from "react";

import CourseDetailShell from "./_components/CourseDetailShell";

export default async function CourseDetailLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <CourseDetailShell slug={slug}>{children}</CourseDetailShell>;
}
