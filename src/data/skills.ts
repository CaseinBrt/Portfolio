/**
 * =============================================================================
 * SKILLS DATA - Technical & Professional Skills
 * =============================================================================
 *
 * Auto-populated from Roberto Jr. Bricia Bayos's resume.
 */

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
  yearsOfExperience?: number;
}

export interface Language {
  name: string;
  level: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic';
}

export const skillCategories: string[] = [
  'Languages',
  'Frameworks & Libraries',
  'Tools & Platforms',
  'Game Development',
  'Office & Design',
];

export const skills: Skill[] = [
  // Languages
  {
    name: 'HTML',
    level: 70,
    category: 'Languages',
    yearsOfExperience: 2,
  },
  {
    name: 'CSS',
    level: 65,
    category: 'Languages',
    yearsOfExperience: 2,
  },
  {
    name: 'JavaScript',
    level: 65,
    category: 'Languages',
    yearsOfExperience: 2,
  },
  {
    name: 'Python',
    level: 60,
    category: 'Languages',
    yearsOfExperience: 2,
  },
  {
    name: 'Java',
    level: 55,
    category: 'Languages',
    yearsOfExperience: 1,
  },
  {
    name: 'C#',
    level: 60,
    category: 'Languages',
    yearsOfExperience: 2,
  },

  // Frameworks & Libraries
  {
    name: 'Flask',
    level: 55,
    category: 'Frameworks & Libraries',
    yearsOfExperience: 1,
  },

  // Tools & Platforms
  {
    name: 'Windows',
    level: 85,
    category: 'Tools & Platforms',
    yearsOfExperience: 5,
  },
  {
    name: 'Microsoft Office Suite',
    level: 75,
    category: 'Tools & Platforms',
    yearsOfExperience: 4,
  },
  {
    name: 'Figma',
    level: 60,
    category: 'Tools & Platforms',
    yearsOfExperience: 1,
  },
  {
    name: 'Unity Hub',
    level: 65,
    category: 'Tools & Platforms',
    yearsOfExperience: 2,
  },

  // Game Development (specialized category)
  {
    name: 'Unity',
    level: 65,
    category: 'Game Development',
    yearsOfExperience: 2,
  },
  {
    name: '3D Game Development',
    level: 60,
    category: 'Game Development',
    yearsOfExperience: 2,
  },
  {
    name: 'C#',
    level: 60,
    category: 'Game Development',
    yearsOfExperience: 2,
  },

  // Office & Design
  {
    name: 'MS Word',
    level: 80,
    category: 'Office & Design',
    yearsOfExperience: 5,
  },
  {
    name: 'MS PowerPoint',
    level: 75,
    category: 'Office & Design',
    yearsOfExperience: 5,
  },
  {
    name: 'MS Excel',
    level: 70,
    category: 'Office & Design',
    yearsOfExperience: 5,
  },
  {
    name: 'MS Publisher',
    level: 60,
    category: 'Office & Design',
    yearsOfExperience: 3,
  },
  {
    name: 'Logo Design',
    level: 55,
    category: 'Office & Design',
    yearsOfExperience: 1,
  },
  {
    name: 'Business Card Design',
    level: 55,
    category: 'Office & Design',
    yearsOfExperience: 1,
  },
  {
    name: 'Mockup Design',
    level: 55,
    category: 'Office & Design',
    yearsOfExperience: 1,
  },
];

export const languages: Language[] = [
  { name: 'Filipino', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'Bikol', level: 'Native' },
];

export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

export function getTopSkills(count: number = 6): Skill[] {
  return [...skills].sort((a, b) => b.level - a.level).slice(0, count);
}

export function getUsedCategories(): string[] {
  const categories = new Set(skills.map((skill) => skill.category));
  return skillCategories.filter((cat) => categories.has(cat));
}

export function getSkillsGroupedByCategory(): Record<string, Skill[]> {
  const grouped: Record<string, Skill[]> = {};
  skillCategories.forEach((category) => {
    const categorySkills = getSkillsByCategory(category);
    if (categorySkills.length > 0) {
      grouped[category] = categorySkills;
    }
  });
  return grouped;
}

export function getAverageSkillLevel(): number {
  if (skills.length === 0) return 0;
  const total = skills.reduce((sum, skill) => sum + skill.level, 0);
  return Math.round(total / skills.length);
}

export function getSkillProficiencyLabel(level: number): string {
  if (level >= 90) return 'Expert';
  if (level >= 70) return 'Advanced';
  if (level >= 50) return 'Intermediate';
  if (level >= 30) return 'Basic';
  return 'Beginner';
}
