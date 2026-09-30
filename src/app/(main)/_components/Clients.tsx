"use client";

import Image from "next/image";
import { useEffect, useRef, type RefObject } from "react";

type Client = {
  id: string;
  name: string;
  image: string;
};

const CLIENTS = [
  {
    id: "logoipsum-waves-one",
    name: "Logoipsum",
    image: "/assets/clients/client-1.png",
  },
  {
    id: "logoipsum-bolt-one",
    name: "Logoipsum",
    image: "/assets/clients/client-2.png",
  },
  {
    id: "logoipsum-waves-two",
    name: "Logoipsum",
    image: "/assets/clients/client-1.png",
  },
  {
    id: "logoipsum-bolt-two",
    name: "Logoipsum",
    image: "/assets/clients/client-2.png",
  },
] as const satisfies readonly Client[];

type ClientListProps = {
  hidden?: boolean;
  listRef?: RefObject<HTMLUListElement | null>;
};

function ClientList({ hidden = false, listRef }: ClientListProps) {
  return (
    <ul
      ref={listRef}
      className="flex shrink-0 items-center gap-6 pr-6 lg:gap-14 lg:pr-14 max-sm:gap-5 max-sm:pr-5"
      aria-hidden={hidden || undefined}
    >
      {CLIENTS.map((client) => (
        <li
          className="flex w-[104px] shrink-0 items-center gap-1.5 text-[#91949B] lg:w-[120px] lg:gap-2 max-sm:w-[98px]"
          key={client.id}
        >
          <Image
            className="size-[22px] shrink-0 object-contain lg:size-6 max-sm:size-5"
            src={client.image}
            alt=""
            width={160}
            height={160}
          />
          <span className="whitespace-nowrap text-[11px] leading-none font-semibold tracking-[-0.025em] lg:text-xs max-sm:text-[10px]">
            {client.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Clients() {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLUListElement>(null);
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const firstGroup = firstGroupRef.current;

    if (!track || !firstGroup) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let resizeFrame = 0;

    const startMarquee = () => {
      animationRef.current?.cancel();
      animationRef.current = null;

      if (reducedMotion.matches) return;

      const distance = firstGroup.getBoundingClientRect().width;

      if (distance === 0) return;

      animationRef.current = track.animate(
        [
          { transform: "translate3d(0, 0, 0)" },
          { transform: `translate3d(-${distance}px, 0, 0)` },
        ],
        {
          duration: (distance / 42) * 1000,
          easing: "linear",
          iterations: Number.POSITIVE_INFINITY,
        },
      );
    };

    const scheduleMarquee = () => {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(startMarquee);
    };

    const resizeObserver = new ResizeObserver(scheduleMarquee);
    resizeObserver.observe(firstGroup);
    reducedMotion.addEventListener("change", scheduleMarquee);
    scheduleMarquee();

    return () => {
      window.cancelAnimationFrame(resizeFrame);
      resizeObserver.disconnect();
      reducedMotion.removeEventListener("change", scheduleMarquee);
      animationRef.current?.cancel();
      animationRef.current = null;
    };
  }, []);

  return (
    <section
      className="h-[106px] overflow-hidden bg-[#F7F7F8] max-md:h-24 max-sm:h-20"
      aria-labelledby="clients-heading"
    >
      <h2 className="sr-only" id="clients-heading">
        Trusted clients
      </h2>
      <div className="flex h-full items-center pl-20 lg:pl-[7.5vw] max-md:pl-10 max-sm:pl-6">
        <div
          ref={trackRef}
          className="flex w-max items-center will-change-transform"
          onMouseEnter={() => animationRef.current?.pause()}
          onMouseLeave={() => animationRef.current?.play()}
        >
          <ClientList listRef={firstGroupRef} />
          <ClientList hidden />
        </div>
      </div>
    </section>
  );
}
