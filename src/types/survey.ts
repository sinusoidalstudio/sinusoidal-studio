export interface ServiceSurveyValues {
  email: string;
  projectType: string;
  services: string[];
  budget: string;
}

export const SERVICES = [
  { id: "branding", label: "Branding & Identity" },
  { id: "web-design", label: "Web Design" },
  { id: "motion", label: "Motion Graphics" },
  { id: "3d", label: "3D Animation" },
  { id: "interactive", label: "Interactive Experiences" }
] as const;