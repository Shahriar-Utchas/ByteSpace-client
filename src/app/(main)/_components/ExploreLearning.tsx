import { poppins } from "@/app/fonts";

type PathIconName =
  | "design"
  | "development"
  | "software"
  | "business"
  | "marketing"
  | "photography";

type LearningPath = {
  readonly name: string;
  readonly icon: PathIconName;
};

const LEARNING_PATHS = [
  { name: "Design", icon: "design" },
  { name: "Development", icon: "development" },
  { name: "IT & Software", icon: "software" },
  { name: "Business", icon: "business" },
  { name: "Marketing", icon: "marketing" },
  { name: "Photography", icon: "photography" },
] as const satisfies readonly LearningPath[];

function PathIcon({ name }: { name: PathIconName }) {
  const commonProps = {
    className: "size-5 lg:size-7",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "design":
      return (
        <svg {...commonProps}>
          <path d="m14.5 5.5 4 4M13 7l4 4-8.5 8.5H4.5v-4L13 7Z" />
          <path d="m5 5 14 14M7.5 3.5 4 7l3 3 3.5-3.5M17 14l3.5 3.5L17 21l-3-3" />
        </svg>
      );
    case "development":
      return (
        <svg {...commonProps}>
          <path d="M8 5H5v3M16 5h3v3M8 19H5v-3M16 19h3v-3" />
          <path d="m10 8-4 4 4 4M14 8l4 4-4 4" />
        </svg>
      );
    case "software":
      return (
        <svg {...commonProps}>
          <path d="M5 5h14v10H5z" />
          <path d="M3 19h18M9 15l-1 4M15 15l1 4" />
        </svg>
      );
    case "business":
      return (
        <svg {...commonProps}>
          <path d="M4 21V4h10v17M14 9h6v12M2 21h20" />
          <path d="M7 8h1M11 8h1M7 12h1M11 12h1M7 16h1M11 16h1M17 13h1M17 17h1" />
        </svg>
      );
    case "marketing":
      return (
        <svg {...commonProps}>
          <path d="M4 13h3l9 4V5L7 9H4v4Z" />
          <path d="m7 13 1.5 5h3M19 8c1 1 1 3 0 4M21 6c2 3 2 7 0 10" />
        </svg>
      );
    case "photography":
      return (
        <svg {...commonProps}>
          <path d="M4 7h4l1.5-2h5L16 7h4v12H4V7Z" />
          <circle cx="12" cy="13" r="3" />
          <path d="M7 10h.01" />
        </svg>
      );
  }
}

export default function ExploreLearning() {
  return (
    <section
      className="bg-white pt-10 pb-20 lg:pt-16 lg:pb-24 max-sm:pt-8 max-sm:pb-14"
      aria-labelledby="learning-paths-heading"
    >
      <div className="mx-auto w-[calc(100%_-_2rem)] max-w-[1080px] md:w-[calc(100%_-_10rem)] lg:w-[calc(100%_-_5rem)]">
        <header className="text-center">
          <h2
            className={`${poppins.className} text-[26px] leading-[1.15] font-semibold tracking-[-0.04em] text-[#090B14] lg:text-[32px] max-sm:text-[23px]`}
            id="learning-paths-heading"
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-3 max-w-[650px] text-xs leading-[1.7] text-[#90939B] lg:mt-4 lg:max-w-[850px] lg:text-sm max-sm:text-[11px]">
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring there&apos;s
            something for everyone. Unleash your potential and explore our carefully
            curated categories.
          </p>
        </header>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-16 lg:grid-cols-6 lg:gap-8">
          {LEARNING_PATHS.map((path) => (
            <li
              className="flex aspect-square min-w-0 flex-col items-center justify-center rounded-[16px] border border-[#D6D8DD] bg-white text-center lg:rounded-[22px]"
              key={path.name}
            >
              <span className="grid size-10 place-items-center rounded-full bg-[#D4FB20] text-[#16220A] lg:size-[54px]">
                <PathIcon name={path.icon} />
              </span>
              <h3 className="mt-3 px-2 text-sm leading-tight font-medium text-[#292C33] lg:mt-4 lg:text-base">
                {path.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
