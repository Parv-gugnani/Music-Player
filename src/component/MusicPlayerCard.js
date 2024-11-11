// src/component/MusicPlayerCard.js
import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

const MusicPlayerCard = ({ currentSong, isPlaying, onPlayPause, onNext, onPrevious }) => {
  const [audio] = useState(new Audio(currentSong ? currentSong.url : null)); // Instantiate audio
  const [progress, setProgress] = useState(0);

  // Update audio source when song changes
  useEffect(() => {
    if (currentSong) {
      audio.src = currentSong.url;
      if (isPlaying) {
        audio.play();
      }
    }
  }, [currentSong, audio]);

  // Handle play/pause state
  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    const handleTimeUpdate = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [isPlaying, audio]);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden dark:bg-zinc-900 w-full max-w-[320px] mx-auto">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <img src={currentSong ? currentSong.img : '/placeholder.jpg'} alt={currentSong ? currentSong.title : 'No Song'} className="h-10 w-10 rounded-md mr-3" />
          <div>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{currentSong ? currentSong.title : 'Select a Song'}</h3>
            <p className="text-gray-500 dark:text-gray-400">{currentSong ? currentSong.artist : ''}</p>
          </div>
        </div>
        <button onClick={onPlayPause} className="p-2">
          {isPlaying ? <Pause className="text-gray-700 dark:text-gray-200" size={24} /> : <Play className="text-gray-700 dark:text-gray-200" size={24} />}
        </button>
      </div>

      <div className="flex items-center px-6 py-2">
        <button onClick={onPrevious}><SkipBack className="text-gray-500" size={20} /></button>
        <input type="range" min="0" max="100" value={progress} className="mx-3 flex-grow" onChange={() => {}} readOnly />
        <button onClick={onNext}><SkipForward className="text-gray-500" size={20} /></button>
      </div>
    </div>
  );
};

export default MusicPlayerCard;