import { Footer } from "@/components/layout";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer variant="search" />
    </>
  );
}
