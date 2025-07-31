import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How accurate is the website traffic data on Traffic.cv?",
    answer: "Traffic.cv provides highly accurate traffic estimates by analyzing multiple data sources and using advanced algorithms. While no traffic estimation tool can be 100% precise, our data is reliable for competitive analysis and market research purposes."
  },
  {
    question: "Is Traffic.cv really free to use?",
    answer: "Yes, Traffic.cv is completely free to use. You can check website traffic, analyze keywords, perform bulk searches, and access all features without any cost or subscription requirements."
  },
  {
    question: "What types of websites can I analyze with Traffic.cv?",
    answer: "You can analyze virtually any website with Traffic.cv, including e-commerce sites, blogs, news websites, SaaS platforms, and more. Our tool works with websites from all industries and geographic regions."
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