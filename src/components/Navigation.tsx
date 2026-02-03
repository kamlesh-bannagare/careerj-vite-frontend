import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Briefcase, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import NotificationsDropdown from "@/components/NotificationsDropdown";
export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4" ref={menuRef}>
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Briefcase className="w-6 h-6 text-primary" />
            <span>CareerJ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/jobs" className="text-sm font-medium hover:text-primary transition-colors">Find Jobs</Link>
            <Link to="/projects" className="text-sm font-medium hover:text-primary transition-colors">Live Projects</Link>
            {/* <Link to="/companies" className="text-sm font-medium hover:text-primary transition-colors">Companies</Link> */}
            <Link to="/mentors" className="text-sm font-medium hover:text-primary transition-colors">Mentors</Link>
            <Link to="/resources" className="text-sm font-medium hover:text-primary transition-colors">Resources</Link>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a 
              href="https://www.buymeacoffee.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all"
            >
              <Coffee className="w-4 h-4" />
              <span className="hidden lg:inline">Buy us a Coffee</span>
            </a>
            <NotificationsDropdown />
            <ThemeToggle />
            <Link to="/login"><Button variant="ghost">Log In</Button></Link>
            <Link to="/signup"><Button>Get Started</Button></Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <NotificationsDropdown />
            <ThemeToggle />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/jobs" className="block text-sm font-medium hover:text-primary transition-colors">Find Jobs</Link>
            <Link to="/projects" className="block text-sm font-medium hover:text-primary transition-colors">Live Projects</Link>
            {/* <Link to="/companies" className="block text-sm font-medium hover:text-primary transition-colors">Companies</Link> */}
            <Link to="/mentors" className="block text-sm font-medium hover:text-primary transition-colors">Mentors</Link>
            <Link to="/resources" className="block text-sm font-medium hover:text-primary transition-colors">Resources</Link>

            <div className="flex flex-col gap-2 pt-4">
              <a 
                href="https://www.buymeacoffee.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all"
              >
                <Coffee className="w-4 h-4" />
                Buy us a Coffee
              </a>
              <Link to="/login"><Button variant="ghost" className="w-full">Log In</Button></Link>
              <Link to="/signup"><Button className="w-full">Get Started</Button></Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
