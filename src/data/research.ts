export type ResearchItem = {
  id: string;
  title: string;
  authors: string[];
  publication: string;
  year: string;
  abstract: string;
  url?: string;
  doi?: string;
  tags: string[];
};

export const research: ResearchItem[] = [
  {
    id: "research-1",
    title:
      "Heterogeneity in the Preferences of Potential Users of Automated Transit Network (ATN)",
    authors: [
      "Ardeshir Kohandel Shirazi",
      "Ingmar Andreasson",
      "Farshid Afshar",
      "Ashkan Kohandel Shirazi",
      "Hamidreza Mokhtarian",
    ],
    publication: "Journal of Advanced Transportation",
    year: "2023",
    abstract:
      "A quantitative study examining user preferences toward Automated Transit Networks (ATN) using stated-choice surveys and discrete-choice modelling. The research explores preference heterogeneity to better understand factors influencing the adoption of automated transportation systems.",
    url: "https://doi.org/10.1155/2023/3226726",
    doi: "10.1155/2023/3226726",
    tags: [
      "Transportation",
      "Discrete Choice Modelling",
      "User Preferences",
      "Smart Mobility",
    ],
  },
];
