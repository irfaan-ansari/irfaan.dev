import { RESUME } from "./resume";

export type Skill = (typeof RESUME.technicalSkills)[number];
export type Project = (typeof RESUME.projects)[number];
export type Resume = (typeof RESUME.experiences)[number];

export type BlogData = {
  title: string;
  summary: string;
  publishedAt: string;
  tags: string[];
  featured?: boolean;
  readTime?: string;
  thumbnail?: string;
};

export type BlogCard = {
  url: string;
  data: BlogData;
};

export type BlogThumbnail = {
  src: string;
  w: number;
  h: number;
  alt: string;
  loading?: "lazy" | "eager";
  className?: string;
};

export type RateLimitEntry = {
  count: number;
  resetTime: number;
};

export interface CounterData {
  created_at: string;
  description: string;
  down_count: number;
  id: number;
  name: string;
  slug: string;
  team_id: number;
  up_count: number;
  updated_at: string;
  user_id: number;
  workspace_id: number;
  workspace_slug: string;
}
