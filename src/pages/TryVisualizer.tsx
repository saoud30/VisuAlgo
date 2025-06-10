
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, RotateCcw, Settings } from 'lucide-react';
import CodeEditor from '@/components/visualizer/CodeEditor';
import VisualizationCanvas from '@/components/visualizer/VisualizationCanvas';
import AlgorithmSelector from '@/components/visualizer/AlgorithmSelector';
import GeminiAnalyzer from '@/components/visualizer/GeminiAnalyzer';

const TryVisualizer = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('pasteCode');
  const [isRunning, setIsRunning] = useState(false);
  const [code, setCode] = useState('');
  const [analysisSteps, setAnalysisSteps] = useState<Array<{ title: string; description: string }>>([]);

  const handleVisualize = () => {
    if (!code.trim()) {
      alert('Please enter some code or select an algorithm to visualize');
      return;
    }
    
    setIsRunning(true);
    console.log('Starting visualization with code:', code);
    console.log('Selected algorithm:', selectedAlgorithm);
    
    // Simulation of visualization - in a real app, this would parse and execute the code
    setTimeout(() => {
      setIsRunning(false);
      console.log('Visualization completed');
    }, 5000);
  };

  const handleReset = () => {
    setIsRunning(false);
    setAnalysisSteps([]);
  };

  const handleAnalysisComplete = (steps: Array<{ title: string; description: string }>) => {
    setAnalysisSteps(steps);
    console.log('AI Analysis Steps:', steps);
  };

  const handleAlgorithmChange = (algorithm: string) => {
    setSelectedAlgorithm(algorithm);
    // Clear analysis when switching algorithms
    setAnalysisSteps([]);
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    // Clear analysis when code changes
    if (analysisSteps.length > 0) {
      setAnalysisSteps([]);
    }
  };

  // Determine which algorithm to visualize
  const getVisualizationAlgorithm = () => {
    if (selectedAlgorithm === 'pasteCode') {
      return 'userCode'; // Special identifier for user code
    }
    return selectedAlgorithm;
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gradient">
            Algorithm Visualizer
          </h1>
          <p className="text-xl text-foreground/70">
            Select an algorithm or paste your own code to see it come alive
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-8 h-[calc(100vh-200px)]">
          {/* Left Panel - Code Editor */}
          <div className="flex flex-col space-y-4">
            <AlgorithmSelector 
              selectedAlgorithm={selectedAlgorithm}
              onAlgorithmChange={handleAlgorithmChange}
              onCodeChange={handleCodeChange}
            />
            
            <div className="flex-1 min-h-0">
              <CodeEditor 
                value={code}
                onChange={handleCodeChange}
                algorithm={selectedAlgorithm}
              />
            </div>

            {/* AI Analysis */}
            <GeminiAnalyzer 
              code={code}
              onAnalysisComplete={handleAnalysisComplete}
            />

            {/* Controls */}
            <div className="flex space-x-4">
              <Button
                onClick={handleVisualize}
                disabled={isRunning || !code.trim()}
                className="glow-button flex-1"
              >
                <Play className="mr-2 h-4 w-4" />
                {isRunning ? 'Running...' : 'Visualize'}
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-glass-border hover:border-electric/50"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-glass-border hover:border-electric/50"
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Panel - Visualization */}
          <div className="glass-panel p-6">
            <VisualizationCanvas 
              algorithm={getVisualizationAlgorithm()}
              isRunning={isRunning}
              code={code}
              analysisSteps={analysisSteps}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryVisualizer;
