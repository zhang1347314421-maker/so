import React from 'react';
import { StoryboardResponse } from '../types';
import ShotCard from './ShotCard';

interface ResultFeedProps {
  result: StoryboardResponse | null;
}

export default function ResultFeed({ result }: ResultFeedProps) {
  if (!result) return (
    <div className="flex items-center justify-center h-full text-gray-400 border-2 border-dashed border-gray-200 rounded-lg p-12">
      <p>Enter a script to generate a storyboard</p>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">{result.title}</h2>
        <p className="text-blue-800">{result.summary}</p>
      </div>
      
      <div className="space-y-4">
        {result.shots.map((shot, idx) => (
          <ShotCard key={shot.id || idx} shot={shot} index={idx} />
        ))}
      </div>
    </div>
  );
}
