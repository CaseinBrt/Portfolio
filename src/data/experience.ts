/**
 * =============================================================================
 * EXPERIENCE DATA - Work History
 * =============================================================================
 *
 * Auto-populated from Roberto Jr. Bricia Bayos's resume.
 */

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    id: 'exp-1',
    title: 'Research Assistant / Systems Support',
    company: 'AI Research Center for Community Development (AIRCoDe)',
    companyLogo: '/logos/cspc-aircode.png', // Add logo if available
    location: 'Camarines Sur Polytechnic Colleges, Nabua, Camarines Sur',
    type: 'part-time', // Adjust based on actual employment type
    startDate: '2022-01', // Approximate start date - adjust as needed
    current: true, // Set to false if this position has ended
    description:
      'Managed research center systems and provided technical support, including website development, game development, and event logistics coordination.',
    achievements: [
      'Developed interactive games for educational and outreach events',
      'Troubleshot hardware and software issues to ensure smooth operations',
      'Helped prepare necessary documents',
    ],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'Unity',
      'C#',
      'Microsoft Office Suite',
    ],
  },
];

export function getTotalYearsOfExperience(): number {
  if (experience.length === 0) return 0;
  const sortedByDate = [...experience].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );
  const earliestStart = new Date(sortedByDate[0].startDate);
  const latestEnd = sortedByDate.some((exp) => exp.current)
    ? new Date()
    : new Date(
        Math.max(
          ...sortedByDate.map((exp) =>
            exp.endDate ? new Date(exp.endDate).getTime() : 0
          )
        )
      );
  const years = Math.floor(
    (latestEnd.getTime() - earliestStart.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );
  return years;
}

export function getCurrentPosition(): Experience | undefined {
  return experience.find((exp) => exp.current);
}

export function getAllTechnologies(): string[] {
  const techSet = new Set<string>();
  experience.forEach((exp) => {
    exp.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

export function formatExperienceDate(dateString: string): string {
  const date = new Date(dateString + '-01');
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function getExperienceDuration(exp: Experience): string {
  const start = new Date(exp.startDate);
  const end = exp.current ? new Date() : new Date(exp.endDate + '-01');
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  if (years === 0) {
    return `${remainingMonths} mo`;
  } else if (remainingMonths === 0) {
    return `${years} yr`;
  } else {
    return `${years} yr ${remainingMonths} mo`;
  }
}
