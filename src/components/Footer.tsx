import { Globe, Twitter, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-gray-900">Traffic.cv</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Traffic.cv is a free website traffic checker that allows 
              you to analyze the traffic of any website
            </p>
            <div className="flex space-x-3 mt-4">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Tools</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">Website Traffic Checker</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">TLD Traffic Checker</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Keyword Traffic Checker</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bulk Traffic Checker</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Leaderboard</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">New Website Discoveries</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fastest Growing Websites</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Top Websites by Visits</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2025 - Traffic.cv All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;