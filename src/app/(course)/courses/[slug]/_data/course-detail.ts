export const COURSE_DETAIL = {
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  creator: "purepearl studio",
  level: "Intermediate",
  rating: "4.8",
  reviews: 172,
  students: 199,
  price: 25,
  progress: 55,
} as const;

export const SIDEBAR_LESSONS = [
  { number: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
  { number: "02", title: "Design Principles for Impacts", duration: "21 mins" },
  { number: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
] as const;

export const COURSE_FEATURES = [
  "Learning Resources",
  "Quality Lesson Videos",
  "Certificate of Completion",
  "Private Consultation",
] as const;

export const DESCRIPTION_PARAGRAPHS = [
  "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, ‘Build Digital Assets: A Comprehensive Guide.’ This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
  "In the initial modules, you’ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
  "As you progress through the course, you’ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
] as const;

export const GALLERY_IMAGES = [
  {
    src: "/assets/discover-passion/1.jpg",
    alt: "Hand sketching an interface wireframe on paper",
    position: "center 72%",
  },
  {
    src: "/assets/discover-passion/1.jpg",
    alt: "Laptop displaying interface designs",
    position: "center 16%",
  },
  {
    src: "/assets/discover-passion/4.jpg",
    alt: "Desktop interface design workspace with a plant",
    position: "center",
  },
  {
    src: "/assets/discover-passion/5.jpg",
    alt: "Digital interface examples on a dark display",
    position: "center",
  },
] as const;

export const KEY_POINTS = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
] as const;

export const MODULES = [
  {
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like ‘Understanding Digital Elements’ and ‘Navigating Design Software Tools.’ Dive into the essential foundations of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    description:
      "Immerse yourself in the principles that drive impactful designs with lessons such as ‘Color Theory in Digital Design’ and ‘Typography Essentials.’ Elevate your visual communication skills.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand ‘Design Thinking in Digital Creation’ and delve into ‘User Experience (UX) Essentials.’ Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like ‘Creating Interactive Presentations’ and ‘Integrating Multimedia Elements.’ Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with ‘Effective Presentation Techniques’ and embrace collaboration with ‘Peer Critique and Collaboration.’ Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for ‘Mobile Platforms’ and optimize for ‘Social Media.’ Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
] as const;

export type Review = {
  id: number;
  name: string;
  role: string;
  age: string;
  rating: number;
  avatar: string;
  quote: string;
};

export const REVIEWS: readonly Review[] = [
  {
    id: 1,
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    age: "a year ago",
    rating: 5,
    avatar: "/assets/hero-assets/avatar-1.jpg",
    quote:
      "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    id: 2,
    name: "Albert Flores",
    role: "UI/UX Designer",
    age: "a year ago",
    rating: 5,
    avatar: "/assets/hero-assets/avatar-2.jpg",
    quote:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I’ve learned!",
  },
  {
    id: 3,
    name: "Cody Fisher",
    role: "UI/UX Designer",
    age: "a year ago",
    rating: 5,
    avatar: "/assets/hero-assets/avatar-3.jpg",
    quote:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    age: "a year ago",
    rating: 5,
    avatar: "/assets/hero-assets/avatar-4.jpg",
    quote:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
] as const;

export const RATING_BREAKDOWN = [
  { stars: 5, count: 720, width: "100%" },
  { stars: 4, count: 120, width: "40%" },
  { stars: 3, count: 21, width: "12%" },
  { stars: 2, count: 12, width: "6%" },
  { stars: 1, count: 16, width: "8%" },
] as const;
