
<div align="center">

# 🚀 VisuAlgo

### Transform Your Code Into Vivid Visual Animations

*Making algorithms accessible and engaging for learners worldwide*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Try_Now-00D9FF?style=for-the-badge)](https://lovable.dev/projects/c520fa67-f92b-48d4-b116-d251cb7b99ca)
[![Built with Lovable](https://img.shields.io/badge/Built_with-Lovable-FF6B6B?style=for-the-badge)](https://lovable.dev)

![VisuAlgo Preview](/background.png)

</div>

---

## ✨ What is VisuAlgo?

VisuAlgo is a revolutionary **algorithm visualization platform** that transforms complex code into beautiful, interactive animations. Whether you're a student learning data structures, a teacher explaining algorithms, or a developer debugging your code, VisuAlgo makes understanding algorithms intuitive and engaging.

### 🎯 Key Features

- **🎨 Interactive Visualizations** - Watch your algorithms come to life with smooth, 60fps animations
- **📝 Code Editor** - Built-in syntax highlighting and real-time error detection
- **🧠 AI-Powered Analysis** - Intelligent code analysis that breaks down your algorithm step-by-step
- **🌍 Universal Support** - Paste any algorithm and get instant visualizations
- **📱 Responsive Design** - Perfect experience on desktop, tablet, and mobile
- **⚡ Real-time Updates** - See changes instantly as you modify your code

---

## 🚀 Quick Start

### 1. **Choose Your Algorithm**
Select from our library of pre-built algorithms or paste your own code:
- 🔄 **Sorting Algorithms** (Bubble Sort, Quick Sort, Merge Sort)
- 🔍 **Search Algorithms** (Binary Search, Linear Search)
- 🌳 **Tree Traversals** (In-order, Pre-order, Post-order)
- 📊 **Graph Algorithms** (DFS, BFS)

### 2. **Customize Your Input**
- Use default datasets for quick testing
- Modify existing code implementations
- Paste your own algorithm implementations

### 3. **Visualize & Learn**
Click "Visualize" and watch your algorithm execute with:
- Step-by-step breakdowns
- Color-coded comparisons
- Animation speed controls
- Interactive elements

---

## 🛠️ Technology Stack

<div align="center">

| Frontend | Styling | Build Tool | AI Integration |
|----------|---------|------------|----------------|
| ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) | ![AI Powered](https://img.shields.io/badge/AI_Powered-FF6B6B?style=for-the-badge&logo=openai&logoColor=white) |

</div>

### Core Technologies
- **React 18** - Modern UI framework with hooks and concurrent features
- **TypeScript** - Type-safe development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Vite** - Lightning-fast build tool and development server
- **Shadcn/UI** - Beautiful, accessible component library
- **Lucide React** - Comprehensive icon library

---

## 🎮 Supported Algorithms

<details>
<summary><strong>📊 Sorting Algorithms</strong></summary>

| Algorithm | Time Complexity | Space Complexity | Visualization Features |
|-----------|----------------|------------------|----------------------|
| **Bubble Sort** | O(n²) | O(1) | Color-coded comparisons, swap animations |
| **Quick Sort** | O(n log n) | O(log n) | Pivot highlighting, partitioning process |
| **Merge Sort** | O(n log n) | O(n) | Split/merge animations, recursive visualization |
| **Selection Sort** | O(n²) | O(1) | Minimum element tracking, sorted region |
| **Insertion Sort** | O(n²) | O(1) | Element insertion, shifting animations |

</details>

<details>
<summary><strong>🔍 Search Algorithms</strong></summary>

| Algorithm | Time Complexity | Space Complexity | Visualization Features |
|-----------|----------------|------------------|----------------------|
| **Binary Search** | O(log n) | O(1) | Search range narrowing, middle element highlighting |
| **Linear Search** | O(n) | O(1) | Sequential element checking, progress tracking |
| **Depth-First Search** | O(V + E) | O(V) | Stack visualization, path highlighting |
| **Breadth-First Search** | O(V + E) | O(V) | Queue visualization, level-by-level traversal |

</details>

<details>
<summary><strong>🌳 Tree Algorithms</strong></summary>

| Algorithm | Time Complexity | Space Complexity | Visualization Features |
|-----------|----------------|------------------|----------------------|
| **In-order Traversal** | O(n) | O(h) | Node visit order, recursive call stack |
| **Pre-order Traversal** | O(n) | O(h) | Root-first traversal, tree structure |
| **Post-order Traversal** | O(n) | O(h) | Children-first traversal, bottom-up processing |
| **Binary Search Tree** | O(log n) | O(1) | Node insertion, search path visualization |

</details>

---

## 💻 Local Development

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/visualgo.git

# Navigate to project directory
cd visualgo

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run type-check   # Run TypeScript type checking
```

---

## 🎨 Customization

### Adding Custom Algorithms

VisuAlgo supports custom algorithm integration. Here's a simple example:

```javascript
async function customSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Highlight elements being compared
    visualizer.compare(i, i + 1);
    await visualizer.delay(200);
    
    if (arr[i] > arr[i + 1]) {
      // Animate the swap
      visualizer.swap(i, i + 1);
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      await visualizer.delay(200);
    }
  }
}
```

### Visualization API

- `visualizer.compare(index1, index2)` - Highlight comparison
- `visualizer.swap(index1, index2)` - Animate element swap
- `visualizer.delay(ms)` - Add animation pause
- `visualizer.markSorted(index)` - Mark element as sorted

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute
- 🐛 **Bug Reports** - Found a bug? Let us know!
- ✨ **Feature Requests** - Have an idea? We'd love to hear it!
- 📖 **Documentation** - Help improve our docs
- 🔧 **Code Contributions** - Submit pull requests

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Support

<div align="center">

**Love VisuAlgo? Give us a star!** ⭐

[![GitHub stars](https://img.shields.io/github/stars/your-username/visualgo?style=social)](https://github.com/your-username/visualgo/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/your-username/visualgo?style=social)](https://github.com/your-username/visualgo/network/members)

### Connect With Us

[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/visualgo)
[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/visualgo)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contact@visualgo.dev)

</div>

---

<div align="center">

**Made with ❤️ for computer science education**

*Transform your understanding of algorithms, one visualization at a time.*

</div>
