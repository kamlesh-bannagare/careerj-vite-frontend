import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft, Briefcase, HelpCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <span className="text-[150px] md:text-[200px] font-bold bg-gradient-to-br from-primary to-primary/50 bg-clip-text text-transparent leading-none">
              404
            </span>
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center"
            >
              <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </motion.div>
          </div>
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <Link to="/">
            <Card className="hover:border-primary/50 transition-all cursor-pointer h-full">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Go Home</h3>
                <p className="text-sm text-muted-foreground">Return to homepage</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/jobs">
            <Card className="hover:border-primary/50 transition-all cursor-pointer h-full">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Browse Jobs</h3>
                <p className="text-sm text-muted-foreground">Find opportunities</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/contact">
            <Card className="hover:border-primary/50 transition-all cursor-pointer h-full">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Get Help</h3>
                <p className="text-sm text-muted-foreground">Contact support</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => window.history.back()}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;