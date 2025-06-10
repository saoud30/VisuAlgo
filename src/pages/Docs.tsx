
import { useState } from 'react';
import { Book, Code, Cpu, Zap } from 'lucide-react';
import Footer from '@/components/Footer';

const Docs = () => {
  const [selectedCategory, setSelectedCategory] = useState('getting-started');

  const categories = [
    { id: 'getting-started', name: 'Getting Started', icon: Book },
    { id: 'algorithms', name: 'Supported Algorithms', icon: Cpu },
    { id: 'api', name: 'API Reference', icon: Code },
    { id: 'advanced', name: 'Advanced Usage', icon: Zap }
  ];

  const articles = {
    'getting-started': [
      {
        title: "Quick Start Guide",
        description: "Get up and running with VisuAlgo in 5 minutes",
        content: `# Quick Start Guide

Welcome to VisuAlgo! This guide will help you get started with visualizing algorithms in just a few minutes.

## Step 1: Choose Your Algorithm

Navigate to the Try page and select from our library of pre-built algorithms:
- Sorting algorithms (Bubble Sort, Quick Sort, Merge Sort)
- Search algorithms (Binary Search, Linear Search)
- Tree traversals (In-order, Pre-order, Post-order)
- Graph algorithms (DFS, BFS)

## Step 2: Customize Your Input

You can either:
- Use our default data sets
- Modify the existing code
- Paste your own algorithm implementation

## Step 3: Visualize

Click the "Visualize" button and watch your algorithm come to life with smooth animations and step-by-step breakdowns.

## Tips for Best Results

- Start with smaller data sets for better visibility
- Use the speed controls to adjust animation timing
- Pay attention to the comparison highlights and swap animations`
      },
      {
        title: "Understanding the Interface",
        description: "Learn about VisuAlgo's user interface and features",
        content: `# Understanding the Interface

VisuAlgo's interface is designed to be intuitive and distraction-free, focusing on the visualization experience.

## Main Components

### Code Editor Panel
- Syntax highlighting for JavaScript
- Line numbers for easy reference
- Auto-indentation and bracket matching
- Real-time error detection

### Visualization Canvas
- High-performance rendering engine
- Smooth 60fps animations
- Interactive elements you can hover over
- Step-by-step execution indicators

### Control Panel
- Play/Pause functionality
- Speed adjustment slider
- Reset to beginning
- Step forward/backward controls

## Keyboard Shortcuts

- **Space** - Play/Pause
- **R** - Reset visualization
- **→** - Step forward
- **←** - Step backward
- **+/-** - Adjust speed`
      }
    ],
    algorithms: [
      {
        title: "Sorting Algorithms",
        description: "Comprehensive guide to visualizing sorting algorithms",
        content: `# Sorting Algorithms

VisuAlgo supports a wide range of sorting algorithms with detailed visualizations.

## Bubble Sort
**Time Complexity:** O(n²)  
**Space Complexity:** O(1)

Bubble Sort repeatedly steps through the list, compares adjacent elements and swaps them if they're in the wrong order.

### Visualization Features:
- Red bars indicate elements being compared
- Green bars show swapped elements
- Blue bar marks the sorted portion

## Quick Sort
**Time Complexity:** O(n log n) average, O(n²) worst case  
**Space Complexity:** O(log n)

Quick Sort uses divide-and-conquer to sort arrays efficiently.

### Visualization Features:
- Pivot element highlighted in yellow
- Partitioning process clearly shown
- Recursive calls visualized with different colors

## Merge Sort
**Time Complexity:** O(n log n)  
**Space Complexity:** O(n)

Merge Sort divides the array into smaller subarrays, sorts them, and merges them back.

### Visualization Features:
- Split operations animated
- Merge process step-by-step
- Memory usage visualization`
      },
      {
        title: "Search Algorithms",
        description: "Learn about search algorithm visualizations",
        content: `# Search Algorithms

Search algorithms help find specific elements within data structures.

## Binary Search
**Time Complexity:** O(log n)  
**Space Complexity:** O(1)

Binary Search efficiently finds elements in sorted arrays by repeatedly dividing the search interval in half.

### Visualization Features:
- Search range highlighted in blue
- Middle element prominently displayed
- Elimination of half the array shown clearly
- Target element highlighted when found

## Linear Search
**Time Complexity:** O(n)  
**Space Complexity:** O(1)

Linear Search checks every element sequentially until the target is found.

### Visualization Features:
- Current element being checked highlighted
- Progress bar showing search completion
- Found element celebration animation

## Depth-First Search (DFS)
**Time Complexity:** O(V + E)  
**Space Complexity:** O(V)

DFS explores graph vertices by going as far as possible along each branch.

### Visualization Features:
- Stack visualization for recursive calls
- Visited nodes marked in green
- Current path highlighted
- Backtracking clearly shown`
      }
    ],
    api: [
      {
        title: "Custom Algorithm Integration",
        description: "How to integrate your own algorithms with VisuAlgo",
        content: `# Custom Algorithm Integration

Learn how to make your algorithms compatible with VisuAlgo's visualization engine.

## Basic Requirements

Your algorithm must be written in JavaScript and follow these conventions:

### 1. State Management
Use our provided state management functions:

\`\`\`javascript
// Highlight elements being compared
visualizer.compare(index1, index2);

// Show a swap operation
visualizer.swap(index1, index2);

// Mark an element as sorted
visualizer.markSorted(index);

// Add delay for animation
await visualizer.delay(100);
\`\`\`

### 2. Algorithm Structure

\`\`\`javascript
async function customSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Your algorithm logic here
    
    // Use visualization calls
    visualizer.compare(i, i + 1);
    await visualizer.delay(200);
    
    if (arr[i] > arr[i + 1]) {
      visualizer.swap(i, i + 1);
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      await visualizer.delay(200);
    }
  }
}
\`\`\`

## Advanced Features

### Custom Colors
\`\`\`javascript
visualizer.setColor(index, '#FF0000'); // Red
visualizer.setColor(index, '#00FF00'); // Green
\`\`\`

### Annotations
\`\`\`javascript
visualizer.addAnnotation(index, 'Pivot');
visualizer.removeAnnotation(index);
\`\`\``
      },
      {
        title: "Visualization API Reference",
        description: "Complete API documentation for the visualization engine",
        content: `# Visualization API Reference

Complete reference for VisuAlgo's visualization API functions.

## Core Functions

### visualizer.compare(index1, index2)
Highlights two elements being compared.

**Parameters:**
- \`index1\` (number): First element index
- \`index2\` (number): Second element index

**Example:**
\`\`\`javascript
visualizer.compare(0, 1); // Compare first two elements
\`\`\`

### visualizer.swap(index1, index2)
Animates swapping of two elements.

**Parameters:**
- \`index1\` (number): First element index
- \`index2\` (number): Second element index

**Example:**
\`\`\`javascript
visualizer.swap(2, 5); // Swap elements at indices 2 and 5
\`\`\`

### visualizer.delay(milliseconds)
Adds a pause in the animation.

**Parameters:**
- \`milliseconds\` (number): Delay duration

**Returns:** Promise that resolves after the delay

**Example:**
\`\`\`javascript
await visualizer.delay(500); // Wait 500ms
\`\`\`

## Styling Functions

### visualizer.setColor(index, color)
Changes the color of an element.

**Parameters:**
- \`index\` (number): Element index
- \`color\` (string): Hex color code

### visualizer.resetColors()
Resets all elements to default color.

## State Functions

### visualizer.markSorted(index)
Marks an element as sorted.

### visualizer.markUnsorted(index)
Marks an element as unsorted.`
      }
    ],
    advanced: [
      {
        title: "Performance Optimization",
        description: "Tips for optimizing visualizations with large datasets",
        content: `# Performance Optimization

Learn how to create smooth visualizations even with large datasets.

## Optimization Strategies

### 1. Batch Operations
Instead of updating the visualization for every single operation, batch them:

\`\`\`javascript
// Instead of this:
for (let i = 0; i < n; i++) {
  visualizer.highlight(i);
  await visualizer.delay(100);
}

// Do this:
const batch = [];
for (let i = 0; i < n; i++) {
  batch.push({ type: 'highlight', index: i });
}
await visualizer.executeBatch(batch);
\`\`\`

### 2. Adaptive Delays
Adjust delays based on dataset size:

\`\`\`javascript
const delay = Math.max(50, 1000 / arr.length);
await visualizer.delay(delay);
\`\`\`

### 3. Selective Visualization
For very large datasets, only visualize key operations:

\`\`\`javascript
if (arr.length < 100 || isKeyOperation) {
  visualizer.compare(i, j);
  await visualizer.delay(100);
}
\`\`\`

## Memory Management

### Cleanup Resources
Always clean up when your algorithm completes:

\`\`\`javascript
async function myAlgorithm(arr) {
  try {
    // Algorithm implementation
  } finally {
    visualizer.cleanup();
  }
}
\`\`\`

### Efficient Data Structures
Use appropriate data structures for your visualizations:
- Use typed arrays for large numeric datasets
- Implement object pooling for frequently created objects
- Consider using Web Workers for heavy computations`
      },
      {
        title: "Custom Themes and Styling",
        description: "Create custom visual themes for your algorithms",
        content: `# Custom Themes and Styling

Customize the visual appearance of your algorithm visualizations.

## Theme Configuration

Create custom themes by defining color schemes:

\`\`\`javascript
const customTheme = {
  background: '#1a1a2e',
  primary: '#16213e',
  accent: '#0f3460',
  highlight: '#e94560',
  success: '#0f4c75',
  text: '#ffffff'
};

visualizer.setTheme(customTheme);
\`\`\`

## Element Styling

### Custom Bar Styles
\`\`\`javascript
visualizer.setBarStyle({
  borderRadius: '8px',
  gradient: true,
  shadow: '0 4px 8px rgba(0,0,0,0.3)',
  border: '2px solid #333'
});
\`\`\`

### Animation Presets
\`\`\`javascript
// Smooth and slow
visualizer.setAnimationStyle('smooth');

// Fast and snappy
visualizer.setAnimationStyle('snappy');

// Bouncy effects
visualizer.setAnimationStyle('bouncy');
\`\`\`

## Custom Particle Effects

Add particle effects for special events:

\`\`\`javascript
// Celebration effect when sorting completes
visualizer.addParticleEffect('celebration', {
  type: 'confetti',
  duration: 2000,
  colors: ['#ff0000', '#00ff00', '#0000ff']
});

// Trigger the effect
visualizer.triggerEffect('celebration');
\`\`\`

## Responsive Design

Ensure your visualizations work on all screen sizes:

\`\`\`javascript
visualizer.setResponsiveMode(true);

// Custom breakpoints
visualizer.setBreakpoints({
  mobile: 768,
  tablet: 1024,
  desktop: 1440
});
\`\`\``
      }
    ]
  };

  const currentArticles = articles[selectedCategory as keyof typeof articles] || [];

  const renderMarkdown = (content: string) => {
    return content.split('\n').map((line, index) => {
      const key = `${selectedCategory}-${index}`;
      
      // Headers
      if (line.startsWith('### ')) {
        return <h3 key={key} className="text-lg font-semibold text-foreground mt-6 mb-3">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={key} className="text-xl font-bold text-foreground mt-8 mb-4">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('# ')) {
        return <h1 key={key} className="text-2xl font-bold text-foreground mt-8 mb-6">{line.replace('# ', '')}</h1>;
      }
      
      // Code blocks
      if (line.startsWith('```')) {
        return <div key={key} className="my-4" />;
      }
      
      // Bold text
      if (line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={key} className="text-foreground/80 leading-relaxed mb-3">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i} className="font-semibold text-foreground">{part}</strong> : part
            )}
          </p>
        );
      }
      
      // Inline code
      if (line.includes('`') && !line.startsWith('```')) {
        const parts = line.split('`');
        return (
          <p key={key} className="text-foreground/80 leading-relaxed mb-3">
            {parts.map((part, i) => 
              i % 2 === 1 ? <code key={i} className="bg-glass-white px-2 py-1 rounded text-electric font-mono text-sm">{part}</code> : part
            )}
          </p>
        );
      }
      
      // List items
      if (line.startsWith('- ')) {
        return <li key={key} className="text-foreground/80 leading-relaxed mb-1 ml-4">{line.replace('- ', '')}</li>;
      }
      
      // Regular paragraphs
      if (line.trim() && !line.startsWith('#') && !line.startsWith('```')) {
        return <p key={key} className="text-foreground/80 leading-relaxed mb-3">{line}</p>;
      }
      
      // Empty lines
      if (!line.trim()) {
        return <div key={key} className="mb-2" />;
      }
      
      return null;
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Documentation
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Everything you need to know about using VisuAlgo effectively. 
            From quick start guides to advanced customization techniques.
          </p>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-12 px-4 scroll-reveal">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="glass-panel p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Categories
                </h3>
                <nav className="space-y-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          selectedCategory === category.id
                            ? 'bg-electric/20 text-electric border border-electric/30'
                            : 'text-foreground/70 hover:text-electric hover:bg-electric/10'
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {currentArticles.map((article, index) => (
                  <article key={index} className="glass-panel p-8">
                    <header className="mb-6">
                      <h2 className="text-3xl font-bold mb-3 text-foreground">
                        {article.title}
                      </h2>
                      <p className="text-foreground/70 text-lg">
                        {article.description}
                      </p>
                    </header>
                    
                    <div className="prose prose-invert max-w-none">
                      <div className="text-foreground/80 leading-relaxed">
                        {renderMarkdown(article.content)}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Docs;
