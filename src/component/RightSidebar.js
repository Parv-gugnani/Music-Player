// src/component/RightSidebar.js
import React, { useContext, useState } from 'react';
import { PlayerContext } from '../context/playercontext';
import { Play, Pause, SkipBack, SkipForward, X } from 'lucide-react';

const RightSidebar = () => {
  const { currentSong, isPlaying, togglePlayPause, nextSong, prevSong } = useContext(PlayerContext);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleDrop = (event) => {
    event.preventDefault();
    const songData = event.dataTransfer.getData('song');
    if (songData) {
      const song = JSON.parse(songData);
      togglePlayPause(song);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
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

      {/* Sidebar content */}
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
        <div className="flex-grow">
          <h2 className="text-center text-white font-bold mb-4">Now Playing</h2>
          <div className="flex justify-center items-center mb-4">
            <img
              src={currentSong ? currentSong.img : '/placeholder.jpg'}
              alt={currentSong ? currentSong.title : 'No Song Playing'}
              className="w-full h-32 object-cover rounded-md"
            />
          </div>

          <div className="text-center text-white mb-4">
            <h3 className="text-lg font-semibold">{currentSong ? currentSong.title : 'No Song Playing'}</h3>
            <p className="text-sm">{currentSong ? currentSong.artist : ''}</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center bg-[#1A1A1A] p-4 rounded-lg">
          <div className="flex justify-around items-center w-full mb-2">
            <button onClick={prevSong}>
              <SkipBack className="text-white" size={24} />
            </button>
            <button onClick={() => togglePlayPause(currentSong)} className="p-2 bg-blue-500 rounded-full">
              {isPlaying ? <Pause className="text-white" size={24} /> : <Play className="text-white" size={24} />}
            </button>
            <button onClick={nextSong}>
              <SkipForward className="text-white" size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;