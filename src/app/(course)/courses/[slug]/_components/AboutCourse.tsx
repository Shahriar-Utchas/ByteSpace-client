"use client";

import Image from "next/image";
import { useState } from "react";

import { poppins } from "@/app/fonts";

import { DESCRIPTION_PARAGRAPHS, GALLERY_IMAGES, KEY_POINTS } from "../_data/course-detail";
import { CheckIcon } from "./CourseIcons";

const headingClass = `${poppins.className} text-xl leading-6 font-semibold text-[var(--search-text)]`;

export default function AboutCourse() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <article className="pb-2 text-[var(--search-meta)]">
      <section aria-labelledby="description-heading">
        <h2 className={headingClass} id="description-heading">Description</h2>
        <div className="mt-6 space-y-7 text-base leading-[1.6]">
          {DESCRIPTION_PARAGRAPHS.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="mt-8" aria-labelledby="gallery-heading">
        <h2 className={headingClass} id="gallery-heading">Sneak Peak</h2>
        <div className="mt-6 grid grid-cols-2 gap-5 min-[1180px]:grid-cols-4">
          {GALLERY_IMAGES.map((image, index) => (
            <button
              className="group relative aspect-[166/126] min-w-0 cursor-zoom-in overflow-hidden rounded-2xl bg-[#ECEDEF] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--search-blue)]"
              key={`${image.alt}-${index}`}
              type="button"
              onClick={() => setSelectedImage(index)}
              aria-label={`View larger: ${image.alt}`}
            >
              <Image
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1179px) 45vw, 166px"
                style={{ objectPosition: image.position }}
              />
            </button>
          ))}
        </div>
      </section>

      <section className="mt-7" aria-labelledby="key-points-heading">
        <h2 className={headingClass} id="key-points-heading">Key Points</h2>
        <ul className="mt-6 space-y-3 text-base leading-[1.6]">
          {KEY_POINTS.map((point) => (
            <li className="flex items-center gap-3" key={point}>
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[var(--search-blue)] text-white">
                <CheckIcon className="size-4" />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </section>

      {selectedImage !== null ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-5"
          role="dialog"
          aria-modal="true"
          aria-label="Course gallery image"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-5 top-5 grid size-11 cursor-pointer place-items-center rounded-full bg-white text-2xl text-[var(--search-text)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--search-lime)]"
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image viewer"
          >
            ×
          </button>
          <div className="relative aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-3xl" onClick={(event) => event.stopPropagation()}>
            <Image
              className="object-cover"
              src={GALLERY_IMAGES[selectedImage].src}
              alt={GALLERY_IMAGES[selectedImage].alt}
              fill
              sizes="min(90vw, 896px)"
              style={{ objectPosition: GALLERY_IMAGES[selectedImage].position }}
            />
          </div>
        </div>
      ) : null}
    </article>
  );
}
