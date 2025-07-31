import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Globe } from "lucide-react";

// Mock data for new website discoveries
const newWebsites = [
  { id: 1, domain: "techstartup.ai", traffic: "245K", growth: "+127%", category: "Technology", discovered: "2024-01-15", rank: 1, change: "+5" },
  { id: 2, domain: "greeneco.solutions", traffic: "189K", growth: "+98%", category: "Environment", discovered: "2024-01-14", rank: 2, change: "+3" },
  { id: 3, domain: "cryptonews.live", traffic: "167K", growth: "+89%", category: "Finance", discovered: "2024-01-13", rank: 3, change: "+7" },
  { id: 4, domain: "healthtrends.pro", traffic: "156K", growth: "+76%", category: "Health", discovered: "2024-01-12", rank: 4, change: "+2" },
  { id: 5, domain: "fashionhub.store", traffic: "134K", growth: "+67%", category: "Fashion", discovered: "2024-01-11", rank: 5, change: "+4" },
  { id: 6, domain: "gamereviews.zone", traffic: "123K", growth: "+54%", category: "Gaming", discovered: "2024-01-10", rank: 6, change: "+1" },
  { id: 7, domain: "travelguide.expert", traffic: "112K", growth: "+45%", category: "Travel", discovered: "2024-01-09", rank: 7, change: "+6" },
  { id: 8, domain: "foodblog.delicious", traffic: "98K", growth: "+43%", category: "Food", discovered: "2024-01-08", rank: 8, change: "+2" },
  { id: 9, domain: "edtech.learning", traffic: "87K", growth: "+38%", category: "Education", discovered: "2024-01-07", rank: 9, change: "+3" },
  { id: 10, domain: "musicstreaming.wave", traffic: "76K", growth: "+35%", category: "Music", discovered: "2024-01-06", rank: 10, change: "+1" },
  { id: 11, domain: "artgallery.modern", traffic: "65K", growth: "+32%", category: "Art", discovered: "2024-01-05", rank: 11, change: "+4" },
  { id: 12, domain: "fitnessapp.strong", traffic: "54K", growth: "+29%", category: "Fitness", discovered: "2024-01-04", rank: 12, change: "+2" },
  { id: 13, domain: "petcare.loving", traffic: "43K", growth: "+26%", category: "Pets", discovered: "2024-01-03", rank: 13, change: "+5" },
  { id: 14, domain: "diyprojects.maker", traffic: "38K", growth: "+24%", category: "DIY", discovered: "2024-01-02", rank: 14, change: "+1" },
  { id: 15, domain: "bookclub.readers", traffic: "32K", growth: "+22%", category: "Books", discovered: "2024-01-01", rank: 15, change: "+3" },
  { id: 16, domain: "gardening.green", traffic: "28K", growth: "+19%", category: "Gardening", discovered: "2023-12-31", rank: 16, change: "+2" },
  { id: 17, domain: "photography.lens", traffic: "24K", growth: "+17%", category: "Photography", discovered: "2023-12-30", rank: 17, change: "+4" },
  { id: 18, domain: "cooking.chef", traffic: "21K", growth: "+15%", category: "Cooking", discovered: "2023-12-29", rank: 18, change: "+1" },
  { id: 19, domain: "moviereviews.cinema", traffic: "18K", growth: "+13%", category: "Movies", discovered: "2023-12-28", rank: 19, change: "+2" },
  { id: 20, domain: "weatherapp.forecast", traffic: "15K", growth: "+11%", category: "Weather", discovered: "2023-12-27", rank: 20, change: "+1" }
];

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    "Technology": "bg-blue-100 text-blue-800",
    "Environment": "bg-green-100 text-green-800",
    "Finance": "bg-yellow-100 text-yellow-800",
    "Health": "bg-red-100 text-red-800",
    "Fashion": "bg-pink-100 text-pink-800",
    "Gaming": "bg-purple-100 text-purple-800",
    "Travel": "bg-cyan-100 text-cyan-800",
    "Food": "bg-orange-100 text-orange-800",
    "Education": "bg-indigo-100 text-indigo-800",
    "Music": "bg-violet-100 text-violet-800"
  };
  return colors[category] || "bg-gray-100 text-gray-800";
};

const NewWebsiteDiscoveries = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Globe className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-gray-900">New Website Discoveries</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Discover the fastest-growing and newly emerging websites across all industries. 
            Updated daily with the latest website discoveries and traffic insights.
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Website</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Monthly Traffic</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Growth Rate</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Discovered</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rank Change</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {newWebsites.map((website, index) => (
                  <tr key={website.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-lg font-bold text-gray-900">#{website.rank}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <Globe className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{website.domain}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge className={`${getCategoryColor(website.category)} border-0`}>
                        {website.category}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{website.traffic}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4 text-success" />
                        <span className="text-sm font-medium text-success">{website.growth}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">{website.discovered}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4 text-success" />
                        <span className="text-sm font-medium text-success">{website.change}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="inline-flex items-center space-x-1 text-primary hover:text-primary-dark transition-colors">
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm">Analyze</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Showing {newWebsites.length} newly discovered websites. Data updated daily.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewWebsiteDiscoveries;