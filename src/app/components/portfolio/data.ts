import troveRestaurant from "../../../imports/Screenshot_2026-07-27_212357.png";
import luminaOffice from "../../../imports/Screenshot_2026-07-27_212321.png";
import hnYousufResidence from "../../../imports/Screenshot_2026-07-27_212243.png";
import nikkonGroup from "../../../imports/image-2.png";

export const PROFILE = {
  name: "Imam Hossain",
  title: "Architect / Interior Designer",
  location: "Dapa Idrakpur, Fatulla — Narayanganj, Bangladesh",
  email: "imamhossain48118@gmail.com",
  phone: "+88 01823196154",
};

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#craft" },
  { label: "Contact", href: "#contact" },
];

export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string | null;
  facts: { label: string; value: string }[];
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "trove-restaurant",
    index: "01",
    title: "TROVE Restaurant",
    category: "Hospitality Interior · Mirpur, Dhaka",
    year: "2026",
    description:
      "Furniture layout for a 68-seat restaurant in Mirpur. The plan organises booth, group and general dining zones around a clear circulation spine, with a dedicated preparation area, coffee corner, chillers, washrooms and a branded entry sequence — all resolved for smooth service flow.",
    image: troveRestaurant,
    facts: [
      { label: "Area", value: "1,817 sft" },
      { label: "Ceiling", value: "11′-0″" },
      { label: "Seating", value: "68" },
    ],
    tags: ["Space Planning", "Furniture Layout", "AutoCAD", "Hospitality"],
  },
  {
    id: "lumina-international",
    index: "02",
    title: "Lumina International Manpower Ltd.",
    category: "Corporate Office · Dhaka",
    year: "2026",
    description:
      "Office fit-out layout for a manpower agency. Open workstation clusters are balanced with reception, meeting and cabin zones, keeping daylight and circulation clear across the floor plate.",
    image: luminaOffice,
    facts: [
      { label: "Area", value: "6,356 sft" },
      { label: "Ceiling", value: "11′-0″" },
      { label: "Beam", value: "9′-6″" },
    ],
    tags: ["Workplace", "Space Planning", "Furniture Layout", "AutoCAD"],
  },
  {
    id: "nikkon-group",
    index: "03",
    title: "Nikkon Group",
    category: "Corporate Office · Dhaka",
    year: "2026",
    description:
      "A 3,435 sft head-office layout with CEO, Chairman and MD rooms, a conference room, accounts and workstation zones, reception and waiting lounge, plus a smoking lounge and open terrace — planned around a central lobby and lift core.",
    image: nikkonGroup,
    facts: [
      { label: "Area", value: "3,435 sft" },
      { label: "Ceiling", value: "10′-0″" },
      { label: "Beam", value: "9′-0″" },
    ],
    tags: ["Workplace", "Space Planning", "Furniture Layout", "AutoCAD"],
  },
  {
    id: "hn-yousuf-residence",
    index: "04",
    title: "HN Yousuf Residence",
    category: "Residential · Bashundhara, Dhaka",
    year: "2026",
    description:
      "A detailed furniture layout plan for a residential apartment at Bashundhara — resolving room adjacencies, circulation and furniture placement for bedrooms, living, dining and service areas into a clear, buildable drawing.",
    image: hnYousufResidence,
    facts: [
      { label: "Ceiling", value: "9′-2″" },
      { label: "Beam", value: "8′-0″" },
      { label: "Tool", value: "AutoCAD" },
    ],
    tags: ["Residential", "Layout Plan", "AutoCAD"],
  },
];

export const CRAFT = [
  {
    heading: "Software",
    items: ["AutoCAD", "SketchUp", "Canva", "MS Office"],
  },
  {
    heading: "Design",
    items: ["Floor plans", "Furniture layout", "Detail drawing", "3D modelling"],
  },
  {
    heading: "On site",
    items: ["Site supervision", "Working drawings", "Client coordination", "Material selection"],
  },
];

export const EDUCATION = [
  {
    school: "Dhaka Polytechnic Institute",
    detail: "Diploma in Engineering — Architecture Technology",
    meta: "CGPA 3.61 / 4.00 · 2025",
  },
  {
    school: "Dapa Adarsha High School",
    detail: "SSC — Science",
    meta: "GPA 4.83 / 5.00 · 2020",
  },
];

export const EXPERIENCE = [
  {
    role: "Junior Architect",
    company: "Sara Interior",
    meta: "Interior design & 3D visualization",
  },
  {
    role: "Site Engineer",
    company: "In Art Studio",
    meta: "Site supervision & working drawings",
  },
];

export const CAPABILITIES = [
  "Interior Design", "Space Planning", "Floor Plans",
  "AutoCAD", "SketchUp", "Detail Drawing", "3D Modelling",
];
