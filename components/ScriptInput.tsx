import React, { useState } from 'react';

interface ScriptInputProps {
  onGenerate: (script: string) => void;
  loading: boolean;
}

export default function ScriptInput({ onGenerate, loading }: ScriptInputProps) {
  const [script, setScript] = useState('');

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Script</h2>
      <textarea
        className="w-full h-48 p-3 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
        placeholder="Enter your script or scene description here..."
        value={script}
        onChange={(e) => setScript(e.target.value)}
      />
      <button
        className={`w-full py-2 px-4 rounded font-medium text-white transition-colors ${
          loading || !script.trim()
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        onClick={() => onGenerate(script)}
        disabled={loading || !script.trim()}
      >
        {loading ? 'Generating...' : 'Generate Storyboard'}
      </button>
    </div>
  );
}
