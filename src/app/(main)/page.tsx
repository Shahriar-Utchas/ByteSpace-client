import Hero from "./_components/Hero";
import { Navbar } from "@/components/layout";
import Clients from "./_components/Clients";
import DiscoverPassion from "./_components/DiscoverPassion";
import ExploreLearning from "./_components/ExploreLearning";
import ProfessionalPath from "./_components/ProfessionalPath";
import CreateCourse from "./_components/CreateCourse";
import ClientReview from "./_components/ClientReview";

export default function HomePage() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-[#003BE2] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-position:top_left] [background-size:80px_80px] max-md:[background-size:64px_64px]">
        <Navbar />
        <Hero />
      </div>
      <Clients />
      <DiscoverPassion />
      <ExploreLearning />
      <ProfessionalPath />
      <CreateCourse />
      <ClientReview />
    </>
  );
}
