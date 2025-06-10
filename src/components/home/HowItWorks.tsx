
import { Code, Play, Eye } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Code,
      title: "Paste Code or Pick Algorithm",
      description: "Import your own code or select from our library of pre-built algorithms",
      color: "from-electric to-blue-400"
    },
    {
      icon: Play,
      title: "Click Visualize",
      description: "Our engine analyzes your code and prepares the visualization",
      color: "from-neon to-green-400"
    },
    {
      icon: Eye,
      title: "Watch Step-by-Step",
      description: "See every operation animated with beautiful, smooth transitions",
      color: "from-purple to-pink-400"
    }
  ];

  return (
    <section className="py-24 px-4 scroll-reveal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            How It Works
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Get started in seconds with our intuitive three-step process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-glow-blue transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-electric rounded-full flex items-center justify-center text-sm font-bold text-black">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
