import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Jobs from "./pages/Jobs";
import Dashboard from "./pages/Dashboard";
import MockInterview from "./pages/MockInterview";
import ResumeEnhancer from "./pages/ResumeEnhancer";
import SkillAnalyzer from "./pages/SkillAnalyzer";
import Mentors from "./pages/Mentors";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import Applications from "./pages/Applications";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import JobGuarantee from "./pages/JobGuarantee";
import BlogPage from "./pages/Blog";
import Analytics from "./pages/Analytics";
import PricingPage from "./pages/Pricing";
import CompanyDashboard from "./pages/company-dashboard/page";
import CompanyAllCandidates from "./pages/company-dashboard/candidates/page";
import CompanyAnalytics from "./pages/company-dashboard/analytics/page";
import CompanyReports from "./pages/company-dashboard/reports/page";
import CompaniesPage from "./pages/Companies";
import ResourcesPage from "./pages/Resources";
import PrivacyPage from "./pages/Privacy";
import TermsPage from "./pages/Terms";
import BottomNavigation from "./components/BottomNavigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mock-interview" element={<MockInterview />} />
            <Route path="/resume-enhancer" element={<ResumeEnhancer />} />
            <Route path="/skill-analyzer" element={<SkillAnalyzer />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/job-guarantee" element={<JobGuarantee />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/company-dashboard" element={<CompanyDashboard />} />
            <Route path="/company-dashboard/candidates" element={<CompanyAllCandidates />} />
            <Route path="/company-dashboard/analytics" element={<CompanyAnalytics />} />
            <Route path="/company-dashboard/reports" element={<CompanyReports />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            {/* Keep this at the bottom */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNavigation />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
