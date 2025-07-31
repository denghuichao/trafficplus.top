import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Hero = () => {
  const [domain, setDomain] = useState("");

  const handleAnalyze = () => {
    if (domain) {
      console.log("Analyzing:", domain);
      // Here you would implement the actual analysis functionality
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Free Website Traffic Checker
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Get any website's traffic volume, sources, trends, top keywords and domain information for free.
        </p>
        
        <div className="flex max-w-md mx-auto mb-12">
          <div className="flex-1 relative">
            <Input
              type="text"
              placeholder="Enter a domain or URL like google.com"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="pr-4 py-3 text-lg rounded-r-none border-r-0"
              onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
            />
          </div>
          <Button 
            onClick={handleAnalyze}
            className="px-6 py-3 text-lg rounded-l-none bg-primary hover:bg-primary-dark"
          >
            Analyze Traffic
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;