
import { useState, useEffect } from 'react';

const LivePreview = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const visualizationSteps = [
    { array: [64, 34, 25, 12, 22, 11, 90], comparing: [0, 1], description: "Comparing 64 and 34" },
    { array: [34, 64, 25, 12, 22, 11, 90], comparing: [1, 2], description: "Swapped! Now comparing 64 and 25" },
    { array: [34, 25, 64, 12, 22, 11, 90], comparing: [2, 3], description: "Swapped! Now comparing 64 and 12" },
    { array: [34, 25, 12, 64, 22, 11, 90], comparing: [3, 4], description: "Swapped! Now comparing 64 and 22" },
    { array: [34, 25, 12, 22, 64, 11, 90], comparing: [4, 5], description: "Swapped! Now comparing 64 and 11" },
    { array: [34, 25, 12, 22, 11, 64, 90], comparing: [5, 6], description: "Swapped! Now comparing 64 and 90" },
    { array: [34, 25, 12, 22, 11, 64, 90], comparing: [], description: "First pass complete! Largest element is in place" },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % visualizationSteps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentStep = visualizationSteps[activeStep];

  return (
    <section className="py-24 px-4 scroll-reveal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Watch Algorithms Come Alive
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            See every step, every comparison, every swap. Our real-time visualizations make complex algorithms intuitive and engaging.
          </p>
        </div>

        <div className="glass-panel p-8 lg:p-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold">Bubble Sort Visualization</h3>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="glow-button px-6 py-2 text-sm"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
          </div>

          {/* Array Visualization */}
          <div className="flex justify-center items-end space-x-2 mb-8 h-64">
            {currentStep.array.map((value, index) => {
              const isComparing = currentStep.comparing.includes(index);
              const height = (value / 90) * 200; // Scale to max height of 200px
              
              return (
                <div
                  key={`${index}-${value}`}
                  className={`relative flex flex-col items-center transition-all duration-500 ${
                    isComparing ? 'transform scale-110' : ''
                  }`}
                >
                  <div
                    className={`w-12 rounded-t-lg transition-all duration-500 flex items-end justify-center pb-2 ${
                      isComparing 
                        ? 'bg-gradient-to-t from-electric to-neon shadow-glow-blue' 
                        : 'bg-gradient-to-t from-purple/60 to-purple/40'
                    }`}
                    style={{ height: `${height}px` }}
                  >
                    <span className="text-xs font-bold text-white">{value}</span>
                  </div>
                  <div className="mt-2 text-sm text-foreground/60">{index}</div>
                </div>
              );
            })}
          </div>

          {/* Step Description */}
          <div className="text-center">
            <p className="text-lg text-foreground/80 mb-4">{currentStep.description}</p>
            <div className="flex justify-center space-x-2">
              {visualizationSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeStep ? 'bg-electric' : 'bg-foreground/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivePreview;
