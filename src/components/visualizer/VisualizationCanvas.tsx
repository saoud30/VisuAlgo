import { useEffect, useRef, useState } from 'react';

interface VisualizationCanvasProps {
  algorithm: string;
  isRunning: boolean;
  code: string;
  analysisSteps?: Array<{ title: string; description: string }>;
}

const VisualizationCanvas = ({ algorithm, isRunning, code, analysisSteps = [] }: VisualizationCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animationStep, setAnimationStep] = useState(0);
  const [data, setData] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [userCodeType, setUserCodeType] = useState<string>('unknown');

  // Detect code type from user input
  useEffect(() => {
    if (algorithm === 'userCode' && code) {
      const codeText = code.toLowerCase();
      if (codeText.includes('factorial') || codeText.includes('fibonacci') || codeText.includes('recursive')) {
        setUserCodeType('recursive');
      } else if (codeText.includes('sort') || codeText.includes('array') || codeText.includes('arr[')) {
        setUserCodeType('array');
      } else if (codeText.includes('search') || codeText.includes('binary')) {
        setUserCodeType('search');
      } else if (codeText.includes('tree') || codeText.includes('node')) {
        setUserCodeType('tree');
      } else {
        setUserCodeType('generic');
      }
    }
  }, [algorithm, code]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 20);
    }, 300);

    return () => clearInterval(interval);
  }, [isRunning, code, algorithm]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to fit container
    const container = canvas.parentElement;
    if (container) {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    }

    // Clear canvas
    ctx.fillStyle = 'rgba(15, 15, 35, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw visualization based on algorithm
    if (algorithm === 'userCode') {
      drawUserCodeVisualization(ctx, canvas.width, canvas.height);
    } else if (algorithm === 'bubbleSort') {
      drawBubbleSort(ctx, canvas.width, canvas.height);
    } else if (algorithm === 'quickSort') {
      drawQuickSort(ctx, canvas.width, canvas.height);
    } else if (algorithm === 'binarySearch') {
      drawBinarySearch(ctx, canvas.width, canvas.height);
    } else if (algorithm === 'fibonacci') {
      drawFibonacci(ctx, canvas.width, canvas.height);
    } else if (algorithm === 'binaryTree' || algorithm === 'bst' || algorithm === 'avlTree') {
      drawTreeVisualization(ctx, canvas.width, canvas.height);
    } else {
      drawDefault(ctx, canvas.width, canvas.height);
    }
  }, [algorithm, animationStep, isRunning, code, analysisSteps, userCodeType]);

  const drawBubbleSort = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const barWidth = Math.min(width / data.length, 80);
    const maxHeight = height * 0.6;
    const startX = (width - (barWidth * data.length)) / 2;

    data.forEach((value, index) => {
      const barHeight = (value / Math.max(...data)) * maxHeight;
      const x = startX + index * barWidth;
      const y = height - barHeight - 80;

      // Determine bar color
      let color = '#8B5CF6';
      if (isRunning && index === animationStep % data.length) {
        color = '#00BFFF';
      } else if (isRunning && index === (animationStep + 1) % data.length) {
        color = '#39FF14';
      }

      // Draw bar with gradient
      const gradient = ctx.createLinearGradient(x, y, x, y + barHeight);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, color + '40');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(x + 5, y, barWidth - 10, barHeight);

      // Draw value
      ctx.fillStyle = '#ffffff';
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(value.toString(), x + barWidth / 2, y + barHeight + 20);
    });

    // Draw comparison indicator
    if (isRunning) {
      ctx.strokeStyle = '#00BFFF';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      
      const currentIndex = animationStep % data.length;
      const nextIndex = (currentIndex + 1) % data.length;
      
      const x1 = startX + currentIndex * barWidth + barWidth / 2;
      const x2 = startX + nextIndex * barWidth + barWidth / 2;
      
      ctx.beginPath();
      ctx.moveTo(x1, height - 50);
      ctx.lineTo(x2, height - 50);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  };

  const drawQuickSort = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const barWidth = Math.min(width / data.length, 80);
    const maxHeight = height * 0.6;
    const startX = (width - (barWidth * data.length)) / 2;
    
    // Simulate partitioning process
    const pivotIndex = data.length - 1;
    const currentStep = animationStep % data.length;

    data.forEach((value, index) => {
      const barHeight = (value / Math.max(...data)) * maxHeight;
      const x = startX + index * barWidth;
      const y = height - barHeight - 80;

      let color = '#8B5CF6';
      if (index === pivotIndex) {
        color = '#FF6B6B'; // Red for pivot
      } else if (isRunning && index === currentStep) {
        color = '#00BFFF'; // Blue for current comparison
      } else if (isRunning && index < currentStep) {
        color = '#39FF14'; // Green for processed
      }

      ctx.fillStyle = color;
      ctx.fillRect(x + 5, y, barWidth - 10, barHeight);

      // Draw value
      ctx.fillStyle = '#ffffff';
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(value.toString(), x + barWidth / 2, y + barHeight + 20);
    });

    // Draw pivot indicator
    ctx.fillStyle = '#ffffff';
    ctx.font = '14px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`Pivot: ${data[pivotIndex]}`, 20, 30);
    if (isRunning) {
      ctx.fillText(`Comparing: ${data[currentStep] || 'Done'}`, 20, 55);
    }
  };

  const drawBinarySearch = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const sortedData = [...data].sort((a, b) => a - b);
    const barWidth = Math.min(width / sortedData.length, 80);
    const maxHeight = height * 0.6;
    const startX = (width - (barWidth * sortedData.length)) / 2;

    // Binary search simulation
    let left = 0;
    let right = sortedData.length - 1;
    const steps = Math.floor(animationStep / 3); // Slower animation for better visibility
    
    for (let i = 0; i < steps && left <= right; i++) {
      const mid = Math.floor((left + right) / 2);
      const target = 25; // Searching for 25
      
      if (sortedData[mid] === target) break;
      else if (sortedData[mid] < target) left = mid + 1;
      else right = mid - 1;
    }

    const mid = Math.floor((left + right) / 2);

    sortedData.forEach((value, index) => {
      const barHeight = (value / Math.max(...sortedData)) * maxHeight;
      const x = startX + index * barWidth;
      const y = height - barHeight - 80;

      let color = '#4B5563';
      if (index === mid && isRunning && left <= right) {
        color = '#00BFFF'; // Blue for mid
      } else if (index >= left && index <= right && isRunning) {
        color = '#8B5CF6'; // Purple for search range
      }

      ctx.fillStyle = color;
      ctx.fillRect(x + 5, y, barWidth - 10, barHeight);

      // Draw value
      ctx.fillStyle = '#ffffff';
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(value.toString(), x + barWidth / 2, y + barHeight + 20);
    });

    // Draw search info
    ctx.fillStyle = '#ffffff';
    ctx.font = '16px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('Searching for: 25', 20, 30);
    if (isRunning && left <= right) {
      ctx.fillText(`Mid: ${sortedData[mid]}`, 20, 55);
      ctx.fillText(`Range: [${left}, ${right}]`, 20, 80);
    }
  };

  const drawFibonacci = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const fibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    const maxSteps = isRunning ? (animationStep % fibSequence.length) + 1 : fibSequence.length;
    
    // Draw Fibonacci spiral approximation
    ctx.strokeStyle = '#00BFFF';
    ctx.lineWidth = 3;
    
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = Math.min(width, height) / 100;
    
    ctx.beginPath();
    for (let i = 0; i < maxSteps - 1; i++) {
      const angle = (i * Math.PI) / 2;
      const radius = fibSequence[i] * scale;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();

    // Draw sequence numbers
    const cols = Math.min(5, Math.floor(width / 100));
    ctx.fillStyle = '#39FF14';
    ctx.font = '14px monospace';
    ctx.textAlign = 'center';
    
    fibSequence.slice(0, maxSteps).forEach((num, index) => {
      const x = 60 + (index % cols) * 100;
      const y = 60 + Math.floor(index / cols) * 40;
      
      if (x < width - 60 && y < height - 20) {
        ctx.fillStyle = index === maxSteps - 1 && isRunning ? '#00BFFF' : '#39FF14';
        ctx.fillText(`F(${index}) = ${num}`, x, y);
      }
    });
  };

  const drawUserCodeVisualization = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    if (userCodeType === 'recursive') {
      drawRecursiveTree(ctx, width, height);
    } else if (userCodeType === 'array') {
      drawArrayVisualization(ctx, width, height);
    } else if (userCodeType === 'search') {
      drawSearchVisualization(ctx, width, height);
    } else if (userCodeType === 'tree') {
      drawTreeVisualization(ctx, width, height);
    } else {
      drawGenericCodeVisualization(ctx, width, height);
    }
  };

  const drawRecursiveTree = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const centerX = width / 2;
    const startY = 80;
    const maxDepth = 5;
    const currentDepth = isRunning ? Math.min(Math.floor(animationStep / 4) + 1, maxDepth) : maxDepth;
    
    // Draw title
    ctx.fillStyle = '#ffffff';
    ctx.font = Math.min(18, width / 30) + 'px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Recursive Call Tree', centerX, 30);
    
    // Draw tree nodes
    const nodeRadius = Math.min(20, width / 40);
    for (let depth = 0; depth < currentDepth; depth++) {
      const nodesAtDepth = Math.pow(2, depth);
      const nodeSpacing = Math.min(width / (nodesAtDepth + 1), 120);
      const y = startY + depth * Math.min(80, height / 8);
      
      if (y > height - 60) break; // Don't draw if too close to bottom
      
      for (let i = 0; i < nodesAtDepth; i++) {
        const x = centerX + (i - (nodesAtDepth - 1) / 2) * nodeSpacing;
        const value = maxDepth - depth;
        
        // Draw connection lines to parent
        if (depth > 0) {
          const parentX = centerX;
          const parentY = startY + (depth - 1) * Math.min(80, height / 8);
          ctx.strokeStyle = '#8B5CF6';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(parentX, parentY + nodeRadius);
          ctx.lineTo(x, y - nodeRadius);
          ctx.stroke();
        }
        
        // Draw node
        const isActive = isRunning && depth === currentDepth - 1;
        ctx.fillStyle = isActive ? '#00BFFF' : '#8B5CF6';
        ctx.beginPath();
        ctx.arc(x, y, nodeRadius, 0, 2 * Math.PI);
        ctx.fill();
        
        // Draw node label
        ctx.fillStyle = '#ffffff';
        ctx.font = Math.min(12, nodeRadius) + 'px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`f(${value})`, x, y + 4);
        
        // Draw return value
        if (!isRunning || depth < currentDepth - 1) {
          ctx.fillStyle = '#39FF14';
          ctx.font = Math.min(10, nodeRadius * 0.8) + 'px monospace';
          if (y + 35 < height) {
            ctx.fillText(`= ${factorial(value)}`, x, y + 35);
          }
        }
      }
    }
    
    // Show current step info
    if (isRunning && analysisSteps.length > 0) {
      const stepIndex = Math.min(Math.floor(animationStep / 2), analysisSteps.length - 1);
      const currentStep = analysisSteps[stepIndex];
      
      ctx.fillStyle = '#00BFFF';
      ctx.font = Math.min(14, width / 40) + 'px monospace';
      ctx.textAlign = 'center';
      const text = `Step ${stepIndex + 1}: ${currentStep.title}`;
      if (text.length > width / 8) {
        ctx.fillText(text.substring(0, Math.floor(width / 8)) + '...', centerX, height - 40);
      } else {
        ctx.fillText(text, centerX, height - 40);
      }
    }
  };

  const drawArrayVisualization = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const arrayData = [5, 2, 8, 1, 9, 3];
    const barWidth = Math.min(width / arrayData.length, 100);
    const maxHeight = height * 0.6;
    const startX = (width - (barWidth * arrayData.length)) / 2;
    
    ctx.fillStyle = '#ffffff';
    ctx.font = Math.min(18, width / 30) + 'px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Array Processing', width / 2, 30);
    
    arrayData.forEach((value, index) => {
      const barHeight = (value / Math.max(...arrayData)) * maxHeight;
      const x = startX + index * barWidth + barWidth * 0.1;
      const y = height - barHeight - 80;
      
      const isActive = isRunning && index === animationStep % arrayData.length;
      const color = isActive ? '#00BFFF' : '#8B5CF6';
      
      ctx.fillStyle = color;
      ctx.fillRect(x, y, barWidth * 0.8, barHeight);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = Math.min(14, barWidth / 6) + 'px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(value.toString(), x + barWidth * 0.4, y + barHeight + 20);
      
      ctx.fillStyle = '#39FF14';
      ctx.font = Math.min(12, barWidth / 7) + 'px monospace';
      ctx.fillText(`[${index}]`, x + barWidth * 0.4, y - 10);
    });
  };

  const drawSearchVisualization = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const searchData = [1, 3, 5, 7, 9, 11, 13, 15];
    const barWidth = Math.min(width / searchData.length, 100);
    const maxHeight = height * 0.6;
    const startX = (width - (barWidth * searchData.length)) / 2;
    
    ctx.fillStyle = '#ffffff';
    ctx.font = Math.min(18, width / 30) + 'px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Search Algorithm', width / 2, 30);
    
    const target = 7;
    const targetIndex = searchData.indexOf(target);
    const currentCheck = isRunning ? animationStep % searchData.length : targetIndex;
    
    searchData.forEach((value, index) => {
      const barHeight = (value / Math.max(...searchData)) * maxHeight;
      const x = startX + index * barWidth + barWidth * 0.1;
      const y = height - barHeight - 80;
      
      let color = '#4B5563';
      if (index === targetIndex) {
        color = '#39FF14';
      } else if (isRunning && index === currentCheck) {
        color = '#00BFFF';
      } else if (isRunning && index < currentCheck) {
        color = '#8B5CF6';
      }
      
      ctx.fillStyle = color;
      ctx.fillRect(x, y, barWidth * 0.8, barHeight);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = Math.min(14, barWidth / 6) + 'px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(value.toString(), x + barWidth * 0.4, y + barHeight + 20);
    });
    
    ctx.fillStyle = '#39FF14';
    ctx.font = Math.min(16, width / 30) + 'px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(`Searching for: ${target}`, 20, 60);
  };

  const drawTreeVisualization = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.fillStyle = '#ffffff';
    ctx.font = Math.min(18, width / 30) + 'px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Tree Structure', width / 2, 30);
    
    const nodeRadius = Math.min(15, width / 50);
    const levelHeight = Math.min(70, height / 6);
    
    const nodes = [
      { x: width / 2, y: 80, value: '10' },
      { x: width / 3, y: 80 + levelHeight, value: '5' },
      { x: (2 * width) / 3, y: 80 + levelHeight, value: '15' },
      { x: width / 6, y: 80 + 2 * levelHeight, value: '3' },
      { x: width / 2.2, y: 80 + 2 * levelHeight, value: '7' },
      { x: (1.8 * width) / 3, y: 80 + 2 * levelHeight, value: '12' },
      { x: (5 * width) / 6, y: 80 + 2 * levelHeight, value: '18' }
    ];
    
    const currentNode = isRunning ? animationStep % nodes.length : -1;
    
    // Draw connections
    ctx.strokeStyle = '#8B5CF6';
    ctx.lineWidth = 2;
    const connections = [
      [0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]
    ];
    
    connections.forEach(([from, to]) => {
      if (nodes[from] && nodes[to]) {
        ctx.beginPath();
        ctx.moveTo(nodes[from].x, nodes[from].y + nodeRadius);
        ctx.lineTo(nodes[to].x, nodes[to].y - nodeRadius);
        ctx.stroke();
      }
    });
    
    // Draw nodes
    nodes.forEach((node, index) => {
      if (node.y + nodeRadius < height - 20) {
        const isActive = index === currentNode;
        ctx.fillStyle = isActive ? '#00BFFF' : '#8B5CF6';
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.fillStyle = '#ffffff';
        ctx.font = Math.min(12, nodeRadius) + 'px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(node.value, node.x, node.y + 4);
      }
    });
  };

  const drawGenericCodeVisualization = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.fillStyle = '#ffffff';
    ctx.font = Math.min(18, width / 30) + 'px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Code Execution Flow', width / 2, 30);
    
    if (isRunning && analysisSteps.length > 0) {
      const progress = (animationStep / 20) * 100;
      const currentStepIndex = Math.floor((animationStep / 20) * analysisSteps.length);
      const currentStep = analysisSteps[Math.min(currentStepIndex, analysisSteps.length - 1)];
      
      // Draw execution blocks
      const blockWidth = Math.min(80, width / 10);
      const blockHeight = 40;
      const spacing = Math.min(100, width / 8);
      const maxBlocksPerRow = Math.floor(width / spacing);
      const totalRows = Math.ceil(analysisSteps.length / maxBlocksPerRow);
      const startY = (height - totalRows * (blockHeight + 20)) / 2;
      
      analysisSteps.forEach((step, index) => {
        const row = Math.floor(index / maxBlocksPerRow);
        const col = index % maxBlocksPerRow;
        const blocksInRow = Math.min(maxBlocksPerRow, analysisSteps.length - row * maxBlocksPerRow);
        const startX = (width - (blocksInRow * spacing)) / 2;
        
        const x = startX + col * spacing;
        const y = startY + row * (blockHeight + 20);
        
        if (y + blockHeight < height - 40) {
          const isActive = index === currentStepIndex;
          const isCompleted = index < currentStepIndex;
          
          ctx.fillStyle = isActive ? '#00BFFF' : isCompleted ? '#39FF14' : '#8B5CF6';
          ctx.fillRect(x, y, blockWidth, blockHeight);
          
          ctx.fillStyle = '#ffffff';
          ctx.font = Math.min(14, blockWidth / 6) + 'px monospace';
          ctx.textAlign = 'center';
          ctx.fillText((index + 1).toString(), x + blockWidth / 2, y + 25);
          
          if (col > 0) {
            ctx.strokeStyle = '#8B5CF6';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x - spacing + blockWidth, y + blockHeight / 2);
            ctx.lineTo(x, y + blockHeight / 2);
            ctx.stroke();
          }
        }
      });
      
      // Show current step info
      ctx.fillStyle = '#00BFFF';
      ctx.font = Math.min(14, width / 40) + 'px monospace';
      ctx.textAlign = 'center';
      const title = currentStep.title;
      if (title.length > width / 8) {
        ctx.fillText(title.substring(0, Math.floor(width / 8)) + '...', width / 2, height - 60);
      } else {
        ctx.fillText(title, width / 2, height - 60);
      }
      
      // Progress bar
      const barWidth = Math.min(300, width * 0.8);
      const barHeight = 10;
      const barX = (width - barWidth) / 2;
      const barY = height - 30;
      
      ctx.fillStyle = '#374151';
      ctx.fillRect(barX, barY, barWidth, barHeight);
      
      ctx.fillStyle = '#00BFFF';
      ctx.fillRect(barX, barY, (barWidth * progress) / 100, barHeight);
    } else {
      ctx.fillStyle = '#8B5CF6';
      ctx.font = Math.min(16, width / 30) + 'px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('Click "Analyze with AI" first, then "Visualize"', width / 2, height / 2);
    }
  };

  const drawDefault = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.fillStyle = '#ffffff40';
    ctx.font = Math.min(24, width / 20) + 'px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Select an algorithm to visualize', width / 2, height / 2);
    
    ctx.font = Math.min(16, width / 30) + 'px monospace';
    ctx.fillText('Choose from the dropdown above or paste your own code', width / 2, height / 2 + 40);
  };

  const factorial = (n: number): number => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          Visualization Canvas
        </h3>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-neon animate-pulse' : 'bg-foreground/40'}`} />
          <span className="text-sm text-foreground/60">
            {isRunning ? 'Running' : 'Ready'}
          </span>
        </div>
      </div>
      
      <div className="flex-1 bg-gradient-to-br from-gray-900/20 to-gray-800/20 rounded-lg relative min-h-0">
        <canvas
          ref={canvasRef}
          className="w-full h-full rounded-lg"
          style={{ background: 'transparent' }}
        />
      </div>
    </div>
  );
};

export default VisualizationCanvas;
