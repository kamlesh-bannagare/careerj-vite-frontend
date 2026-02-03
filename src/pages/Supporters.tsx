import { useState } from "react";
import { Coffee, Heart, User, Crown, Star, Gift, EyeOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Supporter {
  id: string;
  name: string;
  avatar?: string;
  isAnonymous: boolean;
  coffees: number;
  message?: string;
  date: string;
  tier: "supporter" | "champion" | "legend";
}

// Mock data - will be replaced with real data from database
const mockSupporters: Supporter[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    isAnonymous: false,
    coffees: 5,
    message: "Love what you're doing for job seekers! Keep it up! 🚀",
    date: "2024-01-15",
    tier: "champion"
  },
  {
    id: "2",
    name: "Anonymous",
    isAnonymous: true,
    coffees: 1,
    date: "2024-01-14",
    tier: "supporter"
  },
  {
    id: "3",
    name: "Priya Patel",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    isAnonymous: false,
    coffees: 10,
    message: "CareerJ helped me land my dream job. Happy to give back!",
    date: "2024-01-13",
    tier: "legend"
  },
  {
    id: "4",
    name: "Anonymous",
    isAnonymous: true,
    coffees: 3,
    message: "Great platform!",
    date: "2024-01-12",
    tier: "supporter"
  },
  {
    id: "5",
    name: "Amit Kumar",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    isAnonymous: false,
    coffees: 2,
    date: "2024-01-11",
    tier: "supporter"
  },
  {
    id: "6",
    name: "Anonymous",
    isAnonymous: true,
    coffees: 1,
    date: "2024-01-10",
    tier: "supporter"
  },
  {
    id: "7",
    name: "Sneha Reddy",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    isAnonymous: false,
    coffees: 7,
    message: "Thanks for keeping this free for everyone!",
    date: "2024-01-09",
    tier: "champion"
  },
  {
    id: "8",
    name: "Anonymous",
    isAnonymous: true,
    coffees: 5,
    date: "2024-01-08",
    tier: "champion"
  },
];

const getTierInfo = (tier: string) => {
  switch (tier) {
    case "legend":
      return { 
        icon: Crown, 
        label: "Legend", 
        color: "bg-gradient-to-r from-yellow-500 to-amber-500 text-white",
        glow: "shadow-lg shadow-yellow-500/30"
      };
    case "champion":
      return { 
        icon: Star, 
        label: "Champion", 
        color: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
        glow: "shadow-lg shadow-purple-500/30"
      };
    default:
      return { 
        icon: Heart, 
        label: "Supporter", 
        color: "bg-gradient-to-r from-rose-500 to-red-500 text-white",
        glow: ""
      };
  }
};

export default function Supporters() {
  const [filter, setFilter] = useState<"all" | "public" | "anonymous">("all");

  const filteredSupporters = mockSupporters.filter(supporter => {
    if (filter === "public") return !supporter.isAnonymous;
    if (filter === "anonymous") return supporter.isAnonymous;
    return true;
  });

  const totalCoffees = mockSupporters.reduce((sum, s) => sum + s.coffees, 0);
  const totalSupporters = mockSupporters.length;
  const publicSupporters = mockSupporters.filter(s => !s.isAnonymous).length;

  return (
    <div className="min-h-screen bg-background pt-20 pb-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mb-6">
            <Coffee className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Amazing Supporters ☕
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            These wonderful people help keep CareerJ free for everyone. 
            Their generosity enables us to connect job seekers with opportunities without any barriers.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-muted">
              <Coffee className="w-5 h-5 text-amber-500" />
              <span className="font-bold text-xl">{totalCoffees}</span>
              <span className="text-muted-foreground">Coffees</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-muted">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              <span className="font-bold text-xl">{totalSupporters}</span>
              <span className="text-muted-foreground">Supporters</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-muted">
              <User className="w-5 h-5 text-primary" />
              <span className="font-bold text-xl">{publicSupporters}</span>
              <span className="text-muted-foreground">Public</span>
            </div>
          </div>

          {/* CTA */}
          <a 
            href="https://www.buymeacoffee.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              className="gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <Gift className="w-5 h-5" />
              Join Our Supporters
            </Button>
          </a>
        </div>

        {/* Tier Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-sm">
            <Crown className="w-4 h-4 text-yellow-500" />
            <span>Legend (10+ coffees)</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Star className="w-4 h-4 text-purple-500" />
            <span>Champion (5+ coffees)</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Heart className="w-4 h-4 text-rose-500" />
            <span>Supporter</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="all" onClick={() => setFilter("all")}>
              All ({mockSupporters.length})
            </TabsTrigger>
            <TabsTrigger value="public" onClick={() => setFilter("public")}>
              Public ({publicSupporters})
            </TabsTrigger>
            <TabsTrigger value="anonymous" onClick={() => setFilter("anonymous")}>
              Anonymous ({totalSupporters - publicSupporters})
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Supporters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSupporters.map((supporter) => {
            const tierInfo = getTierInfo(supporter.tier);
            const TierIcon = tierInfo.icon;

            return (
              <Card 
                key={supporter.id} 
                className={`overflow-hidden transition-all hover:scale-[1.02] ${tierInfo.glow}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-14 h-14 border-2 border-border">
                      {supporter.isAnonymous ? (
                        <AvatarFallback className="bg-muted">
                          <EyeOff className="w-6 h-6 text-muted-foreground" />
                        </AvatarFallback>
                      ) : (
                        <>
                          <AvatarImage src={supporter.avatar} alt={supporter.name} />
                          <AvatarFallback>{supporter.name.charAt(0)}</AvatarFallback>
                        </>
                      )}
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold truncate">
                          {supporter.isAnonymous ? "Anonymous Supporter" : supporter.name}
                        </h3>
                        <Badge className={tierInfo.color}>
                          <TierIcon className="w-3 h-3 mr-1" />
                          {tierInfo.label}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Coffee className="w-4 h-4 text-amber-500" />
                        <span>{supporter.coffees} coffee{supporter.coffees > 1 ? "s" : ""}</span>
                        <span>•</span>
                        <span>{new Date(supporter.date).toLocaleDateString()}</span>
                      </div>
                      {supporter.message && (
                        <p className="text-sm text-muted-foreground italic">
                          "{supporter.message}"
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Privacy Notice */}
        <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border text-center">
          <EyeOff className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
          <h3 className="font-semibold mb-2">Your Privacy Matters</h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            When you support us, you can choose to display your name publicly or remain anonymous. 
            We respect your choice and will never share your personal information without consent.
          </p>
        </div>
      </div>
    </div>
  );
}
