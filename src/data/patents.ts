export type Patent = {
  id: string;
  title: string;
  inventors: string[];
  patentNumber: string;
  filingDate: string;
  grantDate?: string;
  status: "pending" | "granted" | "published";
  description: string;
  abstract: string;
  tags: string[];
  url?: string;
};

export const patents: Patent[] = [
  {
    id: "patent-1",
    title: "Crosswalk Light Warning Device",
    inventors: ["Ashkan Kohandel Shirazi", "Ardeshir Kohandel Shirazi"],
    patentNumber: "99069",
    filingDate: "2019",
    grantDate: "2019",
    status: "granted",
    description:
      "A patented pedestrian safety system designed to improve communication between pedestrians and drivers at crosswalks using integrated visual LED signaling and audio guidance.",
    abstract:
      "This invention enhances pedestrian safety by combining visual and auditory warning mechanisms at crosswalks. The system provides clear communication between pedestrians and approaching drivers, improving visibility, awareness, and overall road safety.",
    tags: [
      "Pedestrian Safety",
      "Transportation",
      "LED Signaling",
      "Road Safety",
      "Innovation",
    ],
    url: "#",
  },
];
