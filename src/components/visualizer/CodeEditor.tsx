
import { useEffect, useRef } from 'react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  algorithm: string;
}

const CodeEditor = ({ value, onChange, algorithm }: CodeEditorProps) => {
  const editorRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="glass-panel h-full flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-glass-border">
        <h3 className="text-lg font-semibold text-foreground">Code Editor</h3>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      
      <div className="flex-1 relative overflow-hidden">
        {/* Line numbers */}
        <div className="absolute left-0 top-0 w-12 h-full bg-gray-900/30 border-r border-glass-border z-10 overflow-hidden">
          <div className="p-4 text-foreground/40 font-mono text-sm select-none">
            {value.split('\n').map((_, index) => (
              <div key={index} className="h-[1.5em] flex items-center justify-end pr-2">
                {index + 1}
              </div>
            ))}
          </div>
        </div>
        
        {/* Code textarea */}
        <textarea
          ref={editorRef}
          value={value}
          onChange={handleChange}
          className="w-full h-full pl-16 pr-4 py-4 bg-transparent text-foreground font-mono text-sm resize-none outline-none"
          placeholder="// Paste your algorithm code here or select from examples above
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}"
          style={{
            lineHeight: '1.5',
            tabSize: '2',
            fontFamily: 'Consolas, Monaco, "Courier New", monospace'
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
