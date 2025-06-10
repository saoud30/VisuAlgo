
import { Zap, UserX, Gauge, Code2 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Code2,
      title: "Client-Side JavaScript",
      description: "Pure JavaScript execution in your browser. No server dependencies, maximum privacy.",
      color: "from-electric to-blue-400"
    },
    {
      icon: UserX,
      title: "No Login Needed",
      description: "Jump right in without any registration. Start visualizing algorithms immediately.",
      color: "from-neon to-green-400"
    },
    {
      icon: Gauge,
      title: "Lightning Fast",
      description: "Optimized rendering engine provides smooth 60fps animations for complex algorithms.",
      color: "from-purple to-pink-400"
    },
    {
      icon: Zap,
      title: "Custom Input Support",
      description: "Bring your own data structures or use our examples. Full customization support.",
      color: "from-orange-400 to-red-400"
    }
  ];

  return (
    <section className="py-24 px-4 scroll-reveal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Why Choose VisuAlgo
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Built for developers, by developers. Experience the fastest and most intuitive algorithm visualizer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="feature-card group">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
