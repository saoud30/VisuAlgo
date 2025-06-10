
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2, CheckCircle } from 'lucide-react';

interface GeminiAnalyzerProps {
  code: string;
  onAnalysisComplete: (steps: Array<{ title: string; description: string }>) => void;
}

const GeminiAnalyzer = ({ code, onAnalysisComplete }: GeminiAnalyzerProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysisSteps, setAnalysisSteps] = useState<Array<{ title: string; description: string }>>([]);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const analyzeCode = async () => {
    if (!code.trim()) {
      setError('Please enter some code to analyze');
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    setAnalysisComplete(false);

    try {
      const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!GEMINI_API_KEY) {
        throw new Error('Gemini API key is not configured. Please check your .env file.');
      }
      
      const prompt = `You're an algorithm visualizer. The user has pasted the following JavaScript function. Break it into step-by-step instructions for visualization in JSON format. Each step should have a title and description.

Code:
${code}

Respond with a JSON array like:
[
  { "title": "Initialize", "description": "Start with the base value n = 5" },
  { "title": "Recursive Call", "description": "Call factorial(n - 1)" },
  { "title": "Base Case", "description": "Return 1 when n equals 0 or 1" }
]`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (!generatedText) {
        throw new Error('No response generated');
      }

      // Extract JSON from the response
      const jsonMatch = generatedText.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        const steps = JSON.parse(jsonMatch[0]);
        setAnalysisSteps(steps);
        setAnalysisComplete(true);
        onAnalysisComplete(steps);
      } else {
        throw new Error('Could not parse steps from response');
      }

    } catch (err) {
      console.error('Gemini API error:', err);
      setError(err instanceof Error ? err.message : 'Failed to analyze code');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-foreground/80">AI Code Analysis</h4>
        <Button
          onClick={analyzeCode}
          disabled={isAnalyzing || !code.trim()}
          variant="outline"
          size="sm"
          className="border-glass-border hover:border-electric/50"
        >
          {isAnalyzing ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : analysisComplete ? (
            <CheckCircle className="h-4 w-4 mr-2 text-neon" />
          ) : (
            <Sparkles className="h-4 w-4 mr-2" />
          )}
          {isAnalyzing ? 'Analyzing...' : analysisComplete ? 'Re-analyze' : 'Analyze with AI'}
        </Button>
      </div>
      
      {error && (
        <div className="text-sm text-red-400 bg-red-900/20 p-2 rounded border border-red-800/30">
          {error}
        </div>
      )}

      {analysisSteps.length > 0 && (
        <div className="glass-panel p-4 max-h-60 overflow-y-auto">
          <h5 className="text-sm font-medium text-foreground mb-3">Analysis Steps:</h5>
          <div className="space-y-2">
            {analysisSteps.map((step, index) => (
              <div key={index} className="border-l-2 border-electric/30 pl-3">
                <div className="text-sm font-medium text-electric">{index + 1}. {step.title}</div>
                <div className="text-xs text-foreground/70 mt-1">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAnalyzer;
