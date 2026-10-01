"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseTabs({ slug }: { slug: string }) {
  const pathname = usePathname();
  const base = `/courses/${slug}`;
  const tabs = [
    { label: "About", href: base, active: pathname === base || pathname === `${base}/` },
    { label: "Lesson", href: `${base}/lessons`, active: pathname.startsWith(`${base}/lessons`) },
    { label: "Reviews", href: `${base}/reviews`, active: pathname.startsWith(`${base}/reviews`) },
  ];

  return (
    <nav className="flex flex-wrap gap-4" aria-label="Course information">
      {tabs.map((tab) => (
        <Link
          className={`inline-flex h-11 items-center rounded-full px-6 text-sm font-medium no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--search-blue)] ${
            tab.active
              ? "bg-[var(--search-lime)] text-[#142800]"
              : "bg-[var(--search-soft)] text-[var(--search-meta)] hover:text-[var(--search-blue)]"
          }`}
          href={tab.href}
          key={tab.label}
          aria-current={tab.active ? "page" : undefined}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
