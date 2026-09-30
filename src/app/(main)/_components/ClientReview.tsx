import Image from "next/image";

import { poppins } from "@/app/fonts";
import { HERO_ASSETS } from "@/constants";

type Testimonial = {
  readonly name: string;
  readonly role: string;
  readonly quote: string;
  readonly avatar: string;
};

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    avatar: HERO_ASSETS.avatars[0],
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    avatar: HERO_ASSETS.avatars[1],
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    avatar: HERO_ASSETS.avatars[2],
  },
] as const satisfies readonly Testimonial[];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex min-h-[310px] flex-col rounded-[18px] bg-white p-5 lg:min-h-[380px] lg:rounded-[22px] lg:p-7">
      <Image
        className="size-12 rounded-full object-cover lg:size-14"
        src={testimonial.avatar}
        alt={`${testimonial.name}, ${testimonial.role}`}
        width={56}
        height={56}
      />

      <h3 className="mt-5 text-sm leading-none font-bold text-[#1D2027] lg:mt-6 lg:text-base">
        {testimonial.name}
      </h3>
      <p className="mt-2 text-xs leading-none font-medium text-[#003BE2] lg:text-sm">
        {testimonial.role}
      </p>

      <blockquote className="mt-6 text-xs leading-[1.75] text-[#5E626B] lg:mt-7 lg:text-sm">
        <span aria-hidden="true">&ldquo;</span>
        {testimonial.quote}
        <span aria-hidden="true">&rdquo;</span>
      </blockquote>
    </article>
  );
}

export default function ClientReview() {
  return (
    <section
      className="relative isolate overflow-hidden bg-white py-16 lg:py-20 max-sm:py-12"
      aria-labelledby="client-review-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -bottom-[38%] -left-[24%] h-[105%] w-[78%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,59,226,0.24)_0%,rgba(0,59,226,0.0552)_53%,rgba(0,59,226,0.0144)_75%,rgba(0,59,226,0)_100%)]" />
        <div className="absolute -top-[48%] -right-[22%] h-[105%] w-[78%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(203,252,1,0.4)_0%,rgba(203,252,1,0.092)_53%,rgba(203,252,1,0.024)_75%,rgba(203,252,1,0)_100%)]" />
        <div className="absolute -top-[30%] left-[18%] h-[100%] w-[72%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(203,252,1,0.6)_0%,rgba(203,252,1,0.138)_53%,rgba(203,252,1,0.036)_75%,rgba(203,252,1,0)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-[calc(100%_-_2rem)] max-w-[1120px] lg:w-[calc(100%_-_5rem)]">
        <header className="grid items-center gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <h2
            className={`${poppins.className} max-w-[500px] text-[29px] leading-[1.2] font-semibold tracking-[-0.04em] text-[#090B14] lg:text-[40px] max-lg:text-center max-sm:text-[26px]`}
            id="client-review-heading"
          >
            Discover What Our
            <span className="block">Community Is Saying</span>
          </h2>

          <p className="text-xs leading-[1.75] text-[#62666F] lg:text-sm max-lg:mx-auto max-lg:max-w-[680px] max-lg:text-center">
            At ByteSpace, our vibrant community of learners and creators is at the
            heart of what we do. Hear directly from those who have experienced the
            transformative journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic
            learners and accomplished creators.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
