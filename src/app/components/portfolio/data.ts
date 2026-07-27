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
  modalDescription: string;
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
    modalDescription:
      "TROVE Restaurant is a 1,817 sft hospitality interior project located in Mirpur, Dhaka. The brief called for a full furniture layout that could comfortably seat 68 covers while maintaining a relaxed, premium dining atmosphere.\n\nThe plan is organised around a central circulation spine that separates the main dining floor from the service back-of-house. Seating is zoned into three distinct areas — intimate two-person booths along the perimeter walls for private dining, larger group tables at the centre for social gatherings, and a flexible general seating zone near the entry that can be reconfigured for events.\n\nA dedicated coffee corner and chiller display are positioned near the entrance to encourage impulse orders and create a welcoming first impression. The preparation area is tucked efficiently behind the service counter, keeping kitchen activity out of the guest sightline. Washrooms are placed at the rear with a clear, discreet path from all seating zones.\n\nThe entry sequence was designed as a branded moment — a transition from street to interior that sets the tone before a guest reaches their table. Every furniture placement decision was made with service flow in mind, ensuring staff can move between zones without crossing guest circulation paths.",
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
    modalDescription:
      "Lumina International Manpower Ltd. required a complete office fit-out layout for their 6,356 sft corporate floor in Dhaka. The challenge was to accommodate a high headcount of workstations while preserving a professional, open atmosphere that reflects the company’s international positioning.\n\nThe floor plate is organised with a welcoming reception and waiting lounge at the entry point, immediately communicating the brand’s credibility to visiting clients. Beyond reception, open workstation clusters are arranged in a grid formation that maximises desk count without creating a cramped feel — each cluster is separated by low partitions to allow natural light to penetrate deep into the floor.\n\nPrivate cabin zones for senior management are positioned along the window wall to take advantage of natural light and views, while the meeting room is centrally located for easy access from all departments. A dedicated accounts zone is separated from the general open floor to allow focused work with minimal interruption.\n\nCirculation routes were carefully planned to avoid dead ends and ensure every desk has a clear, direct path to the exit, meeting room, and washroom facilities. The 11′-0″ ceiling height was leveraged to keep the space feeling airy despite the high occupancy density.",
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
    modalDescription:
      "The Nikkon Group head-office project involved designing a 3,435 sft executive floor layout that needed to balance prestige, functionality, and day-to-day operational efficiency for a multi-director corporate structure.\n\nThe layout is anchored by a central lobby and lift core, which acts as the organisational heart of the floor. From the lobby, guests are directed to a formal reception and waiting lounge designed to project authority and professionalism before any meeting begins.\n\nThree executive suites — for the CEO, Chairman, and Managing Director — are positioned along the most private wing of the floor, each with sufficient space for a personal workstation, a small meeting table, and storage. Their placement ensures senior leadership can work without interruption while remaining accessible via a short, direct corridor from the central lobby.\n\nA dedicated conference room sits adjacent to the executive wing, allowing high-level meetings to transition seamlessly without passing through the general work area. The accounts department and open workstation zones occupy the more active, connected part of the floor, with clear sightlines to reception.\n\nA smoking lounge and open terrace were incorporated as amenity spaces, positioned at the far end of the floor to keep them separate from the primary work environment while still being conveniently accessible.",
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
    modalDescription:
      "The HN Yousuf Residence project involved producing a comprehensive furniture layout plan for a private apartment in Bashundhara, one of Dhaka’s most established residential neighbourhoods. The goal was to translate the client’s lifestyle requirements into a resolved, buildable drawing that a contractor could work directly from.\n\nThe layout addresses the full apartment — master bedroom, secondary bedrooms, living room, dining area, kitchen, and service zones — with each room planned individually and then tested against the whole to ensure adjacencies and circulation routes feel natural and unforced.\n\nThe master bedroom was given priority in terms of space allocation and furniture arrangement, with a layout that accommodates a king bed, wardrobe, dressing area, and side tables without the room feeling cluttered. Secondary bedrooms were planned with flexibility in mind, allowing for either a study-bedroom or a guest room configuration.\n\nThe living and dining zones were treated as a connected social space, with furniture positioned to encourage conversation while maintaining a clear visual separation between the two functions. The kitchen layout was resolved around the work triangle principle, keeping the cooking, washing, and storage zones within efficient reach of each other.\n\nAll drawings were produced in AutoCAD to a standard suitable for direct handover to the client and their construction team.",
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
