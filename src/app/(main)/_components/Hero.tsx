import Image from "next/image";
import { poppins } from "@/app/fonts";
import { HERO_ASSETS } from "@/constants";

const infoCardStyles =
  "absolute z-[5] rounded-[13px] bg-white text-[#22242B] shadow-[0_13px_26px_rgba(0,36,103,0.12)]";

const cardTitleStyles = "m-0 text-xs font-medium leading-tight";

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
      className={`${infoCardStyles} top-16 left-20 w-[166px] px-3.5 pt-3.5 pb-[13px] max-lg:left-[110px] max-md:top-[88px] max-md:left-[105px] max-sm:top-[106px] max-sm:left-2 max-sm:w-[146px] max-sm:p-[11px]`}
    >
      <p className={cardTitleStyles}>UI/UX Design</p>
      <p className="mt-[3px] text-[9px] leading-[1.3] text-[#989BA2]">
        200 Courses&nbsp; · &nbsp;1000+ Students
      </p>
    </article>
  );
}

function ProgressCard() {
  return (
    <article
      className={`${infoCardStyles} top-[72px] right-[74px] w-[182px] px-3.5 pt-[13px] pb-3.5 max-lg:right-[106px] max-md:top-[100px] max-md:right-[98px] max-sm:top-[113px] max-sm:right-2 max-sm:w-[149px] max-sm:p-[11px]`}
    >
      <p className={cardTitleStyles}>Learning Progress</p>
      <strong
        className={`${poppins.className} mt-[5px] block text-[34px] leading-[1.05] font-semibold tracking-[-0.04em] max-sm:text-[28px]`}
      >
        55%
      </strong>
      <div
        className="mt-[9px] h-1.5 overflow-hidden rounded-full bg-[#EEEFF1]"
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
      className={`${infoCardStyles} bottom-[37px] left-[18px] w-[202px] px-[13px] pt-[13px] pb-3 max-lg:left-[62px] max-md:bottom-[30px] max-md:left-[78px] max-sm:bottom-[18px] max-sm:left-2 max-sm:w-[170px] max-sm:p-[11px]`}
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
              className="-ml-[9px] size-[29px] rounded-full border-2 border-white object-cover first:ml-0 max-sm:size-[27px]"
              key={avatar}
              src={avatar}
              alt={`Happy student ${index + 1}`}
              width={32}
              height={32}
            />
          ))}
        </div>
        <span className="-ml-[3px] grid size-[33px] place-items-center rounded-full border-2 border-white bg-[#D4FB20] text-[9px] font-bold text-[#153000] max-sm:size-[31px]">
          2K+
        </span>
      </div>
    </article>
  );
}

export default function Hero() {
  return (
    <section
      className="relative h-[clamp(610px,calc(100svh_-_80px),700px)] min-h-[610px] overflow-hidden text-white max-md:h-[760px] max-md:min-h-[760px] max-sm:h-[780px] max-sm:min-h-[780px]"
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 mx-auto w-[calc(100%_-_2.5rem)] max-w-[980px] pt-[38px] text-center max-lg:pt-[43px] max-md:w-[calc(100%_-_2rem)] max-md:pt-[38px] max-sm:pt-[27px]">
        <h1
          className={`${poppins.className} mx-auto max-w-[900px] text-[clamp(44px,5.25vw,64px)] leading-[1.12] font-semibold tracking-[-0.047em] [text-wrap:balance] max-lg:text-[clamp(42px,5.3vw,52px)] max-md:max-w-[600px] max-md:text-[clamp(35px,8.8vw,47px)] max-md:leading-[1.13] max-md:tracking-[-0.042em] max-sm:text-[clamp(31px,9vw,38px)]`}
          id="hero-heading"
        >
          <span className="block max-md:inline">Get Access to Hundreds</span>{" "}
          <span className="block max-md:inline">Courses Available</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[760px] text-sm leading-normal font-normal text-white/90 max-md:mt-5 max-md:max-w-[570px] max-md:text-[13px] max-sm:max-w-[390px] max-sm:text-[12.5px]">
          Unlock your creativity, gain valuable knowledge, and grow your business
          with our wide range of courses.
        </p>

        <form
          className="mx-auto mt-9 flex w-full max-w-[590px] items-center justify-center gap-[13px] max-md:mt-7 max-md:max-w-[520px] max-sm:flex-col max-sm:items-stretch max-sm:gap-[9px]"
          role="search"
          action="#courses"
        >
          <label className="sr-only" htmlFor="course-search">
            Search courses, topics, or creators
          </label>
          <div className="flex h-11 flex-1 items-center gap-2.5 rounded-full bg-white px-[18px] text-[#81858F] shadow-[0_8px_22px_rgba(0,24,109,0.11)] focus-within:outline-3 focus-within:outline-offset-3 focus-within:outline-[#D4FB20]/70 max-sm:h-[43px] max-sm:min-w-0 max-sm:flex-none max-sm:px-3.5">
            <SearchIcon />
            <input
              className="w-full border-0 bg-transparent text-[13px] text-[#1E2027] outline-0 placeholder:text-[#9598A1] max-sm:text-xs"
              id="course-search"
              name="query"
              type="search"
              placeholder="Course, topic, creator"
            />
          </div>
          <button
            className="h-10 cursor-pointer rounded-full border-0 bg-[#D4FB20] px-[25px] text-[13px] font-medium text-[#0C2500] transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(35,53,0,0.2)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white max-sm:h-[39px] max-sm:self-center max-sm:px-[27px]"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <div className="absolute bottom-0 left-1/2 z-[4] h-[330px] w-[min(830px,88vw)] -translate-x-1/2 max-md:h-[350px] max-md:w-[680px] max-sm:h-[370px] max-sm:w-full">
        <div
          className="absolute top-[30px] left-1/2 z-0 aspect-square w-[min(780px,82vw)] -translate-x-1/2 rounded-full bg-[#C8FF00] shadow-[inset_0_20px_38px_rgba(255,255,255,0.16)] max-md:top-[68px] max-md:w-[620px] max-sm:top-[90px] max-sm:w-[470px]"
          aria-hidden="true"
        />
        <Image
          className="absolute bottom-[-34px] left-1/2 z-[2] h-auto max-h-[360px] w-[min(500px,56vw)] -translate-x-1/2 object-contain object-bottom drop-shadow-[0_16px_16px_rgba(0,26,80,0.18)] max-md:w-[430px] max-md:max-h-[350px] max-sm:bottom-[-6px] max-sm:w-[360px]"
          src={HERO_ASSETS.student}
          alt="Smiling student wearing headphones and studying with a laptop"
          width={2888}
          height={2060}
          sizes="(max-width: 640px) 360px, (max-width: 768px) 430px, 500px"
          priority
        />
        <CourseCard />
        <ProgressCard />
        <StudentsCard />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <Image
          className="absolute top-[141px] left-[-8.2vw] size-[clamp(260px,26.75vw,385px)] object-contain select-none max-lg:left-[-84px] max-lg:size-[260px] max-md:top-[168px] max-md:left-[-68px] max-md:size-[190px] max-sm:top-[220px] max-sm:left-[-75px] max-sm:size-40"
          src={HERO_ASSETS.decorations.limeSpiral}
          alt=""
          width={1061}
          height={1548}
        />
        <Image
          className="absolute top-[265px] left-[10vw] size-[clamp(110px,12.2vw,176px)] rotate-180 object-contain select-none max-lg:left-[9vw] max-lg:size-[110px] max-md:top-[350px] max-md:left-[-10px] max-md:size-[72px] max-sm:hidden"
          src={HERO_ASSETS.decorations.smallWhiteSpiral}
          alt=""
          width={1265}
          height={1327}
        />
        <Image
          className="absolute bottom-[25px] left-0 size-[clamp(230px,23.9vw,344px)] object-contain select-none max-lg:left-[-12px] max-lg:size-[230px] max-md:bottom-[108px] max-md:left-[-43px] max-md:size-[170px] max-sm:bottom-[126px] max-sm:left-[-55px] max-sm:size-[130px]"
          src={HERO_ASSETS.decorations.whiteRing}
          alt=""
          width={1375}
          height={1371}
        />
        <Image
          className="absolute top-[141px] right-[-11.2vw] size-[clamp(250px,25.7vw,370px)] object-contain select-none max-lg:right-[-110px] max-lg:size-[250px] max-md:top-[178px] max-md:right-[-78px] max-md:size-[185px] max-sm:top-[227px] max-sm:right-[-75px] max-sm:size-40"
          src={HERO_ASSETS.decorations.limeShape}
          alt=""
          width={852}
          height={1488}
        />
        <Image
          className="absolute top-[267px] right-[max(11vw,116px)] h-auto w-[94px] select-none max-lg:right-[57px] max-md:top-[363px] max-md:right-0.5 max-md:w-[68px] max-sm:hidden"
          src={HERO_ASSETS.decorations.whiteTriangle}
          alt=""
          width={760}
          height={756}
        />
        <Image
          className="absolute right-[-1.2vw] bottom-[29px] size-[clamp(220px,22.9vw,330px)] object-contain select-none max-lg:right-[-18px] max-lg:size-[220px] max-md:right-[-45px] max-md:bottom-[92px] max-md:size-[170px] max-sm:right-[-65px] max-sm:bottom-[102px] max-sm:size-[140px]"
          src={HERO_ASSETS.decorations.largeWhiteSpiral}
          alt=""
          width={707}
          height={704}
        />
      </div>
    </section>
  );
}
