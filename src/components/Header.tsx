import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, Zap, Users, DollarSign, BarChart3 } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Globe className="h-6 w-6" />
            <span className="text-xl font-bold">Traffic.cv</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#" className="flex items-center space-x-1 hover:text-primary-light transition-colors">
              <Globe className="h-4 w-4" />
              <span>New Website Discoveries</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-primary-light transition-colors">
              <TrendingUp className="h-4 w-4" />
              <span>Fastest Growing Websites</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-primary-light transition-colors">
              <Users className="h-4 w-4" />
              <span>Top Websites by Visits</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-primary-light transition-colors">
              <DollarSign className="h-4 w-4" />
              <span>Pricing</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-primary-light transition-colors">
              <BarChart3 className="h-4 w-4" />
              <span>Traffic Checker</span>
            </a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="bg-success text-success-foreground px-2 py-1 rounded text-xs font-medium">
            h
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;