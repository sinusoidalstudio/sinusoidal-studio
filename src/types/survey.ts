
export interface ServiceSurveyValues {
  email: string;
  projectType: string;
  services: string[];
  budget: string;
}

export const SERVICES = [
  { id: "branding", label: "Branding & Identity" },
  { id: "web-design", label: "Web Design" },
  { id: "app-ui", label: "App UI" },
  { id: "motion", label: "Motion Graphics" },
  { id: "3d", label: "3D Animation" },
  { id: "game-dev", label: "Game Development" },
  { id: "interactive", label: "Interactive Experiences" },
  { id: "product-design", label: "Product Design/Prototype" }
] as const;
