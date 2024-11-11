// src/component/RightSidebar.js
import React, { useContext, useState } from 'react';
import { PlayerContext } from '../context/playercontext';
import { Play, Pause, SkipBack, SkipForward, X } from 'lucide-react';

const RightSidebar = () => {
  const { currentSong, isPlaying, playSong, togglePlayPause, nextSong, prevSong, progress, duration, setProgress } = useContext(PlayerContext);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleDrop = (event) => {
    event.preventDefault();
    const songData = event.dataTransfer.getData('song');
    if (songData) {
      const song = JSON.parse(songData);
      playSong(song); // Play the dropped song
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Calculate progress percentage for progress bar
  const progressPercent = (progress / duration) * 100 || 0;

  const handleSliderChange = (e) => {
    const newProgress = (e.target.value / 100) * duration;
    setProgress(newProgress); // Update song progress based on slider
  };

  return (
    <>
      {/* Toggle button for mobile view */}
      <button
        className="md:hidden fixed bottom-4 right-4 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
      >
        {isSidebarVisible ? <X size={20} /> : <Play size={20} />}
      </button>

      <div
        className={`fixed right-0 top-16 h-[calc(100vh-4rem)] bg-[#0E0E0E] p-4 flex flex-col justify-between transition-transform duration-300 ${
          isSidebarVisible ? 'translate-x-0' : 'translate-x-full'
        } md:translate-x-0 md:w-64 w-full`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          minWidth: '200px',
          maxWidth: '300px',
          overflowY: 'auto',
        }}
      >
        {/* Mini Music Player Card */}
        <div className="bg-[#2C2C2C] rounded-lg shadow-lg p-4 mt-auto">
          <h3 className="text-center text-white font-semibold mb-2">Now Playing</h3>
          <div className="flex items-center mb-4">
            <img
              src={currentSong ? currentSong.img : '/placeholder.jpg'}
              alt={currentSong ? currentSong.title : 'No Song Playing'}
              className="w-16 h-16 rounded-md object-cover mr-3"
            />
            <div>
              <h4 className="text-white font-bold text-sm">{currentSong ? currentSong.title : 'No Song Playing'}</h4>
              <p className="text-gray-400 text-xs">{currentSong ? currentSong.artist : ''}</p>
            </div>
          </div>

          {/* Progress Bar with Seek Slider */}
          <input
            type="range"
            value={progressPercent}
            max="100"
            className="w-full h-1 bg-gray-700 rounded appearance-none"
            style={{ backgroundSize: `${progressPercent}% 100%` }}
            onChange={handleSliderChange}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>{formatTime(progress)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Player Controls */}
          <div className="flex justify-around items-center mt-3">
            <button onClick={prevSong}>
              <SkipBack className="text-white" size={20} />
            </button>
            <button onClick={togglePlayPause} className="p-2 rounded-full bg-blue-500">
              {isPlaying ? <Pause className="text-white" size={20} /> : <Play className="text-white" size={20} />}
            </button>
            <button onClick={nextSong}>
              <SkipForward className="text-white" size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// Helper function to format time
const formatTime = (timeInSeconds) => {
  if (!timeInSeconds) return "0:00";
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export default RightSidebar;