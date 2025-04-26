
import React from 'react';
import { Card } from '@/components/ui/card';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
  height?: string;
  readOnly?: boolean;
}

// A simplified code editor component
// In a real application, you would integrate a library like Monaco Editor or CodeMirror
const CodeEditor = ({ value, onChange, language = 'javascript', height = '500px', readOnly = false }: CodeEditorProps) => {
  return (
    <Card className="border border-border overflow-hidden">
      <div className="bg-muted/50 p-2 border-b border-border flex justify-between">
        <div className="text-sm font-medium">{language.toUpperCase()} Editor</div>
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ 
          height, 
          fontFamily: 'monospace',
          resize: 'none',
          tabSize: 2
        }}
        className="w-full p-4 focus:outline-none focus:ring-0 bg-background"
        spellCheck={false}
        readOnly={readOnly}
      />
    </Card>
  );
};

export default CodeEditor;
