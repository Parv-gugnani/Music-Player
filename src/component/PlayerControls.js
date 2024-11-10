import React from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

const PlayerControls = ({ isPlaying, onPlayPause, onNext, onPrevious }) => {
  return (
    <div className="flex flex-col items-center bg-[#1A1A1A] p-4 rounded-lg">
      <div className="flex justify-around items-center w-full mb-2">
        <button onClick={onPrevious}>
          <SkipBack className="text-white" size={24} />
        </button>
        <button onClick={onPlayPause} className="p-2 bg-blue-500 rounded-full">
          {isPlaying ? <Pause className="text-white" size={24} /> : <Play className="text-white" size={24} />}
        </button>
        <button onClick={onNext}>
          <SkipForward className="text-white" size={24} />
        </button>
      </div>
    </div>
  );
};

export default PlayerControls;