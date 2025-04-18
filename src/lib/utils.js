import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const HeroIcons = [
  "/Group 13.svg",
  "/Group 12.svg",
  "/Group 14.svg",
  "/Group 15.svg",
  "/Group 16.svg",
  "/Group 17.svg",
];

export const UniqueSectionIcons = [
  "Group 28.svg",
  "Group 29.svg",
  "Group 30.svg",
  "Shape Copy.svg",
];

export const StepsInfo = [
  {
    img: "Group 6.svg",
    des: "Sign up & personalize your map",
    color: "#f8872c",
  },
  {
    img: "Group 7.svg",
    des: "Add places and explore locations",
    color: "#1966c0",
  },
  {
    img: "Group 8.svg",
    des: "Create or join activities with others",
    color: "#2a8d42",
  },
  {
    img: "Group 9.svg",
    des: "Chat & engage with the community",
    color: "#57504c",
  },
];

export const TestimonalsItems = [
  "/testimonals-1.jpeg",
  "/testimonal-2.jpeg",
  "/testimonal-3.jpeg",
];

export const FAQItems = [
  "How is Ambyt different from Google Maps?",
  "Is Ambyt free to use?",
  "How do I invite friends to an event?",
  "Can I set places as private?",
  "Will Ambyt recommend places based on my activity?",
];
