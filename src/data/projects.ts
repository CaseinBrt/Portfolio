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
  teamMembers?: Array<{
    name: string;
    role: string;
    github?: string;
  }>;
}

export const projectCategories: string[] = [
  'All',
  'Web Development',
  'Game Development',
  'Research',
  'Inventory Management',
];

export const projects: Project[] = [
  // ---------------------------------------------------------------------------
  // PROJECT 1 - DeblurGAN Web Application
  // ---------------------------------------------------------------------------
  {
    id: 'proj-1',
    slug: 'image-deblurring-analysis',
    title: 'Comparative Analysis of Image Deblurring',
    description:
      'A Flask web application for deblurring motion-blurred images using the DeblurGAN algorithm, featuring a user-friendly interface for selecting specific image regions or entire images.',
    longDescription:
      `This project implements a DeblurGAN-based image deblurring system with a user-friendly Flask web interface. 
      Users can upload motion-blurred images and choose to deblur either a selected region or the entire image. 
      The model was trained on the GOPRO dataset (2,103 image pairs) using a conditional GAN architecture. 
      Key features include region-specific deblurring, real-time Visdom training monitoring, and support for various image resolutions. 
      Built with Python, Flask, HTML/CSS/JavaScript, using PyTorch for the deep learning model and Conda for environment management.`,
    thumbnail: '/projects/deblur-thumb.jpg',
    images: [
      '/projects/deblur-1.jpg',
      '/projects/deblur-2.jpg',
    ],
    technologies: ['Python', 'Flask', 'PyTorch', 'DeblurGAN', 'HTML', 'CSS', 'JavaScript', 'Conda', 'Visdom'],
    category: 'Research',
    role: 'Project Lead & Developer',
    duration: '3 months',
    liveUrl: 'https://deblur-gan-web-flask.vercel.app',
    githubUrl: 'https://github.com/CaseinBrt/DeblurGAN-WebFlask',
    featured: true,
    highlights: [
      'Implemented DeblurGAN algorithm for motion blur removal',
      'Built Flask web app with region-selection or full-image deblurring',
      'Trained model on 2,103 image pairs from GOPRO dataset',
      'Added low-level image processing with selective sharpening',
      'Supported multiple image resolutions and batch processing',
      'Collaborated with team members on model training and web integration',
    ],
    teamMembers: [
      { name: 'Roberto Jr. Bricia Bayos', role: 'Project Lead & Developer', github: 'https://github.com/CaseinBrt' },
      { name: 'Johnben Augustus A. Nadal', role: 'ML Engineer', github: 'https://github.com/urboyjaybee' },
      { name: 'Randolf F. Brigola', role: 'Research & Data', github: 'https://github.com/randolf99' },
    ],
  },

  // ---------------------------------------------------------------------------
  // PROJECT 2 - Echo of the Undead (3D Horror Game)
  // ---------------------------------------------------------------------------
  {
    id: 'proj-2',
    slug: 'echo-of-the-undead',
    title: 'Echo of the Undead',
    description:
      'A 3D survival horror game where the player must navigate and escape from a haunted forest using wits and resource management.',
    longDescription:
      `"Echo of the Undead" is a 3D survival horror game built from the ground up using Unity and C#. 
      The player must explore a mysterious forest, solve puzzles, avoid enemies, and find an exit. 
      The game emphasizes atmosphere, tension, and strategic decision-making. 
      Developed as a showcase of game development skills including Unity physics, 3D animation, AI, and UI/UX design.`,
    thumbnail: '/projects/echo-thumb.jpeg',
    images: [],
    technologies: ['Unity', 'C#', '3D Game Development', '3D Modeling', 'Animation'],
    category: 'Game Development',
    role: 'Game Developer',
    duration: '4 months',
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
    highlights: [
      'Full game development cycle from concept to playable demo',
      'Implemented player movement, enemy AI, and game mechanics in C#',
      'Created atmospheric visuals and sound design for horror theme',
      'Designed puzzle elements and progression systems',
    ],
  },

  // ---------------------------------------------------------------------------
  // PROJECT 3 - System Inventory Management (Latest)
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
