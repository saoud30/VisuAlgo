
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-purple/5 to-neon/10 opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-gradient">Visualize Code.</span>
            <br />
            <span className="text-foreground">Understand Fast.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your code into vivid and smooth visual animations, injecting life into data structures and algorithms
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/try">
              <Button className="glow-button text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Try Now
              </Button>
            </Link>
            <Link to="/docs">
              <Button 
                variant="outline" 
                className="text-lg px-8 py-4 border-glass-border hover:border-electric/50 hover:bg-electric/10 transition-all duration-300"
              >
                Explore Docs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Code Editor Mockup */}
          <div className="glass-panel p-8 max-w-4xl mx-auto animate-float">
            <div className="bg-gray-900/50 rounded-lg p-6 text-left">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-sm text-foreground/60">algorithm-visualizer.js</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div><span className="text-purple">function</span> <span className="text-electric">bubbleSort</span><span className="text-foreground">(arr) {"{"}</span></div>
                <div className="ml-4"><span className="text-purple">for</span> <span className="text-foreground">(let i = 0; i {"<"} arr.length; i++) {"{"}</span></div>
                <div className="ml-8"><span className="text-purple">for</span> <span className="text-foreground">(let j = 0; j {"<"} arr.length - i - 1; j++) {"{"}</span></div>
                <div className="ml-12"><span className="text-purple">if</span> <span className="text-foreground">(arr[j] {">"} arr[j + 1]) {"{"}</span></div>
                <div className="ml-16"><span className="text-neon">// Visualize swap animation</span></div>
                <div className="ml-16"><span className="text-foreground">[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];</span></div>
                <div className="ml-12"><span className="text-foreground">{"}"}</span></div>
                <div className="ml-8"><span className="text-foreground">{"}"}</span></div>
                <div className="ml-4"><span className="text-foreground">{"}"}</span></div>
                <div><span className="text-foreground">{"}"}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
