import { BarChart3, Globe, Search, MapPin, Layers, Clock } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Traffic Volume Analysis",
    description: "Get accurate traffic estimates for any website including monthly visits, page views, and user engagement metrics."
  },
  {
    icon: Globe,
    title: "Traffic Sources Discovery",
    description: "Identify where website traffic comes from - search engines, social media, direct visits, and referral sites."
  },
  {
    icon: Search,
    title: "Keyword Traffic Insights",
    description: "Discover which keywords drive the most traffic to any website and analyze search performance trends."
  },
  {
    icon: MapPin,
    title: "Geographic Traffic Analysis",
    description: "See where website visitors come from geographically with detailed country and region breakdowns."
  },
  {
    icon: Layers,
    title: "Bulk Traffic Checking",
    description: "Analyze multiple websites simultaneously to compare traffic volumes and identify market opportunities."
  },
  {
    icon: Clock,
    title: "Free & Real-time Data",
    description: "Access all traffic data completely free with real-time updates and no hidden fees or subscription requirements."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Free Website Traffic Checker & SEO Analytics Tool
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check website traffic, analyze competitors, and discover SEO opportunities with 
            our free traffic analytics tool. Get accurate website stats, keyword rankings, and 
            traffic sources for any domain.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;