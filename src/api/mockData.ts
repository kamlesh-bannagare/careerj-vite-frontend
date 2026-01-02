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
    description: "We're looking for an experienced Frontend Developer to join our team and build amazing user experiences.",
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
    description: "Join our fast-growing startup as a Full Stack Engineer working on cutting-edge products.",
    requirements: ["Node.js", "React", "PostgreSQL", "AWS"],
    tags: ["Remote", "Startup", "Flexible"],
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
    postedDate: "2024-01-14"
  },
  {
    id: "3",
    title: "Backend Developer",
    company: "DataFlow Inc",
    location: "New York, NY",
    salary: "$130k - $170k",
    type: "Full-time",
    experience: "4+ years",
    description: "Build scalable backend systems that power millions of transactions daily.",
    requirements: ["Python", "Django", "Redis", "Docker"],
    tags: ["Hybrid", "Finance", "Stock Options"],
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop",
    postedDate: "2024-01-13"
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudNative",
    location: "Austin, TX",
    salary: "$125k - $165k",
    type: "Full-time",
    experience: "3+ years",
    description: "Manage and optimize our cloud infrastructure and CI/CD pipelines.",
    requirements: ["Kubernetes", "Terraform", "AWS", "Jenkins"],
    tags: ["Remote", "Healthcare", "401k"],
    logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop",
    postedDate: "2024-01-12"
  },
  {
    id: "5",
    title: "Machine Learning Engineer",
    company: "AI Labs",
    location: "Seattle, WA",
    salary: "$150k - $200k",
    type: "Full-time",
    experience: "3+ years",
    description: "Develop and deploy machine learning models at scale for our AI products.",
    requirements: ["Python", "TensorFlow", "PyTorch", "MLOps"],
    tags: ["Onsite", "Research", "Patent Bonus"],
    logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop",
    postedDate: "2024-01-11"
  },
  {
    id: "6",
    title: "Product Manager",
    company: "ProductFirst",
    location: "Boston, MA",
    salary: "$130k - $160k",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead product strategy and work with cross-functional teams to ship great products.",
    requirements: ["Product Strategy", "Analytics", "Agile", "User Research"],
    tags: ["Hybrid", "Equity", "Leadership"],
    logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=100&h=100&fit=crop",
    postedDate: "2024-01-10"
  },
  {
    id: "7",
    title: "UX Designer",
    company: "DesignCraft",
    location: "Los Angeles, CA",
    salary: "$90k - $130k",
    type: "Full-time",
    experience: "3+ years",
    description: "Create beautiful and intuitive user experiences for our digital products.",
    requirements: ["Figma", "User Research", "Prototyping", "Design Systems"],
    tags: ["Remote", "Creative", "Unlimited PTO"],
    logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=100&fit=crop",
    postedDate: "2024-01-09"
  },
  {
    id: "8",
    title: "iOS Developer",
    company: "MobileFirst",
    location: "Chicago, IL",
    salary: "$115k - $155k",
    type: "Full-time",
    experience: "4+ years",
    description: "Build and maintain our flagship iOS application used by millions.",
    requirements: ["Swift", "SwiftUI", "Core Data", "CI/CD"],
    tags: ["Hybrid", "Healthcare", "Learning Budget"],
    logo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100&h=100&fit=crop",
    postedDate: "2024-01-08"
  },
  {
    id: "9",
    title: "Data Engineer",
    company: "DataPipeline Co",
    location: "Denver, CO",
    salary: "$120k - $160k",
    type: "Full-time",
    experience: "3+ years",
    description: "Design and build data pipelines that power our analytics platform.",
    requirements: ["Spark", "Airflow", "SQL", "Python"],
    tags: ["Remote", "Startup", "Stock Options"],
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
    postedDate: "2024-01-07"
  },
  {
    id: "10",
    title: "Security Engineer",
    company: "SecureNet",
    location: "Washington, DC",
    salary: "$140k - $180k",
    type: "Full-time",
    experience: "5+ years",
    description: "Protect our systems and data from security threats and vulnerabilities.",
    requirements: ["Penetration Testing", "SIEM", "Cloud Security", "Compliance"],
    tags: ["Onsite", "Clearance", "Government"],
    logo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=100&h=100&fit=crop",
    postedDate: "2024-01-06"
  },
  {
    id: "11",
    title: "React Native Developer",
    company: "CrossPlatform Inc",
    location: "Remote",
    salary: "$100k - $140k",
    type: "Full-time",
    experience: "2+ years",
    description: "Build cross-platform mobile apps that delight users on iOS and Android.",
    requirements: ["React Native", "TypeScript", "Redux", "Native Modules"],
    tags: ["Remote", "Startup", "Flexible Hours"],
    logo: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop",
    postedDate: "2024-01-05"
  },
  {
    id: "12",
    title: "QA Engineer",
    company: "QualityFirst",
    location: "Portland, OR",
    salary: "$85k - $115k",
    type: "Full-time",
    experience: "2+ years",
    description: "Ensure our products meet the highest quality standards through rigorous testing.",
    requirements: ["Selenium", "Cypress", "API Testing", "Test Automation"],
    tags: ["Hybrid", "Healthcare", "401k Match"],
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop",
    postedDate: "2024-01-04"
  }
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
