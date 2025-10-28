// Mock data for the application

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  tags: string[];
  logo: string;
  postedDate: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  expertise: string[];
  rating: number;
  sessions: number;
  avatar: string;
  bio: string;
}

export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  techStack: string[];
  duration: string;
  difficulty: string;
  logo: string;
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: "$120k - $160k",
    type: "Full-time",
    experience: "5+ years",
    description: "We're looking for an experienced Frontend Developer to join our team...",
    requirements: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    tags: ["Remote", "Healthcare", "Equity"],
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop",
    postedDate: "2024-01-15"
  },
  {
    id: "2",
    title: "Full Stack Engineer",
    company: "StartupHub",
    location: "Remote",
    salary: "$100k - $140k",
    type: "Full-time",
    experience: "3+ years",
    description: "Join our fast-growing startup as a Full Stack Engineer...",
    requirements: ["Node.js", "React", "PostgreSQL", "AWS"],
    tags: ["Remote", "Startup", "Flexible"],
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    postedDate: "2024-01-14"
  },
  // Add more jobs...
];

export const mockMentors: Mentor[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Senior Engineering Manager",
    company: "Google",
    expertise: ["Frontend Development", "System Design", "Career Growth"],
    rating: 4.9,
    sessions: 150,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    bio: "10+ years of experience in tech, passionate about helping developers grow."
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Principal Engineer",
    company: "Meta",
    expertise: ["Backend Development", "Microservices", "Cloud Architecture"],
    rating: 4.8,
    sessions: 120,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    bio: "Specializing in scalable backend systems and mentoring junior developers."
  },
];

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform Redesign",
    company: "ShopNow Inc",
    description: "Redesign the checkout flow and improve conversion rates.",
    techStack: ["React", "Node.js", "Stripe", "MongoDB"],
    duration: "8 weeks",
    difficulty: "Intermediate",
    logo: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=100&h=100&fit=crop"
  },
  {
    id: "2",
    title: "Real-time Analytics Dashboard",
    company: "DataViz Pro",
    description: "Build a dashboard for visualizing real-time business metrics.",
    techStack: ["React", "D3.js", "WebSocket", "Express"],
    duration: "6 weeks",
    difficulty: "Advanced",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop"
  },
];

export const mockInterviewQuestions = [
  {
    role: "Frontend Developer",
    questions: [
      "Explain the Virtual DOM and how React uses it.",
      "What are React Hooks and why were they introduced?",
      "How would you optimize a slow React application?",
      "Explain the difference between controlled and uncontrolled components.",
    ]
  },
  {
    role: "Backend Developer",
    questions: [
      "Explain RESTful API design principles.",
      "How would you design a URL shortener service?",
      "What is database indexing and when should you use it?",
      "Explain the CAP theorem in distributed systems.",
    ]
  },
];

export const fetchJobs = async (): Promise<Job[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockJobs), 500);
  });
};

export const fetchMentors = async (): Promise<Mentor[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockMentors), 500);
  });
};

export const fetchProjects = async (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProjects), 500);
  });
};
