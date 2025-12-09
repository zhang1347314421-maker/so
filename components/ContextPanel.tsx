import React from 'react';
import { ContextSettings } from '../types';

interface ContextPanelProps {
  settings: ContextSettings;
  onChange: (settings: ContextSettings) => void;
}

export default function ContextPanel({ settings, onChange }: ContextPanelProps) {
  const handleChange = (field: keyof ContextSettings, value: string) => {
    onChange({ ...settings, [field]: value });
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Project Context</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Genre</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="e.g. Sci-Fi, Comedy"
            value={settings.genre}
            onChange={(e) => handleChange('genre', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Tone</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="e.g. Dark, Upbeat"
            value={settings.tone}
            onChange={(e) => handleChange('tone', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Visual Style</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="e.g. Handheld, Cinematic"
            value={settings.style}
            onChange={(e) => handleChange('style', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
