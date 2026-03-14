export type NavItem = {
  href: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
  note?: string;
};

export type FocusArea = {
  title: string;
  description: string;
  detail: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  company: string;
  description: string;
};

export type Principle = {
  title: string;
  description: string;
};

export type ContactChannel = {
  type: string;
  label: string;
  value: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  background: string;
  responsibility: string;
  tools: string[];
  problem: string;
  result: string;
  highlights: string[];
  duration: string;
  coverMetric: string;
  palette: {
    from: string;
    to: string;
    accent: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

export type Capability = {
  title: string;
  summary: string;
  details: string[];
  level: 1 | 2 | 3 | 4;
  label: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ToolItem = {
  name: string;
  level: string;
  note: string;
};

export type ToolGroup = {
  title: string;
  description: string;
  tools: ToolItem[];
};
