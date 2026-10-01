import type { ReactNode } from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import CourseIntro from "./CourseIntro";
import CoursePreview from "./CoursePreview";
import CourseTabs from "./CourseTabs";
import EnrollmentSidebar from "./EnrollmentSidebar";

export default function CourseDetailShell({ children, slug }: { children: ReactNode; slug: string }) {
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-x-0 top-0 h-[1450px] bg-[var(--search-blue)] sm:h-[1520px] lg:h-[960px]"
          style={{
            backgroundImage:
              "linear-gradient(var(--search-grid) 1px, transparent 1px), linear-gradient(90deg, var(--search-grid) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
          aria-hidden="true"
        />

        <Navbar variant="detail" />
        <main className="relative z-10" id="course-content">
          <CourseIntro />

          <div className="course-detail-container relative mt-14 pb-20 md:mt-16 lg:mt-14 lg:pb-24">
            <div className="w-full lg:w-[calc(100%_-_29.75rem)]">
              <CoursePreview />
            </div>

            <div className="mt-8 lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:w-[412px]">
              <EnrollmentSidebar />
            </div>

            <div className="mt-12 w-full lg:mt-24 lg:w-[calc(100%_-_29.75rem)]">
              <CourseTabs slug={slug} />
              <div className="mt-10">{children}</div>
            </div>
          </div>
        </main>
      </div>
      <Footer variant="detail" />
    </>
  );
}
