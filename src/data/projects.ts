/**
 * =============================================================================
 * PROJECTS DATA - Portfolio Projects
 * =============================================================================
 *
 * Auto-populated from Roberto Jr. Bricia Bayos's resume.
 */

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  category: string;
  role: string;
  duration: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
}

export const projectCategories: string[] = [
  'All',
  'Web Development',
  'Game Development',
  'Research',
  'Inventory Management',
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    slug: 'image-deblurring-analysis',
    title: 'Comparative Analysis of Image Deblurring',
    description:
      'A Flask web application for deblurring motion-blurred images using the DeblurGAN algorithm, featuring a user-friendly interface for selecting specific image regions or entire images.',
    longDescription:
      `This project focuses on developing a user-friendly web application using Flask (Python) that implements the DeblurGAN algorithm to deblur motion-blurred images. 
      Users can choose to sharpen either a selected region of an image or the entire image, providing flexibility based on their needs. 
      The project includes a trained dataset of blurred and sharp images used for model training and evaluation. 
      Built with Python, HTML, CSS, JavaScript, and Flask, with a Conda environment for dependency management.`,
    thumbnail: '/projects/deblur-thumb.jpg', // Add image to /public/projects/
    images: [
      '/projects/deblur-1.jpg',
      '/projects/deblur-2.jpg',
    ],
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'DeblurGAN'],
    category: 'Research',
    role: 'Lead Developer',
    duration: '3 months',
    // liveUrl: undefined, // Add if deployed
    // githubUrl: undefined, // Add if published
    featured: true,
    highlights: [
      'Implemented DeblurGAN algorithm for image deblurring',
      'Built intuitive web UI for region-specific or full-image deblurring',
      'Trained and validated model using dataset of blurred/sharp image pairs',
      'Applied machine learning concepts to a real-world image processing problem',
    ],
  },
  {
    id: 'proj-2',
    slug: 'echo-of-the-undead',
    title: 'Echo of the Undead',
    description:
      'A survival horror game where the player must navigate and escape from a haunted forest using wits and resource management.',
    longDescription:
      `"Echo of the Undead" is a 3D survival horror game built from the ground up using Unity and C#. 
      The player must explore a mysterious forest, solve puzzles, avoid enemies, and find an exit. 
      The game emphasizes atmosphere, tension, and strategic decision-making. 
      Developed as a showcase of game development skills including Unity physics, 3D animation, AI, and UI/UX design.`,
    thumbnail: '/projects/echo-thumb.jpg', // Add image to /public/projects/
    images: [
      '/projects/echo-1.jpg',
      '/projects/echo-2.jpg',
    ],
    technologies: ['Unity', 'C#', '3D Game Development', '3D Modeling', 'Animation'],
    category: 'Game Development',
    role: 'Game Developer',
    duration: '4 months',
    // liveUrl: undefined, // Add if published to itch.io or similar
    // githubUrl: undefined, // Add if open-sourced
    featured: true,
    highlights: [
      'Full game development cycle from concept to playable demo',
      'Implemented player movement, enemy AI, and game mechanics in C#',
      'Created atmospheric visuals and sound design for horror theme',
      'Designed puzzle elements and progression systems',
    ],
  },

  // ---------------------------------------------------------------------------
  // LATEST PROJECT - System Inventory Management
  // ---------------------------------------------------------------------------
  {
    id: 'proj-3',
    slug: 'system-inventory',
    title: 'System Inventory Management',
    description:
      'A full-stack inventory management system for tracking stock across multiple branches, with real-time dashboards, low-stock alerts, and transaction logging.',
    longDescription:
      `A comprehensive inventory management web application built with Next.js, TypeScript, and SQLite. 
      The system supports multi-branch stock tracking, real-time dashboard statistics, low-stock alerts, 
      and complete transaction history. Users can add/edit products, manage stock levels per branch, 
      deduct stock with automatic logging, and export data to CSV. The app features a mobile-first 
      dark-themed UI with bottom navigation, optimized for daily operations on the shop floor.`,
    thumbnail: '/projects/inventory-thumb.jpg',
    images: [
      '/projects/inventory-1.jpg',
      '/projects/inventory-2.jpg',
    ],
    technologies: ['Next.js', 'TypeScript', 'React', 'SQLite', 'Drizzle ORM', 'Tailwind CSS'],
    category: 'Inventory Management',
    role: 'Full-Stack Developer',
    duration: '2 months',
    liveUrl: 'https://system-inventory-brown.vercel.app',
    githubUrl: 'https://github.com/CaseinBrt/System_Inventory',
    featured: true,
    highlights: [
      'Multi-branch stock tracking across 3 locations (Eane 1, 2, 3)',
      'Real-time dashboard with total products, stock counts, low-stock alerts',
      'Low-stock threshold monitoring with visual alerts',
      'Transaction logging for every stock deduction',
      'CSV export for data portability',
      'Mobile-first design with bottom navigation for field use',
      'User authentication with login/registration system',
    ],
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
}

export function getAllProjectTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

export function getProjectCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = { All: projects.length };
  projectCategories.slice(1).forEach((category) => {
    counts[category] = projects.filter((p) => p.category === category).length;
  });
  return counts;
}

export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(lowerQuery))
  );
}

export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];
  return projects
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
