import Image from "next/image";
import { poppins } from "@/app/fonts";
import { HERO_ASSETS } from "@/constants";

const infoCardStyles =
  "absolute z-[5] rounded-[13px] bg-white text-[#22242B] shadow-[0_13px_26px_rgba(0,36,103,0.12)]";

const cardTitleStyles =
  "m-0 text-[10px] font-medium leading-tight lg:text-xs max-sm:text-xs";

function SearchIcon() {
  return (
    <svg
      className="size-[18px] shrink-0 fill-none stroke-current stroke-[1.8] [stroke-linecap:round]"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="10.8" cy="10.8" r="5.8" />
      <path d="m15.2 15.2 4 4" />
    </svg>
  );
}

function CourseCard() {
  return (
    <article
      className={`${infoCardStyles} top-[91px] left-[calc(50%_-_194px)] w-32 rounded-[11px] px-2.5 py-2 lg:w-[150px] max-md:top-[88px] max-md:left-[105px] max-md:w-[146px] max-sm:top-[106px] max-sm:left-2 max-sm:p-[11px]`}
    >
      <p className={cardTitleStyles}>UI/UX Design</p>
      <p className="mt-0.5 whitespace-nowrap text-[7px] leading-[1.3] text-[#989BA2] lg:text-[8px] max-sm:text-[9px]">
        200 Courses&nbsp; · &nbsp;1000+ Students
      </p>
    </article>
  );
}

function ProgressCard() {
  return (
    <article
      className={`${infoCardStyles} top-[100px] left-[calc(50%_+_75px)] w-[143px] rounded-[11px] px-[11px] pt-2.5 pb-3 max-md:top-[100px] max-md:right-[98px] max-md:left-auto max-md:w-[149px] max-sm:top-[113px] max-sm:right-2 max-sm:p-[11px]`}
    >
      <p className={cardTitleStyles}>Learning Progress</p>
      <strong
        className={`${poppins.className} mt-1 block text-[28px] leading-[1.05] font-semibold tracking-[-0.04em]`}
      >
        55%
      </strong>
      <div
        className="mt-2 h-1 overflow-hidden rounded-full bg-[#EEEFF1]"
        role="progressbar"
        aria-label="Learning progress"
        aria-valuenow={55}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span className="block h-full w-[55%] rounded-[inherit] bg-[#D4FB20]" />
      </div>
    </article>
  );
}

function StudentsCard() {
  return (
    <article
      className={`${infoCardStyles} bottom-10 left-[calc(50%_-_241px)] w-[159px] rounded-[11px] p-2 max-md:bottom-[30px] max-md:left-[78px] max-md:w-[180px] max-sm:bottom-[18px] max-sm:left-2 max-sm:w-[170px] max-sm:p-[11px]`}
    >
      <p className={cardTitleStyles}>Happy Students</p>
      <p className="mt-0.5 flex items-center gap-[3px] text-[9px] leading-none text-[#8B8E96]">
        <span>4.5 (240)</span>
        <span
          className="text-[11px] text-[#D4FB20]"
          aria-label="4.5 out of 5 stars"
        >
          ★
        </span>
      </p>
      <div
        className="mt-2 flex items-center"
        aria-label="A selection of happy students"
      >
        <div className="flex">
          {HERO_ASSETS.avatars.map((avatar, index) => (
            <Image
              className="-ml-[7px] size-[22px] rounded-full border-2 border-white object-cover first:ml-0 max-sm:size-[27px]"
              key={avatar}
              src={avatar}
              alt={`Happy student ${index + 1}`}
              width={32}
              height={32}
            />
          ))}
        </div>
        <span className="-ml-[3px] grid size-[26px] place-items-center rounded-full border-2 border-white bg-[#D4FB20] text-[7px] font-bold text-[#153000] max-sm:size-[31px] max-sm:text-[9px]">
          2K+
        </span>
      </div>
    </article>
  );
}

export default function Hero() {
  return (
    <section
      className="relative h-[calc(100svh_-_80px)] min-h-[553px] max-h-[700px] overflow-hidden text-white lg:min-h-[600px] max-md:h-[760px] max-md:min-h-[760px] max-md:max-h-none max-sm:h-[780px] max-sm:min-h-[780px]"
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 mx-auto w-[calc(100%_-_2.5rem)] max-w-[980px] pt-[38px] text-center max-lg:pt-7 max-md:w-[calc(100%_-_2rem)] max-md:pt-[38px] max-sm:pt-[27px]">
        <h1
          className={`${poppins.className} mx-auto max-w-[900px] text-[clamp(44px,5.25vw,64px)] leading-[1.12] font-semibold tracking-[-0.047em] [text-wrap:balance] max-lg:text-[clamp(42px,5.3vw,52px)] max-md:max-w-[600px] max-md:text-[clamp(35px,8.8vw,47px)] max-md:leading-[1.13] max-md:tracking-[-0.042em] max-sm:text-[clamp(31px,9vw,38px)]`}
          id="hero-heading"
        >
          <span className="block max-md:inline">Get Access to Hundreds</span>{" "}
          <span className="block max-md:inline">Courses Available</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[550px] text-[11px] leading-normal font-normal text-white/90 lg:max-w-[760px] lg:text-sm max-md:mt-5 max-md:max-w-[570px] max-md:text-[13px] max-sm:max-w-[390px] max-sm:text-[12.5px]">
          Unlock your creativity, gain valuable knowledge, and grow your business
          with our wide range of courses.
        </p>

        <form
          className="mx-auto mt-7 flex w-full max-w-[360px] items-center justify-center gap-2.5 max-md:mt-7 max-md:max-w-[520px] max-sm:flex-col max-sm:items-stretch max-sm:gap-[9px]"
          role="search"
          action="#courses"
        >
          <label className="sr-only" htmlFor="course-search">
            Search courses, topics, or creators
          </label>
          <div className="flex h-8 flex-1 items-center gap-2 rounded-full bg-white px-4 text-[#81858F] shadow-[0_8px_22px_rgba(0,24,109,0.11)] focus-within:outline-3 focus-within:outline-offset-3 focus-within:outline-[#D4FB20]/70 max-md:h-11 max-sm:h-[43px] max-sm:min-w-0 max-sm:flex-none max-sm:px-3.5">
            <SearchIcon />
            <input
              className="w-full border-0 bg-transparent text-[10px] text-[#1E2027] outline-0 placeholder:text-[#9598A1] lg:text-[13px] max-md:text-[13px] max-sm:text-xs"
              id="course-search"
              name="query"
              type="search"
              placeholder="Course, topic, creator"
            />
          </div>
          <button
            className="h-8 cursor-pointer rounded-full border-0 bg-[#D4FB20] px-[18px] text-[10px] font-medium text-[#0C2500] transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(35,53,0,0.2)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white lg:text-[13px] max-md:h-10 max-md:px-[25px] max-md:text-[13px] max-sm:h-[39px] max-sm:self-center max-sm:px-[27px]"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <div className="absolute bottom-0 left-1/2 z-[4] h-[330px] w-[min(830px,88vw)] -translate-x-1/2 max-md:h-[350px] max-md:w-[680px] max-sm:h-[370px] max-sm:w-full">
        <div
          className="absolute top-[57px] left-1/2 z-0 aspect-square w-[min(780px,82vw)] -translate-x-1/2 rounded-full bg-[#C8FF00] shadow-[inset_0_20px_38px_rgba(255,255,255,0.16)] max-md:top-[68px] max-md:w-[620px] max-sm:top-[90px] max-sm:w-[470px]"
          aria-hidden="true"
        />
        <Image
          className="absolute bottom-[-7px] left-[calc(50%_+_28px)] z-[2] h-auto max-h-[360px] w-[min(460px,53vw)] -translate-x-1/2 object-contain object-bottom drop-shadow-[0_16px_16px_rgba(0,26,80,0.18)] max-md:bottom-[-34px] max-md:left-1/2 max-md:w-[430px] max-md:max-h-[350px] max-sm:bottom-[-6px] max-sm:w-[360px]"
          src={HERO_ASSETS.student}
          alt="Smiling student wearing headphones and studying with a laptop"
          width={2888}
          height={2060}
          sizes="(max-width: 640px) 360px, (max-width: 768px) 430px, 460px"
          priority
        />
        <CourseCard />
        <ProgressCard />
        <StudentsCard />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <Image
          className="absolute top-[55px] left-[-8.2vw] size-[clamp(260px,26.75vw,385px)] object-contain select-none max-lg:top-[59px] max-lg:left-[-55px] max-lg:h-[240px] max-lg:w-[260px] max-lg:object-fill max-md:top-[168px] max-md:left-[-68px] max-md:size-[190px] max-md:object-contain max-sm:top-[220px] max-sm:left-[-75px] max-sm:size-40"
          src={HERO_ASSETS.decorations.limeSpiral}
          alt=""
          width={1061}
          height={1548}
        />
        <Image
          className="absolute top-[217px] left-[12vw] h-[105px] w-[clamp(120px,12.2vw,176px)] rotate-180 object-fill select-none lg:top-[175px] max-lg:w-[130px] max-md:top-[350px] max-md:left-[-10px] max-md:size-[72px] max-md:object-contain max-sm:hidden"
          src={HERO_ASSETS.decorations.smallWhiteSpiral}
          alt=""
          width={1265}
          height={1327}
        />
        <Image
          className="absolute bottom-0.5 left-2.5 size-[clamp(210px,23.9vw,344px)] object-contain select-none max-lg:size-[210px] max-md:bottom-[108px] max-md:left-[-43px] max-md:size-[170px] max-sm:bottom-[126px] max-sm:left-[-55px] max-sm:size-[130px]"
          src={HERO_ASSETS.decorations.whiteRing}
          alt=""
          width={1375}
          height={1371}
        />
        <Image
          className="absolute top-[41px] right-[-11.2vw] size-[clamp(250px,25.7vw,370px)] object-contain select-none max-lg:top-[57px] max-lg:right-[-60px] max-lg:h-[226px] max-lg:w-[250px] max-lg:object-fill max-md:top-[178px] max-md:right-[-78px] max-md:size-[185px] max-md:object-contain max-sm:top-[227px] max-sm:right-[-75px] max-sm:size-40"
          src={HERO_ASSETS.decorations.limeShape}
          alt=""
          width={852}
          height={1488}
        />
        <Image
          className="absolute top-[207px] right-[90px] size-[115px] object-contain select-none lg:top-40 max-md:top-[363px] max-md:right-0.5 max-md:size-[68px] max-sm:hidden"
          src={HERO_ASSETS.decorations.whiteTriangle}
          alt=""
          width={760}
          height={756}
        />
        <Image
          className="absolute right-[-1.2vw] bottom-3 size-[clamp(220px,22.9vw,330px)] object-contain select-none lg:bottom-[-8px] max-lg:right-[-27px] max-lg:size-[220px] max-md:right-[-45px] max-md:bottom-[92px] max-md:size-[170px] max-sm:right-[-65px] max-sm:bottom-[102px] max-sm:size-[140px]"
          src={HERO_ASSETS.decorations.largeWhiteSpiral}
          alt=""
          width={707}
          height={704}
        />
      </div>
    </section>
  );
}
