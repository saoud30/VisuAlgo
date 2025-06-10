
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is VisuAlgo free to use?",
      answer: "Yes! VisuAlgo is completely free to use. We believe in making computer science education accessible to everyone. No hidden fees, no premium tiers - just free, high-quality algorithm visualizations."
    },
    {
      question: "Do I need to create an account?",
      answer: "No account required! You can start using VisuAlgo immediately. Simply visit our Try page and begin visualizing algorithms right away. Your privacy is important to us."
    },
    {
      question: "What programming languages are supported?",
      answer: "Currently, we support JavaScript-based algorithm implementations. We're working on expanding support for Python, Java, and C++ in future updates."
    },
    {
      question: "Can I use my own custom algorithms?",
      answer: "Absolutely! You can paste your own code into our editor and visualize custom algorithms. Our system automatically analyzes your code structure and generates appropriate visualizations."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Yes! VisuAlgo is designed for learners at all levels. Whether you're a complete beginner or an advanced computer science student, our visualizations help clarify complex concepts."
    },
    {
      question: "Can teachers use this in their classrooms?",
      answer: "Definitely! Many educators use VisuAlgo to enhance their algorithm and data structure courses. The visual approach helps students understand concepts more quickly and retain information better."
    }
  ];

  return (
    <section className="py-24 px-4 scroll-reveal" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-foreground/70">
            Everything you need to know about VisuAlgo
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-panel overflow-hidden">
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-electric/5 transition-colors duration-200"
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`h-5 w-5 text-electric transition-transform duration-200 flex-shrink-0 ${
                    openItem === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              {openItem === index && (
                <div className="px-6 pb-6">
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
