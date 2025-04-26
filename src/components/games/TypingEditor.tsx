
import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface TypingEditorProps {
  targetText: string;
  onChange: (value: string) => void;
  value: string;
  readOnly?: boolean;
  height?: string;
}

const TypingEditor = ({ targetText, onChange, value, readOnly = false, height = '500px' }: TypingEditorProps) => {
  const [lineNumbers, setLineNumbers] = useState<string[]>([]);

  useEffect(() => {
    const lines = targetText.split('\n');
    setLineNumbers(Array.from({ length: lines.length }, (_, i) => String(i + 1)));
  }, [targetText]);

  return (
    <div className="grid grid-cols-[auto,1fr] gap-2">
      <Card className="p-4 bg-muted">
        <div className="text-right font-mono text-sm text-muted-foreground select-none">
          {lineNumbers.map((num) => (
            <div key={num}>{num}</div>
          ))}
        </div>
      </Card>
      <Card className="relative">
        <pre className="absolute inset-0 font-mono text-sm p-4 pointer-events-none opacity-50 whitespace-pre-wrap overflow-auto">
          {targetText}
        </pre>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="font-mono text-sm p-4 bg-transparent w-full h-full resize-none focus:outline-none"
          style={{ height, caretColor: 'currentColor' }}
          spellCheck={false}
          readOnly={readOnly}
        />
      </Card>
    </div>
  );
};

export default TypingEditor;
