/**
 * =============================================================================
 * EDUCATION DATA - Academic History & Certifications
 * =============================================================================
 *
 * Auto-populated from Roberto Jr. Bricia Bayos's resume.
 */

export interface Education {
  id: string;
  degree: string;
  field: string;
  school: string;
  schoolLogo?: string;
  location: string;
  startYear: number;
  endYear: number;
  gpa?: string;
  honors?: string[];
  relevantCourses?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerLogo?: string;
  date: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    school: 'Camarines Sur Polytechnic Colleges',
    schoolLogo: '/logos/cspc.png', // Add logo to /public/logos/ if available
    location: 'San Miguel, Nabua, Camarines Sur',
    startYear: 2018, // Approximate — adjust to your actual years
    endYear: 2023, // Approximate — adjust to your actual graduation year
    gpa: undefined, // Add if you want to display
    honors: undefined, // Add if applicable
    relevantCourses: [
      'Programming Fundamentals',
      'Data Structures and Algorithms',
      'Web Development',
      'Database Management',
      'Software Engineering',
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'Unlocking Insights: The Synergy of Machine Learning, IoT, and Big Data',
    issuer: 'Department of Information and Communications Technology (DICT)',
    date: '2024-06',
    credentialUrl: 'https://dict.gov.ph',
  },
  {
    id: 'cert-2',
    name: '12th Bicol Youth Congress in Information Technology (BYCIT)',
    issuer: 'DICT Bicol Region',
    date: '2024-05',
    credentialUrl: 'https://dict.gov.ph',
  },
  {
    id: 'cert-3',
    name: '11th Bicol Youth Congress in Information Technology (BYCIT)',
    issuer: 'DICT Bicol Region',
    date: '2023-05',
    credentialUrl: 'https://dict.gov.ph',
  },
  {
    id: 'cert-4',
    name: 'Game Industry Seminar (Naga City - DICT Roadshow)',
    issuer: 'Department of Information and Communications Technology (DICT)',
    date: '2022-10',
    credentialUrl: 'https://dict.gov.ph',
  },
];

export const awards: Award[] = [
  // Add any awards or honors if applicable
  // Example:
  // {
  //   id: 'award-1',
  //   title: 'Dean\'s List',
  //   issuer: 'CSPC',
  //   date: '2022',
  //   description: 'Academic excellence recognition',
  // },
];

export function getLatestEducation(): Education | undefined {
  return education.length > 0 ? education[0] : undefined;
}

export function getActiveCertifications(): Certification[] {
  const now = new Date();
  return certifications.filter((cert) => {
    if (!cert.expirationDate) return true;
    const expDate = new Date(cert.expirationDate + '-01');
    return expDate > now;
  });
}

export function getExpiredCertifications(): Certification[] {
  const now = new Date();
  return certifications.filter((cert) => {
    if (!cert.expirationDate) return false;
    const expDate = new Date(cert.expirationDate + '-01');
    return expDate <= now;
  });
}

export function hasCertifications(): boolean {
  return certifications.length > 0;
}

export function hasAwards(): boolean {
  return awards.length > 0;
}

export function formatEducation(edu: Education): string {
  return `${edu.degree} in ${edu.field} from ${edu.school} (${edu.endYear})`;
}

export function isCertificationExpiringSoon(cert: Certification): boolean {
  if (!cert.expirationDate) return false;
  const now = new Date();
  const expDate = new Date(cert.expirationDate + '-01');
  const sixMonthsFromNow = new Date(now.getTime() + 180 * 24 * 60 * 60 * 1000);
  return expDate <= sixMonthsFromNow && expDate > now;
}
