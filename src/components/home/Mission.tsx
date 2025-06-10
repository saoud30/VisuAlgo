
import { Target, Users, BookOpen } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-24 px-4 scroll-reveal">
      <div className="max-w-6xl mx-auto">
        <div className="glass-panel p-8 lg:p-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Mission
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              We believe that learning algorithms shouldn't be abstract or intimidating. Our mission is to make computer science concepts accessible, engaging, and visually beautiful for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-electric to-blue-400 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Make Learning Visual</h3>
              <p className="text-foreground/70">Transform abstract concepts into intuitive, interactive experiences that stick.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-neon to-green-400 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Empower Educators</h3>
              <p className="text-foreground/70">Give teachers and professors the tools they need to inspire the next generation of developers.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple to-pink-400 rounded-full flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Democratize CS Education</h3>
              <p className="text-foreground/70">Make high-quality computer science education free and accessible to learners worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
