import React from 'react';
import { Shot } from '../types';

interface ShotCardProps {
  shot: Shot;
  index: number;
}

const ShotCard: React.FC<ShotCardProps> = ({ shot, index }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3 border-b border-gray-100 pb-2">
        <h3 className="font-bold text-lg text-gray-800">Shot #{index + 1}</h3>
        <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded">
          {shot.duration}
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Visual</h4>
          <p className="text-gray-800">{shot.visual}</p>
          <div className="mt-2 inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded border border-blue-100">
            📹 {shot.cameraAngle}
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Audio</h4>
          <p className="text-gray-800 italic">"{shot.audio}"</p>
        </div>
      </div>
    </div>
  );
};

export default ShotCard;