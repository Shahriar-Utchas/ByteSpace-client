import Image from "next/image";
import Link from "next/link";

import { poppins } from "@/app/fonts";
import { HERO_ASSETS } from "@/constants";

const limeFilter =
  "[filter:brightness(0)_saturate(100%)_invert(91%)_sepia(93%)_saturate(1480%)_hue-rotate(25deg)_brightness(105%)_contrast(103%)]";

export default function CreateCourse() {
  return (
    <section
      className="relative isolate flex min-h-[340px] overflow-hidden bg-[#003BE2] text-white [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-position:top_left] [background-size:80px_80px] lg:min-h-[430px] 2xl:min-h-[538px] 2xl:[background-size:100px_100px] max-md:[background-size:64px_64px] max-sm:min-h-[440px]"
      aria-labelledby="create-course-heading"
    >
      <div className="relative z-10 mx-auto flex w-[calc(100%_-_2rem)] max-w-[900px] flex-col items-center justify-center py-14 text-center lg:max-w-[1040px] lg:py-20 2xl:max-w-[1300px] 2xl:py-[100px] max-sm:py-16">
        <h2
          className={`${poppins.className} max-w-[700px] text-[30px] leading-[1.12] font-semibold tracking-[-0.04em] lg:max-w-[820px] lg:text-[42px] 2xl:max-w-[1025px] 2xl:text-[52px] max-sm:text-[27px]`}
          id="create-course-heading"
        >
          <span className="block max-sm:inline">Unlock Your Potential as a</span>{" "}
          <span className="block max-sm:inline">Creator with ByteSpace</span>
        </h2>

        <p className="mt-7 max-w-[740px] text-xs leading-[1.7] text-white/90 lg:max-w-[900px] lg:text-sm 2xl:mt-9 2xl:max-w-[1125px] 2xl:text-[17px] max-sm:mt-5 max-sm:text-[11px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the
          ByteSpace Course Library.
        </p>

        <Link
          className="mt-8 inline-flex h-10 items-center justify-center rounded-full bg-[#D4FB20] px-7 text-xs font-medium text-[#112600] no-underline transition-shadow hover:shadow-[0_10px_26px_rgba(22,40,0,0.28)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white lg:mt-10 lg:h-11 lg:px-8 lg:text-sm 2xl:mt-[50px] 2xl:h-[55px] 2xl:px-10 2xl:text-[17px]"
          href="/register"
        >
          Join as Creator
        </Link>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <Image
          className="absolute -top-20 -left-8 h-[190px] w-[140px] object-fill lg:-top-[115px] lg:-left-10 lg:h-[270px] lg:w-[200px] max-sm:-top-12 max-sm:-left-12 max-sm:h-36 max-sm:w-28"
          src={HERO_ASSETS.decorations.limeSpiral}
          alt=""
          width={1061}
          height={1548}
        />
        <Image
          className="absolute top-5 left-[14%] size-[88px] rotate-180 object-contain lg:top-7 lg:left-[13%] lg:size-[120px] max-md:left-[10%] max-sm:hidden"
          src={HERO_ASSETS.decorations.smallWhiteSpiral}
          alt=""
          width={1265}
          height={1327}
        />
        <Image
          className="absolute -bottom-2 -left-8 size-[105px] -rotate-12 object-contain lg:bottom-16 lg:-left-8 lg:size-[140px] max-sm:bottom-4 max-sm:-left-14 max-sm:size-28"
          src={HERO_ASSETS.decorations.whiteTriangle}
          alt=""
          width={760}
          height={756}
        />
        <Image
          className={`absolute -bottom-[110px] left-[5%] size-[190px] object-contain lg:-bottom-[145px] lg:left-[5%] lg:size-[260px] max-sm:-bottom-20 max-sm:left-2 max-sm:size-36 ${limeFilter}`}
          src={HERO_ASSETS.decorations.whiteRing}
          alt=""
          width={1375}
          height={1371}
        />
        <Image
          className={`absolute top-4 right-[15%] size-[95px] rotate-12 object-contain lg:top-5 lg:right-[16%] lg:size-[135px] max-md:right-[10%] max-sm:top-5 max-sm:right-2 max-sm:size-20 ${limeFilter}`}
          src={HERO_ASSETS.decorations.whiteTriangle}
          alt=""
          width={760}
          height={756}
        />
        <Image
          className="absolute -top-5 -right-16 h-[230px] w-[130px] object-fill [filter:grayscale(1)_brightness(2.3)] lg:top-5 lg:-right-20 lg:h-[320px] lg:w-[185px] max-sm:hidden"
          src={HERO_ASSETS.decorations.limeShape}
          alt=""
          width={852}
          height={1488}
        />
        <Image
          className={`absolute -right-3 -bottom-[58px] size-[165px] rotate-12 object-contain lg:right-[4%] lg:-bottom-[78px] lg:size-[230px] max-sm:-right-14 max-sm:-bottom-12 max-sm:size-36 ${limeFilter}`}
          src={HERO_ASSETS.decorations.largeWhiteSpiral}
          alt=""
          width={707}
          height={704}
        />
      </div>
    </section>
  );
}
