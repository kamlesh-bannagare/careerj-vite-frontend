import { useState, useEffect } from "react";
import { Coffee, Heart, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function BuyMeCoffeePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenCoffeePopup");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenCoffeePopup", "true");
      }, 4000); // Show after 4 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleBuyCoffee = () => {
    // You can replace this with actual Buy Me a Coffee link
    window.open("https://www.buymeacoffee.com", "_blank");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Coffee className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold">
            Support CareerJ ☕
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed space-y-3">
            <p className="flex items-center justify-center gap-2 text-primary font-medium">
              <Heart className="w-4 h-4 fill-primary" />
              We believe in free access for everyone!
              <Heart className="w-4 h-4 fill-primary" />
            </p>
            <p>
              We don't charge any money from <strong>Job Seekers</strong>, <strong>Companies</strong>, or <strong>Mentors</strong>. 
              Our mission is to connect talent with opportunities without any barriers.
            </p>
            <p className="text-muted-foreground">
              To keep this platform running and growing, your support means the world to us. 
              Consider buying us a coffee to help maintain and improve CareerJ!
            </p>
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-3 mt-4">
          <Button 
            onClick={handleBuyCoffee}
            className="w-full gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
          >
            <Coffee className="w-4 h-4" />
            Buy Us a Coffee
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => setIsOpen(false)}
            className="w-full text-muted-foreground"
          >
            Maybe Later
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-2">
          Every contribution helps us keep CareerJ free for everyone 💙
        </p>
      </DialogContent>
    </Dialog>
  );
}
