/**
 * =============================================================================
 * PROFILE DATA - Personal Information
 * =============================================================================
 *
 * Auto-populated from Roberto Jr. Bricia Bayos's resume.
 */

export interface Profile {
  name: string;
  title: string;
  photo: string;
  email: string;
  phone?: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  summary: string;
  highlights: string[];
}

export const profile: Profile = {
  name: 'Roberto Jr. Bricia Bayos',
  title: 'Computer Science Graduate',
  photo: '', // Set to '/images/profile.jpg' after adding a photo
  email: 'bertobayos98@gmail.com',
  phone: '+63 920 415 0967',
  location: 'San Isidro, Baao, Camarines Sur, Philippines',
  website: 'https://github.com/CaseinBrt',
  github: 'https://github.com/CaseinBrt',
  linkedin: undefined,
  twitter: undefined,
  summary: `Computer Science graduate with a strong foundation in technical problem-solving and digital tools. 
    Offers a flexible skillset spanning web development, data management, and Microsoft Office proficiency. 
    Committed to contributing to team success through dedicated effort and applied technical knowledge.`,
  highlights: [
    'Bachelor of Science in Computer Science graduate',
    'Experience with full-stack web development (HTML, CSS, JavaScript, Flask)',
    'Game development proficiency using Unity and C#',
    'Strong problem-solving and systems troubleshooting skills',
  ],
};

export function getProfileSocialLinks() {
  const links = [];
  if (profile.github) links.push({ platform: 'github', url: profile.github });
  if (profile.linkedin) links.push({ platform: 'linkedin', url: profile.linkedin });
  if (profile.twitter) links.push({ platform: 'twitter', url: profile.twitter });
  if (profile.website) links.push({ platform: 'website', url: profile.website });
  return links;
}

export function hasProfilePhoto(): boolean {
  return Boolean(profile.photo && profile.photo.length > 0);
}

export function getProfileInitials(): string {
  return profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
