import React, { useState } from 'react';
import ContextPanel from './ContextPanel';
import ScriptInput from './ScriptInput';
import ResultFeed from './ResultFeed';
import { generateStoryboard } from '../services/geminiService';
import { ContextSettings, StoryboardResponse } from '../types';

export default function Dashboard() {
  const [context, setContext] = useState<ContextSettings>({ genre: '', tone: '', style: '' });
  const [result, setResult] = useState<StoryboardResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (script: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await generateStoryboard(script, context);
      setResult(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">AI Storyboard Generator</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <ContextPanel settings={context} onChange={setContext} />
          <ScriptInput onGenerate={handleGenerate} loading={loading} />
          {error && <div className="p-4 bg-red-100 text-red-700 rounded border border-red-200">{error}</div>}
        </div>
        <div className="lg:col-span-2">
          <ResultFeed result={result} />
        </div>
      </div>
    </div>
  );
}
