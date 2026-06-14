export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  overview: string;
  description: string;
  role: string;
  liveUrl: string;
  stack: string[];
  outcome: string[];
  whatIDid: string[];
  deliverables: string[];
  coverImage: string;
  gallery: Array<{
    src: string;
    alt: string;
  }>;
};

export const projects: Project[] = [
  {
    slug: "findora",
    title: "Findora",
    year: "2025",
    category: "Fintech dashboard",
    summary:
      "A focused financial experience built around clarity, trust, and quick decision-making.",
    overview:
      "Findora was shaped to help people move from high-level discovery into deeper financial detail without losing clarity. The visual system uses restrained hierarchy, large imagery, and precise spacing so the interface feels premium and trustworthy.",
    description:
      "I designed the information structure, built the responsive landing and dashboard sections, and used motion to make the flows feel calmer and more premium.",
    role: "Product design and front-end development",
    liveUrl: "https://findora.example.com",
    stack: ["React", "GSAP", "Tailwind", "Responsive UI"],
    outcome: [
      "Created a clearer visual hierarchy for balances, transactions, and alerts.",
      "Designed motion that feels intentional instead of distracting.",
      "Kept the interface readable across mobile and desktop breakpoints.",
    ],
    whatIDid: [
      "Built a clear information hierarchy for market snapshots and feature modules.",
      "Created motion rules that guide attention without overwhelming the content.",
      "Structured the layout for strong performance on desktop and mobile.",
    ],
    deliverables: [
      "Visual system",
      "Landing page",
      "Responsive layout",
      "Motion design",
    ],
    coverImage: "/images/findora.png",
    gallery: [
      {
        src: "/images/findora.png",
        alt: "Findora project cover",
      },
      {
        src: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
        alt: "Financial dashboard mood image",
      },
      {
        src: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
        alt: "Interface and planning workspace",
      },
      {
        src: "https://images.pexels.com/photos/4386367/pexels-photo-4386367.jpeg",
        alt: "Editorial business scene",
      },
    ],
  },
  {
    slug: "vida",
    title: "Vida",
    year: "2025",
    category: "Wellness platform",
    summary:
      "A calm digital product for habits, wellness content, and everyday planning.",
    overview:
      "Vida uses softer contrast, spacious composition, and tactile surfaces to create a serene online experience. The page structure encourages slower scanning and gives each section enough room to breathe.",
    description:
      "I focused on the editorial feel of the product, refined the spacing system, and added motion that guides the user through the experience without interrupting it.",
    role: "UI direction and front-end implementation",
    liveUrl: "https://vida.example.com",
    stack: ["React", "GSAP", "Tailwind", "Accessibility"],
    outcome: [
      "Built a softer visual system that supports a wellness-focused brand.",
      "Used animation to reveal content in a layered, elegant rhythm.",
      "Balanced imagery and copy so the interface stays airy.",
    ],
    whatIDid: [
      "Designed the storytelling flow from discovery to booking.",
      "Added subtle motion to make transitions feel polished and intentional.",
      "Kept the interface accessible and balanced across themes.",
    ],
    deliverables: [
      "Concept design",
      "Hero section",
      "Gallery composition",
      "Responsive build",
    ],
    coverImage: "/images/vida.png",
    gallery: [
      {
        src: "/images/vida.png",
        alt: "Vida project cover",
      },
      {
        src: "https://images.pexels.com/photos/374019/pexels-photo-374019.jpeg",
        alt: "Calm lifestyle scene",
      },
      {
        src: "https://images.pexels.com/photos/3763878/pexels-photo-3763878.jpeg",
        alt: "Wellness and care details",
      },
      {
        src: "https://images.pexels.com/photos/3761517/pexels-photo-3761517.jpeg",
        alt: "Minimal product styling image",
      },
    ],
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    year: "2026",
    category: "Personal website",
    summary:
      "A personal portfolio shaped to feel cinematic, structured, and easy to explore.",
    overview:
      "This portfolio concept was crafted to feel editorial while still being practical. The result is a compact case-study format that balances visual drama with straightforward navigation and a memorable opening experience.",
    description:
      "I built the site as a single experience with strong typography, smooth transitions, and a consistent light and dark mode across sections.",
    role: "Full front-end build",
    liveUrl: "https://ashkan-kohandel.example.com",
    stack: ["React", "GSAP", "Lenis", "Tailwind"],
    outcome: [
      "Turned the portfolio into a guided story instead of a static list of work.",
      "Kept the interactions smooth while staying mobile-friendly.",
      "Aligned the design language across hero, projects, and contact sections.",
    ],
    whatIDid: [
      "Built the hero, project browser, and contact flow as one cohesive system.",
      "Used GSAP animation to create a more cinematic sense of arrival.",
      "Balanced dark and light states so the whole site stays consistent.",
    ],
    deliverables: [
      "Brand direction",
      "Case study page",
      "Motion system",
      "Dark mode",
    ],
    coverImage: "/images/portfolio.png",
    gallery: [
      {
        src: "/images/portfolio.png",
        alt: "Portfolio project cover",
      },
      {
        src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
        alt: "Creative desk and laptop",
      },
      {
        src: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
        alt: "Editorial portrait mood image",
      },
      {
        src: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
        alt: "Minimal workspace composition",
      },
    ],
  },
  {
    slug: "findora",
    title: "Findora",
    year: "2025",
    category: "Fintech dashboard",
    summary:
      "A focused financial experience built around clarity, trust, and quick decision-making.",
    overview:
      "Findora was shaped to help people move from high-level discovery into deeper financial detail without losing clarity. The visual system uses restrained hierarchy, large imagery, and precise spacing so the interface feels premium and trustworthy.",
    description:
      "I designed the information structure, built the responsive landing and dashboard sections, and used motion to make the flows feel calmer and more premium.",
    role: "Product design and front-end development",
    liveUrl: "https://findora.example.com",
    stack: ["React", "GSAP", "Tailwind", "Responsive UI"],
    outcome: [
      "Created a clearer visual hierarchy for balances, transactions, and alerts.",
      "Designed motion that feels intentional instead of distracting.",
      "Kept the interface readable across mobile and desktop breakpoints.",
    ],
    whatIDid: [
      "Built a clear information hierarchy for market snapshots and feature modules.",
      "Created motion rules that guide attention without overwhelming the content.",
      "Structured the layout for strong performance on desktop and mobile.",
    ],
    deliverables: [
      "Visual system",
      "Landing page",
      "Responsive layout",
      "Motion design",
    ],
    coverImage: "/images/findora.png",
    gallery: [
      {
        src: "/images/findora.png",
        alt: "Findora project cover",
      },
      {
        src: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
        alt: "Financial dashboard mood image",
      },
      {
        src: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
        alt: "Interface and planning workspace",
      },
      {
        src: "https://images.pexels.com/photos/4386367/pexels-photo-4386367.jpeg",
        alt: "Editorial business scene",
      },
    ],
  },
  {
    slug: "findora",
    title: "Findora",
    year: "2025",
    category: "Fintech dashboard",
    summary:
      "A focused financial experience built around clarity, trust, and quick decision-making.",
    overview:
      "Findora was shaped to help people move from high-level discovery into deeper financial detail without losing clarity. The visual system uses restrained hierarchy, large imagery, and precise spacing so the interface feels premium and trustworthy.",
    description:
      "I designed the information structure, built the responsive landing and dashboard sections, and used motion to make the flows feel calmer and more premium.",
    role: "Product design and front-end development",
    liveUrl: "https://findora.example.com",
    stack: ["React", "GSAP", "Tailwind", "Responsive UI"],
    outcome: [
      "Created a clearer visual hierarchy for balances, transactions, and alerts.",
      "Designed motion that feels intentional instead of distracting.",
      "Kept the interface readable across mobile and desktop breakpoints.",
    ],
    whatIDid: [
      "Built a clear information hierarchy for market snapshots and feature modules.",
      "Created motion rules that guide attention without overwhelming the content.",
      "Structured the layout for strong performance on desktop and mobile.",
    ],
    deliverables: [
      "Visual system",
      "Landing page",
      "Responsive layout",
      "Motion design",
    ],
    coverImage: "/images/findora.png",
    gallery: [
      {
        src: "/images/findora.png",
        alt: "Findora project cover",
      },
      {
        src: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
        alt: "Financial dashboard mood image",
      },
      {
        src: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
        alt: "Interface and planning workspace",
      },
      {
        src: "https://images.pexels.com/photos/4386367/pexels-photo-4386367.jpeg",
        alt: "Editorial business scene",
      },
    ],
  },
  {
    slug: "findora",
    title: "Findora",
    year: "2025",
    category: "Fintech dashboard",
    summary:
      "A focused financial experience built around clarity, trust, and quick decision-making.",
    overview:
      "Findora was shaped to help people move from high-level discovery into deeper financial detail without losing clarity. The visual system uses restrained hierarchy, large imagery, and precise spacing so the interface feels premium and trustworthy.",
    description:
      "I designed the information structure, built the responsive landing and dashboard sections, and used motion to make the flows feel calmer and more premium.",
    role: "Product design and front-end development",
    liveUrl: "https://findora.example.com",
    stack: ["React", "GSAP", "Tailwind", "Responsive UI"],
    outcome: [
      "Created a clearer visual hierarchy for balances, transactions, and alerts.",
      "Designed motion that feels intentional instead of distracting.",
      "Kept the interface readable across mobile and desktop breakpoints.",
    ],
    whatIDid: [
      "Built a clear information hierarchy for market snapshots and feature modules.",
      "Created motion rules that guide attention without overwhelming the content.",
      "Structured the layout for strong performance on desktop and mobile.",
    ],
    deliverables: [
      "Visual system",
      "Landing page",
      "Responsive layout",
      "Motion design",
    ],
    coverImage: "/images/findora.png",
    gallery: [
      {
        src: "/images/findora.png",
        alt: "Findora project cover",
      },
      {
        src: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
        alt: "Financial dashboard mood image",
      },
      {
        src: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
        alt: "Interface and planning workspace",
      },
      {
        src: "https://images.pexels.com/photos/4386367/pexels-photo-4386367.jpeg",
        alt: "Editorial business scene",
      },
    ],
  },
  {
    slug: "findora",
    title: "Findora",
    year: "2025",
    category: "Fintech dashboard",
    summary:
      "A focused financial experience built around clarity, trust, and quick decision-making.",
    overview:
      "Findora was shaped to help people move from high-level discovery into deeper financial detail without losing clarity. The visual system uses restrained hierarchy, large imagery, and precise spacing so the interface feels premium and trustworthy.",
    description:
      "I designed the information structure, built the responsive landing and dashboard sections, and used motion to make the flows feel calmer and more premium.",
    role: "Product design and front-end development",
    liveUrl: "https://findora.example.com",
    stack: ["React", "GSAP", "Tailwind", "Responsive UI"],
    outcome: [
      "Created a clearer visual hierarchy for balances, transactions, and alerts.",
      "Designed motion that feels intentional instead of distracting.",
      "Kept the interface readable across mobile and desktop breakpoints.",
    ],
    whatIDid: [
      "Built a clear information hierarchy for market snapshots and feature modules.",
      "Created motion rules that guide attention without overwhelming the content.",
      "Structured the layout for strong performance on desktop and mobile.",
    ],
    deliverables: [
      "Visual system",
      "Landing page",
      "Responsive layout",
      "Motion design",
    ],
    coverImage: "/images/findora.png",
    gallery: [
      {
        src: "/images/findora.png",
        alt: "Findora project cover",
      },
      {
        src: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
        alt: "Financial dashboard mood image",
      },
      {
        src: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
        alt: "Interface and planning workspace",
      },
      {
        src: "https://images.pexels.com/photos/4386367/pexels-photo-4386367.jpeg",
        alt: "Editorial business scene",
      },
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
