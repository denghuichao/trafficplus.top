import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How reliable are the traffic analytics provided by Traffic.cv?",
    answer: "Our platform delivers precise traffic insights by leveraging multiple data sources and sophisticated analytical methods. While complete accuracy is challenging for any estimation tool, our metrics are dependable for market research and competitive intelligence purposes."
  },
  {
    question: "Does Traffic.cv require payment or subscription fees?",
    answer: "Traffic.cv operates as a completely free service. All features including traffic analysis, keyword research, bulk website checking, and detailed reports are available without any charges or membership requirements."
  },
  {
    question: "Which website categories can be analyzed using Traffic.cv?",
    answer: "Our tool supports analysis of virtually any publicly accessible website, spanning e-commerce platforms, personal blogs, news portals, software services, and corporate sites. We handle websites across all industries and geographical regions."
  },
  {
    question: "What is the refresh frequency for traffic statistics?",
    answer: "We update our traffic database monthly, typically around the 10th day of each month, incorporating data from the previous month. This schedule ensures you receive current and comprehensive monthly traffic metrics."
  },
  {
    question: "Is competitor website analysis possible with Traffic.cv?",
    answer: "Absolutely! Our platform enables you to examine traffic patterns for any public website, making it an invaluable resource for competitive intelligence. Compare your site's metrics against industry rivals and discover market gaps."
  },
  {
    question: "What traffic source details does Traffic.cv reveal?",
    answer: "We provide comprehensive traffic source analysis including search engine traffic (both organic and paid), social media referrals, direct website visits, referring domains, and geographical visitor distribution patterns."
  },
  {
    question: "Is account creation mandatory to access Traffic.cv features?",
    answer: "No signup necessary! Our service is entirely accessible without registration. Simply input any website URL to receive immediate traffic insights without creating user accounts or providing personal information."
  },
  {
    question: "Can Traffic.cv analyze my personal website's performance?",
    answer: "Definitely! Our tool is excellent for monitoring your own website's metrics. Track performance trends, discover high-traffic pages, and gain audience insights to enhance your online strategy and growth."
  },
  {
    question: "How does Traffic.cv compare to Google Analytics?",
    answer: "Unlike Google Analytics which requires website ownership and code implementation, Traffic.cv analyzes any website without special access. It's ideal for market research, competitor monitoring, and industry trend analysis."
  },
  {
    question: "What timeframe of historical data is available?",
    answer: "Our historical traffic records span several months, enabling trend analysis and seasonal pattern identification. This longitudinal data helps understand website growth trajectories and performance cycles."
  },
  {
    question: "Are data export options available for traffic reports?",
    answer: "Data export functionality is currently under development and will be introduced based on user feedback. For now, all analytical data remains viewable and actionable directly within our platform interface."
  },
  {
    question: "What distinguishes Traffic.cv from alternative traffic analysis tools?",
    answer: "Our platform offers unrestricted free access, reliable data sources, intuitive design, and comprehensive features like bulk analysis, keyword insights, and geographic breakdowns—all without usage limitations or costs."
  },
  {
    question: "Are there restrictions on website analysis volume?",
    answer: "No usage caps exist! Analyze unlimited websites with Traffic.cv. Whether examining individual sites or conducting large-scale market research across hundreds of domains, our tool accommodates all analysis needs."
  },
  {
    question: "How does Traffic.cv support SEO and marketing strategies?",
    answer: "Our platform provides crucial SEO intelligence through keyword performance data, traffic source analysis, and competitor insights. This information helps identify content opportunities, market trends, and strategic marketing directions."
  },
  {
    question: "Does Traffic.cv show device-specific traffic distribution?",
    answer: "Yes, we provide detailed device analytics displaying traffic percentages from mobile phones, desktop computers, and tablets. This data helps optimize user experience across different device preferences."
  },
  {
    question: "What steps should I take if no traffic data appears for a website?",
    answer: "Missing traffic data typically indicates the website is newly launched, receives minimal traffic, or has analysis restrictions. Verify the URL accuracy, or the site may need additional time to generate sufficient data for meaningful analysis."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions About Traffic.cv
          </h2>
          <p className="text-gray-600">
            Have another question? Contact us by email for more information.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg px-6 border-0 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;