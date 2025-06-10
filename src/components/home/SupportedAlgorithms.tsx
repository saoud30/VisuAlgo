
import { useState } from 'react';
import { Binary, GitBranch, Grid3X3, RotateCw, Shuffle, Layers } from 'lucide-react';

const SupportedAlgorithms = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const algorithms = [
    {
      icon: RotateCw,
      title: "Recursion",
      description: "Visualize recursive calls and stack frames in real-time",
      color: "from-electric to-blue-400"
    },
    {
      icon: Layers,
      title: "Queues & Stacks",
      description: "Watch FIFO and LIFO operations with smooth animations",
      color: "from-neon to-green-400"
    },
    {
      icon: GitBranch,
      title: "Trees",
      description: "Explore BSTs, AVL trees, and traversal algorithms",
      color: "from-purple to-pink-400"
    },
    {
      icon: Grid3X3,
      title: "2D Arrays",
      description: "Matrix operations and pathfinding visualizations",
      color: "from-orange-400 to-red-400"
    },
    {
      icon: Shuffle,
      title: "Sorting",
      description: "Bubble, merge, quick sort and more with comparisons",
      color: "from-teal-400 to-cyan-400"
    },
    {
      icon: Binary,
      title: "Search",
      description: "Binary search, DFS, BFS with step-by-step breakdown",
      color: "from-indigo-400 to-purple-400"
    }
  ];

  return (
    <section className="py-24 px-4 scroll-reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Supported Algorithms
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            From basic sorting to complex tree traversals, we support a wide range of algorithms with stunning visualizations.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 w-max">
            {algorithms.map((algorithm, index) => {
              const IconComponent = algorithm.icon;
              return (
                <div
                  key={index}
                  className={`algorithm-card min-w-[300px] relative ${
                    hoveredCard === index ? 'animate-glow-pulse' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${algorithm.color} opacity-10 rounded-xl`} />
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${algorithm.color} mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {algorithm.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {algorithm.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedAlgorithms;
