import { useState, useRef, useEffect } from "react";
import { Bell, Briefcase, FileCheck, Calendar, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

export interface Notification {
  id: string;
  type: "job_match" | "application_update" | "interview_invite";
  title: string;
  message: string;
  time: string;
  read: boolean;
  link?: string;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "job_match",
    title: "New Job Match",
    message: "Senior React Developer at Google matches your profile",
    time: "2 min ago",
    read: false,
    link: "/jobs",
  },
  {
    id: "2",
    type: "application_update",
    title: "Application Update",
    message: "Your application for Frontend Lead at Microsoft moved to interview stage",
    time: "1 hour ago",
    read: false,
    link: "/applications",
  },
  {
    id: "3",
    type: "interview_invite",
    title: "Interview Scheduled",
    message: "Technical interview with Amazon on Jan 15, 2026 at 10:00 AM",
    time: "3 hours ago",
    read: false,
    link: "/applications",
  },
  {
    id: "4",
    type: "job_match",
    title: "New Job Match",
    message: "Full Stack Engineer at Stripe - 95% match",
    time: "Yesterday",
    read: true,
    link: "/jobs",
  },
  {
    id: "5",
    type: "application_update",
    title: "Application Viewed",
    message: "Meta has viewed your application for Software Engineer",
    time: "2 days ago",
    read: true,
    link: "/applications",
  },
];

const getNotificationIcon = (type: Notification["type"]) => {
  switch (type) {
    case "job_match":
      return <Briefcase className="w-4 h-4 text-primary" />;
    case "application_update":
      return <FileCheck className="w-4 h-4 text-emerald-500" />;
    case "interview_invite":
      return <Calendar className="w-4 h-4 text-amber-500" />;
  }
};

const getNotificationBg = (type: Notification["type"], read: boolean) => {
  if (read) return "bg-muted/50";
  switch (type) {
    case "job_match":
      return "bg-primary/5 border-l-2 border-l-primary";
    case "application_update":
      return "bg-emerald-500/5 border-l-2 border-l-emerald-500";
    case "interview_invite":
      return "bg-amber-500/5 border-l-2 border-l-amber-500";
  }
};

export default function NotificationsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Notifications"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground text-xs font-bold rounded-full flex items-center justify-center"
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </motion.span>
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-80 sm:w-96 bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">Notifications</h3>
                {unreadCount > 0 && (
                  <Badge variant="secondary" className="text-xs">
                    {unreadCount} new
                  </Badge>
                )}
              </div>
              {unreadCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs h-7"
                  onClick={markAllAsRead}
                >
                  <Check className="w-3 h-3 mr-1" />
                  Mark all read
                </Button>
              )}
            </div>

            {/* Notifications List */}
            <div className="max-h-[400px] overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">
                  <Bell className="w-10 h-10 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">No notifications yet</p>
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`p-4 hover:bg-muted/50 transition-colors cursor-pointer group ${getNotificationBg(
                        notification.type,
                        notification.read
                      )}`}
                      onClick={() => {
                        markAsRead(notification.id);
                        if (notification.link) {
                          window.location.href = notification.link;
                        }
                      }}
                    >
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-background flex items-center justify-center border border-border">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <p className={`text-sm font-medium ${notification.read ? "text-muted-foreground" : "text-foreground"}`}>
                              {notification.title}
                            </p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeNotification(notification.id);
                              }}
                              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-muted rounded"
                              aria-label="Remove notification"
                            >
                              <X className="w-3 h-3 text-muted-foreground" />
                            </button>
                          </div>
                          <p className={`text-sm mt-0.5 line-clamp-2 ${notification.read ? "text-muted-foreground/70" : "text-muted-foreground"}`}>
                            {notification.message}
                          </p>
                          <p className="text-xs text-muted-foreground/60 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="p-3 border-t border-border bg-muted/30">
                <Button variant="ghost" size="sm" className="w-full text-sm" asChild>
                  <a href="/applications">View all notifications</a>
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
