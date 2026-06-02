import {
  BadgeCheck,
  Blocks,
  Bot,
  BriefcaseBusiness,
  Building2,
  Cable,
  Code2,
  GitBranch,
  Globe,
  Mail,
  MapPinned,
  Plane,
  Rocket,
  Route,
  Send,
  Smartphone,
  Sparkles,
  Star,
  TestTube2,
  Workflow,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type LinkItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  accent: string;
  metric: string;
  links: LinkItem[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  icon: LucideIcon;
  highlights: string[];
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type LabItem = {
  title: string;
  icon: LucideIcon;
  description: string;
  previewType: "gif" | "video";
};

export const profile = {
  name: "Umar Anwaar",
  title: "Senior React Native Developer",
  subtitle:
    "6+ years building scalable mobile applications, realtime systems, GPS tracking solutions, booking platforms, and performance-focused user experiences.",
  email: "umar.anwaar.dev@gmail.com",
  githubUrl: "https://github.com/umaranwaar",
  linkedinUrl: "https://www.linkedin.com/in/umar-anwaar",
  resumeUrl: "/umar-anwaar-resume.pdf",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Lab", href: "#lab" },
  { label: "Contact", href: "#contact" },
];

export const heroLinks: LinkItem[] = [
  { label: "Download Resume", href: profile.resumeUrl, icon: Send },
  { label: "GitHub", href: profile.githubUrl, icon: GitBranch },
  { label: "LinkedIn", href: profile.linkedinUrl, icon: BriefcaseBusiness },
  { label: "Contact Me", href: "#contact", icon: Mail },
];

export const credibilityStats = [
  { label: "Mobile engineering", value: "6+ yrs" },
  { label: "Realtime products", value: "5+" },
  { label: "Core focus", value: "RN" },
];

export const aboutPoints = [
  {
    title: "Architecture that survives product growth",
    body: "I build React Native foundations around predictable state, modular feature boundaries, native-aware performance budgets, and clean release pipelines.",
    icon: Blocks,
  },
  {
    title: "Realtime and location-heavy systems",
    body: "Flight and hotel updates, event tracking, geofencing, waypoint operations, live messaging, Pusher, Supabase realtime, and Socket.io are recurring parts of my work.",
    icon: Cable,
  },
  {
    title: "Performance as product quality",
    body: "I refactor large codebases, reduce app size, remove slow UI paths, and tune interaction-heavy screens so mobile experiences feel stable under real usage.",
    icon: Zap,
  },
];

export const experiences: Experience[] = [
  {
    company: "DirectKSA",
    role: "Senior React Native Developer",
    period: "2023 - Present",
    icon: Plane,
    highlights: [
      "Built and improved flight booking flows with realtime flight status and booking updates.",
      "Contributed to hotel booking experiences across search, reservation, and post-booking states.",
      "Solely delivered an eSIM purchase and activation module for device onboarding.",
      "Integrated Pusher for realtime product updates and user-facing operational feedback.",
      "Led large-scale refactoring that reduced app size and improved runtime performance.",
    ],
  },
  {
    company: "Moov Events",
    role: "Lead Developer",
    period: "Lead Developer",
    icon: MapPinned,
    highlights: [
      "Led a realtime event-management platform for live participant monitoring and engagement.",
      "Implemented GPS tracking, geofencing, zone handling, waypoint management, and map-based workflows.",
      "Built Supabase realtime features for live operational state and WhatsApp-style messaging.",
      "Owned architecture decisions across mobile UX, realtime data flow, and event control surfaces.",
    ],
  },
  {
    company: "Maxenius",
    role: "React Native Developer",
    period: "Earlier role",
    icon: Building2,
    highlights: [
      "Built production mobile features using Redux Toolkit and maintainable TypeScript patterns.",
      "Improved CI/CD reliability with mobile release workflow support.",
      "Raised code quality through reviews, refactoring, and maintainability-focused implementation.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "DirectKSA Travel Platform",
    description:
      "Flight booking, hotel reservations, realtime updates, eSIM activation, and performance optimization.",
    tech: ["React Native", "Redux Toolkit", "Pusher", "Firebase"],
    accent: "from-cyan-400 via-blue-500 to-violet-500",
    metric: "Booking, realtime, and eSIM modules",
    links: [
      { label: "External", href: "https://directksa.com", icon: Globe },
      { label: "GitHub", href: profile.githubUrl, icon: GitBranch },
    ],
  },
  {
    title: "Moov Events",
    description:
      "Realtime event management platform with live tracking, geofencing, and messaging.",
    tech: ["React Native", "Supabase", "Maps", "Realtime"],
    accent: "from-emerald-300 via-teal-500 to-sky-500",
    metric: "Live GPS, zones, and messaging",
    links: [
      { label: "External", href: "#contact", icon: Globe },
      { label: "GitHub", href: profile.githubUrl, icon: GitBranch },
    ],
  },
  {
    title: "Totl Football Quiz",
    description:
      "Multiplayer football quiz game with realtime chat and lobby functionality.",
    tech: ["React Native", "Socket.io", "Node.js", "MongoDB"],
    accent: "from-amber-300 via-orange-500 to-rose-500",
    metric: "Multiplayer lobby and realtime chat",
    links: [
      { label: "External", href: "#contact", icon: Globe },
      { label: "GitHub", href: profile.githubUrl, icon: GitBranch },
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Smartphone,
    skills: ["React Native", "React", "TypeScript", "JavaScript"],
  },
  {
    title: "State Management",
    icon: Workflow,
    skills: ["Redux Toolkit", "Context API"],
  },
  {
    title: "Realtime",
    icon: Cable,
    skills: ["Pusher", "Supabase", "Socket.io", "Firebase"],
  },
  {
    title: "Mobile",
    icon: Route,
    skills: ["Maps", "Geofencing", "Push Notifications", "Deep Linking"],
  },
  {
    title: "DevOps",
    icon: Rocket,
    skills: ["Bitrise", "Codemagic", "CI/CD", "GitHub Actions"],
  },
  {
    title: "Testing",
    icon: TestTube2,
    skills: ["Jest", "Appium"],
  },
];

export const labItems: LabItem[] = [
  {
    title: "Swipe Cards",
    icon: Smartphone,
    previewType: "gif",
    description:
      "Card stacks with gesture thresholds, velocity-aware exits, and stateful undo paths.",
  },
  {
    title: "Animated Carousel",
    icon: Sparkles,
    previewType: "video",
    description:
      "Reanimated-style snapping, pagination, interpolation, and scroll-linked transforms.",
  },
  {
    title: "Bottom Sheet",
    icon: Blocks,
    previewType: "video",
    description:
      "Modal sheets with snap points, keyboard-safe layouts, and native-feeling drag physics.",
  },
  {
    title: "Shared Element Transitions",
    icon: BadgeCheck,
    previewType: "gif",
    description:
      "Route transitions that preserve visual continuity between list and detail views.",
  },
  {
    title: "Drag & Drop",
    icon: Bot,
    previewType: "video",
    description:
      "Sortable interfaces with collision handling, layout measurement, and visual feedback.",
  },
  {
    title: "Gesture-driven Interactions",
    icon: Code2,
    previewType: "gif",
    description:
      "Advanced gestures combining pan, tap, long press, haptics, and animated state machines.",
  },
];

export const contactLinks: LinkItem[] = [
  {
    label: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: profile.linkedinUrl,
    icon: BriefcaseBusiness,
  },
  {
    label: "GitHub",
    href: profile.githubUrl,
    icon: GitBranch,
  },
];

export const focusAreas = [
  "React Native architecture",
  "Reanimated interactions",
  "Realtime data systems",
  "GPS and maps",
  "Booking platforms",
  "Mobile performance",
  "Technical leadership",
  "Release workflows",
];

export const sectionKicker = {
  about: "Mobile systems, not brochureware",
  experience: "Where product pressure met engineering depth",
  projects: "Production-grade mobile work",
  lab: "Proof of interaction fluency",
  github: "Open-source signal",
  contact: "Available for senior mobile roles",
};

export const repoFallbacks = [
  {
    name: "react-native-mobile-architecture",
    description:
      "Reference patterns for scalable React Native modules, navigation, state, and release hygiene.",
    stars: 18,
    languages: ["TypeScript", "React Native"],
    url: profile.githubUrl,
  },
  {
    name: "realtime-tracking-playground",
    description:
      "GPS tracking, realtime messaging, map events, and Supabase/Pusher integration experiments.",
    stars: 12,
    languages: ["TypeScript", "Realtime"],
    url: profile.githubUrl,
  },
  {
    name: "animation-lab",
    description:
      "Gesture-driven mobile interaction concepts for cards, sheets, shared transitions, and carousels.",
    stars: 9,
    languages: ["React Native", "Reanimated"],
    url: profile.githubUrl,
  },
];

export const icons = {
  BriefcaseBusiness,
  Star,
};
