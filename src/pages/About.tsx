
import { Target, Users, Lightbulb, Award } from 'lucide-react';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Educational Excellence",
      description: "We believe learning should be visual, interactive, and engaging. Our mission is to transform abstract concepts into intuitive experiences."
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Built by developers for developers, students, and educators. We listen to our community and continuously improve based on feedback."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We push the boundaries of educational technology, creating tools that make complex algorithms accessible to everyone."
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "Every visualization is crafted with attention to detail, ensuring accuracy, performance, and beautiful design."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            About VisuAlgo
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-12">
            We're on a mission to revolutionize how algorithms and data structures are taught and learned. 
            Through cutting-edge visualizations and interactive experiences, we make computer science 
            education accessible, engaging, and effective for learners worldwide.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our Story
              </h2>
              <div className="space-y-6 text-foreground/70 leading-relaxed">
                <p>
                  VisuAlgo was born from a simple observation: traditional algorithm education 
                  was failing too many students. Textbooks and static diagrams weren't enough 
                  to help learners truly understand how algorithms work.
                </p>
                <p>
                  Our founders, experienced software engineers and educators, recognized that 
                  visual learning could bridge this gap. They envisioned a platform where 
                  every algorithm step could be seen, understood, and internalized through 
                  beautiful, interactive animations.
                </p>
                <p>
                  Today, VisuAlgo serves thousands of students, educators, and professionals 
                  worldwide, making algorithm education more effective and enjoyable than 
                  ever before.
                </p>
              </div>
            </div>
            
            <div className="glass-panel p-8">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-electric mb-2">50,000+</div>
                  <div className="text-foreground/70">Students Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon mb-2">200+</div>
                  <div className="text-foreground/70">Educational Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple mb-2">25+</div>
                  <div className="text-foreground/70">Supported Algorithms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Our Values
            </h2>
            <p className="text-xl text-foreground/70">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="feature-card group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-electric to-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 scroll-reveal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gradient">
            Meet the Team
          </h2>
          <p className="text-xl text-foreground/70 mb-16">
            Passionate educators and engineers working to democratize computer science education
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex Chen", role: "Founder & CEO", avatar: "AC" },
              { name: "Sarah Rodriguez", role: "Lead Engineer", avatar: "SR" },
              { name: "Michael Park", role: "Educational Director", avatar: "MP" }
            ].map((member, index) => (
              <div key={index} className="glass-panel p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-electric to-purple rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {member.name}
                </h3>
                <p className="text-foreground/60">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
