
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface AlgorithmSelectorProps {
  selectedAlgorithm: string;
  onAlgorithmChange: (algorithm: string) => void;
  onCodeChange: (code: string) => void;
}

const AlgorithmSelector = ({ selectedAlgorithm, onAlgorithmChange, onCodeChange }: AlgorithmSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const algorithms = {
    pasteCode: {
      name: "Paste Your Own Code",
      code: `// Paste your algorithm code here
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// Example usage
console.log(factorial(5));`
    },
    bubbleSort: {
      name: "Bubble Sort",
      code: `function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Example usage
const data = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(data);`
    },
    quickSort: {
      name: "Quick Sort",
      code: `function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Example usage
const data = [64, 34, 25, 12, 22, 11, 90];
quickSort(data);`
    },
    binarySearch: {
      name: "Binary Search",
      code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid; // Found target
    } else if (arr[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }
  
  return -1; // Target not found
}

// Example usage
const sortedData = [11, 12, 22, 25, 34, 64, 90];
const result = binarySearch(sortedData, 25);`
    },
    fibonacci: {
      name: "Fibonacci (Recursive)",
      code: `function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciSeries(count) {
  const series = [];
  for (let i = 0; i < count; i++) {
    series.push(fibonacci(i));
  }
  return series;
}

// Example usage
const result = fibonacciSeries(10);
console.log(result); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`
    },
    binaryTree: {
      name: "Binary Tree Traversal",
      code: `class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function inorderTraversal(root) {
  const result = [];
  
  function traverse(node) {
    if (node) {
      traverse(node.left);   // Visit left subtree
      result.push(node.val); // Visit root
      traverse(node.right);  // Visit right subtree
    }
  }
  
  traverse(root);
  return result;
}

// Example usage
const root = new TreeNode(4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6, new TreeNode(5), new TreeNode(7))
);
console.log(inorderTraversal(root)); // [1, 2, 3, 4, 5, 6, 7]`
    },
    bst: {
      name: "Binary Search Tree",
      code: `class BST {
  constructor() {
    this.root = null;
  }
  
  insert(val) {
    const newNode = { val, left: null, right: null };
    
    if (!this.root) {
      this.root = newNode;
      return;
    }
    
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }
  
  search(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) return true;
      current = val < current.val ? current.left : current.right;
    }
    return false;
  }
}

// Example usage
const bst = new BST();
[8, 3, 10, 1, 6, 14, 4, 7, 13].forEach(val => bst.insert(val));
console.log(bst.search(6)); // true`
    },
    avlTree: {
      name: "AVL Tree",
      code: `class AVLNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  getHeight(node) {
    return node ? node.height : 0;
  }
  
  getBalance(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }
  
  updateHeight(node) {
    if (node) {
      node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }
  }
  
  rotateRight(y) {
    const x = y.left;
    const T2 = x.right;
    
    x.right = y;
    y.left = T2;
    
    this.updateHeight(y);
    this.updateHeight(x);
    
    return x;
  }
  
  rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;
    
    y.left = x;
    x.right = T2;
    
    this.updateHeight(x);
    this.updateHeight(y);
    
    return y;
  }
  
  insert(node, val) {
    if (!node) return new AVLNode(val);
    
    if (val < node.val) {
      node.left = this.insert(node.left, val);
    } else if (val > node.val) {
      node.right = this.insert(node.right, val);
    } else {
      return node;
    }
    
    this.updateHeight(node);
    const balance = this.getBalance(node);
    
    // Left Left Case
    if (balance > 1 && val < node.left.val) {
      return this.rotateRight(node);
    }
    
    // Right Right Case
    if (balance < -1 && val > node.right.val) {
      return this.rotateLeft(node);
    }
    
    // Left Right Case
    if (balance > 1 && val > node.left.val) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }
    
    // Right Left Case
    if (balance < -1 && val < node.right.val) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }
    
    return node;
  }
}

// Example usage
const avl = new AVLTree();
let root = null;
[10, 20, 30, 40, 50, 25].forEach(val => {
  root = avl.insert(root, val);
});`
    }
  };

  const handleAlgorithmSelect = (algorithmKey: string) => {
    onAlgorithmChange(algorithmKey);
    onCodeChange(algorithms[algorithmKey as keyof typeof algorithms].code);
    setIsOpen(false);
  };

  const currentAlgorithm = algorithms[selectedAlgorithm as keyof typeof algorithms];

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full justify-between glass-panel border-glass-border hover:border-electric/50"
        variant="outline"
      >
        <span>Algorithm: {currentAlgorithm?.name || 'Select Algorithm'}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-panel border border-glass-border rounded-xl z-50 max-h-60 overflow-y-auto">
          {Object.entries(algorithms).map(([key, algorithm]) => (
            <button
              key={key}
              onClick={() => handleAlgorithmSelect(key)}
              className={`w-full text-left px-4 py-3 hover:bg-electric/10 transition-colors first:rounded-t-xl last:rounded-b-xl ${
                selectedAlgorithm === key ? 'bg-electric/20 text-electric' : 'text-foreground'
              }`}
            >
              {algorithm.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AlgorithmSelector;
