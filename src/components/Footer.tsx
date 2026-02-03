import { Link } from "react-router-dom";
import { Coffee, Briefcase, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <h4 className="font-bold mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/jobs" className="hover:text-primary transition-colors">Browse Jobs</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">My Dashboard</Link></li>
              <li><Link to="/mock-interview" className="hover:text-primary transition-colors">Mock Interviews</Link></li>
              <li><Link to="/resume-enhancer" className="hover:text-primary transition-colors">Resume Tools</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">For Companies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/company-dashboard" className="hover:text-primary transition-colors">Post Jobs</Link></li>
              <li><Link to="/company-dashboard" className="hover:text-primary transition-colors">Find Candidates</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/mentors" className="hover:text-primary transition-colors">Find Mentors</Link></li>
              <li><Link to="/analytics" className="hover:text-primary transition-colors">Career Analytics</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Buy Me a Coffee Section - Mobile Optimized */}
        <div className="py-6 my-6 border-y border-border">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span className="text-sm">We keep CareerJ free for everyone</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </div>
            <a 
              href="https://www.buymeacoffee.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 text-base font-semibold rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <Coffee className="w-5 h-5" />
              Support Us - Buy a Coffee ☕
            </a>
            <p className="text-xs text-muted-foreground max-w-md">
              Your support helps us maintain this platform free for job seekers, companies, and mentors alike.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="font-bold">CareerJ</span>
          </div>
          <p className="text-sm text-muted-foreground">&copy; 2024 CareerJ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
