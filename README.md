# ByteSpace

ByteSpace is a responsive online-learning marketplace interface for discovering courses, viewing course and creator details, and accessing learner and creator authentication flows.

## Technology stack

| Technology | Version | Purpose |
| --- | --- | --- |
| Next.js | 16.3.7 | App Router, routing, layouts, metadata, image optimization, and production builds |
| React | 19.2.8 | Component rendering and client-side interactions |
| React DOM | 19.2.8 | Browser rendering |
| TypeScript | 5.x | Strict typing for components, data, and route contracts |
| Tailwind CSS | 4.x | Utility-first styling and responsive layouts |
| `@tailwindcss/postcss` | 4.x | Tailwind integration through PostCSS |
| ESLint | 9.x | Code quality validation |
| `eslint-config-next` | 16.3.7 | Next.js Core Web Vitals and TypeScript linting rules |
| `next/font/local` | Next.js built-in | Self-hosted Clash Display, Poppins, and Satoshi fonts |
| `next/image` | Next.js built-in | Responsive local image loading and optimization |

The project requires Node.js 20.9.0 or newer.

## Folder structure

```text
bytespace/
|-- public/
|   |-- assets/
|   |   |-- auth/
|   |   |   `-- auth-hero.png
|   |   |-- clients/
|   |   |   |-- client-1.png
|   |   |   `-- client-2.png
|   |   |-- course-detail/
|   |   |   `-- course-preview.png
|   |   |-- creator/
|   |   |   `-- purepearl-studio.png
|   |   |-- discover-passion/
|   |   |   `-- 1.jpg ... 6.jpg
|   |   |-- hero-assets/
|   |   |   |-- hero.png
|   |   |   |-- logo.png
|   |   |   |-- logo-mark.svg
|   |   |   |-- avatar-1.jpg ... avatar-5.jpg
|   |   |   `-- decorative PNG and SVG artwork
|   |   |-- not-found/
|   |   |   `-- 404.png
|   |   |-- professional-path/
|   |   |   |-- top.png
|   |   |   `-- bottom.png
|   |   `-- search/
|   |       `-- catalog interface icons
|   `-- default Next.js SVG assets
|-- src/
|   |-- app/
|   |   |-- (auth)/
|   |   |   |-- _components/
|   |   |   |   |-- AuthField.tsx
|   |   |   |   `-- AuthShell.tsx
|   |   |   |-- login/page.tsx
|   |   |   `-- register/page.tsx
|   |   |-- (course)/courses/[slug]/
|   |   |   |-- _components/
|   |   |   |   |-- AboutCourse.tsx
|   |   |   |   |-- CourseDetailShell.tsx
|   |   |   |   |-- CourseIcons.tsx
|   |   |   |   |-- CourseIntro.tsx
|   |   |   |   |-- CoursePreview.tsx
|   |   |   |   |-- CourseTabs.tsx
|   |   |   |   |-- EnrollmentSidebar.tsx
|   |   |   |   |-- LessonsCourse.tsx
|   |   |   |   `-- ReviewsCourse.tsx
|   |   |   |-- _data/course-detail.ts
|   |   |   |-- lessons/page.tsx
|   |   |   |-- reviews/page.tsx
|   |   |   |-- layout.tsx
|   |   |   `-- page.tsx
|   |   |-- (creator)/creators/[slug]/
|   |   |   |-- _components/CreatorProfile.tsx
|   |   |   |-- _data/creator.ts
|   |   |   `-- page.tsx
|   |   |-- (main)/
|   |   |   |-- _components/
|   |   |   |   |-- ClientReview.tsx
|   |   |   |   |-- Clients.tsx
|   |   |   |   |-- CreateCourse.tsx
|   |   |   |   |-- DiscoverPassion.tsx
|   |   |   |   |-- ExploreLearning.tsx
|   |   |   |   |-- Hero.tsx
|   |   |   |   `-- ProfessionalPath.tsx
|   |   |   |-- layout.tsx
|   |   |   `-- page.tsx
|   |   |-- (search)/
|   |   |   |-- courses/
|   |   |   |   |-- _components/
|   |   |   |   |   |-- CourseSearchPage.tsx
|   |   |   |   |   |-- SearchControls.tsx
|   |   |   |   |   |-- SearchCourseCard.tsx
|   |   |   |   |   |-- SearchHero.tsx
|   |   |   |   |   `-- SearchPagination.tsx
|   |   |   |   |-- _data/courses.ts
|   |   |   |   `-- page.tsx
|   |   |   `-- layout.tsx
|   |   |-- fonts/
|   |   |   |-- clash-display-600.woff2
|   |   |   |-- poppins-600.woff2
|   |   |   |-- poppins-700.woff2
|   |   |   |-- satoshi-400.woff2
|   |   |   |-- satoshi-500.woff2
|   |   |   `-- satoshi-700.woff2
|   |   |-- favicon.ico
|   |   |-- fonts.ts
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   `-- not-found.tsx
|   |-- components/layout/
|   |   |-- Footer.tsx
|   |   |-- FooterNewsletterForm.tsx
|   |   |-- Navbar.tsx
|   |   `-- index.ts
|   |-- constants/index.ts
|   |-- hooks/index.ts
|   |-- lib/utils.ts
|   `-- types/index.ts
|-- AGENTS.md
|-- CLAUDE.md
|-- eslint.config.mjs
|-- next.config.ts
|-- package.json
|-- package-lock.json
|-- postcss.config.mjs
|-- tsconfig.json
`-- README.md
```

`src/hooks`, `src/lib`, and `src/types` are currently reserved for future shared hooks, utilities, and domain types.


## Architecture

ByteSpace uses the Next.js App Router with route groups to organize related areas without adding group names to public URLs.

### Routes

| URL | Source | Purpose |
| --- | --- | --- |
| `/` | `src/app/(main)/page.tsx` | Main marketing and course-discovery page |
| `/courses` | `src/app/(search)/courses/page.tsx` | Searchable and filterable course catalog |
| `/courses/[slug]` | `src/app/(course)/courses/[slug]/page.tsx` | Course overview |
| `/courses/[slug]/lessons` | `src/app/(course)/courses/[slug]/lessons/page.tsx` | Course lesson information |
| `/courses/[slug]/reviews` | `src/app/(course)/courses/[slug]/reviews/page.tsx` | Course reviews and rating filters |
| `/creators/[slug]` | `src/app/(creator)/creators/[slug]/page.tsx` | Creator profile and course collection |
| `/login` | `src/app/(auth)/login/page.tsx` | Sign-in page |
| `/register` | `src/app/(auth)/register/page.tsx` | Account registration page |
| Unknown routes | `src/app/not-found.tsx` | Custom 404 page |

Folders wrapped in parentheses are route groups and do not appear in the URL. Folders beginning with an underscore contain private components or data and are not routes.

### Layout organization

- `src/app/layout.tsx` is the root layout. It loads global styles, applies Satoshi as the default font, and defines the default metadata.
- `src/app/(main)/layout.tsx` adds the default footer to the homepage.
- `src/app/(search)/layout.tsx` adds the search-style footer to the course catalog.
- `src/app/(course)/courses/[slug]/layout.tsx` reads the dynamic slug and wraps all course tabs with the shared course-detail shell.
- Authentication routes use `AuthShell` and intentionally do not render the main navigation or footer.
- The creator page owns its navbar and footer because the profile and its controls are composed inside one interactive screen.

### Component organization

Shared site-level components are stored in `src/components/layout`:

- `Navbar.tsx` provides default, search, and course-detail variants plus the mobile menu.
- `Footer.tsx` provides matching default, search, and detail variants.
- `FooterNewsletterForm.tsx` manages the newsletter form interaction.

Route-specific components are colocated with their pages inside `_components` folders. Static content and mock records are colocated inside `_data` folders.

The homepage is assembled from independent sections in `src/app/(main)/_components`, including the hero, client marquee, course discovery, learning paths, professional path, creator call to action, and community reviews.

Course catalog components are shared with the creator page where appropriate. `SearchControls` and `SearchCourseCard` are used by both screens to keep filtering controls and course presentation consistent.

### Server and Client Components

Components remain React Server Components unless they require browser-side behavior.

Client Components are used for:

- Mobile navigation state.
- Newsletter form feedback.
- The animated client marquee.
- Homepage category filtering.
- Course searching, filtering, sorting, and pagination.
- Active course-tab detection.
- Course gallery image viewing.
- Review filtering.
- Creator follow state and creator course filters.

This separation keeps static page structure server-rendered while limiting browser JavaScript to interactive areas.

### Data structure

The current project uses typed local demonstration data:

- `src/constants/index.ts` centralizes hero artwork, decorations, and avatars.
- `DiscoverPassion.tsx` contains homepage course and category data.
- `src/app/(search)/courses/_data/courses.ts` contains the generated search catalog.
- `src/app/(course)/courses/[slug]/_data/course-detail.ts` contains course descriptions, lessons, reviews, and enrollment information.
- `src/app/(creator)/creators/[slug]/_data/creator.ts` contains creator profile data.

Static data uses TypeScript literal inference, read-only properties, `as const`, and `satisfies` where appropriate. The `@/*` import alias maps to `src/*`.

The current data is local and does not require a database, CMS, API client, or environment variables.

### Styling

Components are styled with Tailwind CSS utilities directly in TSX. `src/app/globals.css` contains the Tailwind import, shared color variables, and reusable responsive container classes.

The main brand colors are:

- Blue: `#003BE2`
- Lime: `#D4FB20`
- Primary dark text: `#242528`
- Soft surface: `#F5F5F6`
- Border gray: `#CED0D3`

The interface uses responsive grids, viewport-relative sizing, height-aware `clamp()` values, local image assets, visible keyboard-focus states, and isolated overflow containers for decorative artwork.

Clash Display is used for the ByteSpace wordmark, Poppins for major headings, and Satoshi for body and interface text. All fonts are stored locally under `src/app/fonts` and loaded through `next/font/local`.

## Getting started

### Prerequisites

- Node.js 20.9.0 or newer
- npm

### Install dependencies

From the project root, run:

```bash
npm install
```

To install the exact versions stored in `package-lock.json`, use:

```bash
npm ci
```

### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

### Check code quality

```bash
npm run lint
```

### Create a production build

```bash
npm run build
```

The build command compiles the application and validates TypeScript.

### Start the production server

Run this after creating a production build:

```bash
npm run start
```

No environment variables are required for the current local-data implementation.
