import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

import { Briefcase, MessageSquare, FolderKanban, Users, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BottomNavigation() {
  const location = useLocation()
const pathname = location.pathname


  const navItems = [
    {
      name: "Find Jobs",
      href: "/jobs",
      icon: Briefcase,
    },
    {
      name: "Interview",
      href: "/mock-interview",
      icon: MessageSquare,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: FolderKanban,
    },
    {
      name: "Mentors",
      href: "/mentors",
      icon: Users,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: User,
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 md:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive && "fill-current")} />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
