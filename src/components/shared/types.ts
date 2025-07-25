// ===========================
// SHARED TYPES
// ===========================

export interface Project {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  color: string;
  statusbarColor: string;
  type: string;
}

export interface TechCategory {
  title: string;
  icon: string;
  techs: string[];
}

export interface SectionProps {
  isActive: boolean;
}

export interface ProjectSectionProps extends SectionProps {
  projectNumber: number;
}
