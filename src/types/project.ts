export interface ProjectMetrics {
  [key: string]: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  metrics: ProjectMetrics;
}