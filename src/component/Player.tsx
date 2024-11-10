import React, { useState } from 'react';
import { Bell, Play } from 'lucide-react';

const RightSidebar = () => {
  const [showNotifications, setShowNotifications] = useState(true);
  const [showPlaylists, setShowPlaylists] = useState(true);
  const [showRecentPlaylists, setShowRecentPlaylists] = useState(false);
  const [showPlayCard, setShowPlayCard] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-72 h-screen bg-[#631A1A] p-4 fixed right-0 top-0">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-[#F6F6F6]">Notifications</h2>
        <Bell className="text-[#F6F6F6] cursor-pointer" />
      </div>
      {showNotifications && (
        <div className="bg-[#6B0000] p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold text-[#F6F6F6]">New Music</h3>
            <div className="bg-[#DC4040] w-2 h-2 rounded-full"></div>
          </div>
          <p className="text-sm text-[#F6F6F6]">Beat It - Michael Jackson</p>
        </div>
      )}
      {showNotifications && (
        <div className="bg-[#6B0000] p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold text-[#F6F6F6]">Playlist Added</h3>
            <div className="bg-[#DC4040] w-2 h-2 rounded-full"></div>
          </div>
          <p className="text-sm text-[#F6F6F6]">200 songs</p>
        </div>
      )}
      {showNotifications && (
        <div className="bg-[#6B0000] p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold text-[#F6F6F6]">Playlist Shared</h3>
            <div className="bg-[#DC4040] w-2 h-2 rounded-full"></div>
          </div>
          <p className="text-sm text-[#F6F6F6]">To 8 users</p>
        </div>
      )}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-[#F6F6F6]">Recent Playlists</h2>
        <div
          className="text-[#F6F6F6] cursor-pointer"
          onClick={() => setShowRecentPlaylists(!showRecentPlaylists)}
        >
          {showRecentPlaylists ? 'Hide' : 'Show'}
        </div>
      </div>
      {showRecentPlaylists && (
        <div className="flex flex-wrap justify-between mb-4">
          <div className="bg-[#6B0000] p-4 rounded-lg w-1/2 mb-2">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2"></div>
            <p className="text-sm text-[#F6F6F6]">Doing the H...</p>
          </div>
          <div className="bg-[#6B0000] p-4 rounded-lg w-1/2 mb-2">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2"></div>
            <p className="text-sm text-[#F6F6F6]">To Relax</p>
          </div>
          <div className="bg-[#6B0000] p-4 rounded-lg w-1/2 mb-2">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2"></div>
            <p className="text-sm text-[#F6F6F6]">Pop World</p>
          </div>
          <div className="bg-[#6B0000] p-4 rounded-lg w-1/2 mb-2">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2"></div>
            <p className="text-sm text-[#F6F6F6]">Electric Pop</p>
          </div>
        </div>
      )}
      {showPlayCard && (
        <div className="bg-[#6B0000] p-4 rounded-lg mb-4">
          <h2 className="text-lg font-bold text-[#F6F6F6]">Now Playing</h2>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-24 mb-2"></div>
          <p className="text-lg font-bold text-[#F6F6F6]">Beat It</p>
          <p className="text-sm text-[#CFC5C5]">Michael Jackson</p>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <Play
                className={`text-[#F6F6F6] cursor-pointer ${
                  isPlaying ? 'hidden' : 'block'
                }`}
                onClick={() => setIsPlaying(true)}
              />
              <div
                className={`text-[#F6F6F6] cursor-pointer ${
                  isPlaying ? 'block' : 'hidden'
                }`}
                onClick={() => setIsPlaying(false)}
              >
                Pause
              </div>
              <div className="text-[#F6F6F6] cursor-pointer ml-2">Prev</div>
            </div>
            <div className="flex items-center">
              <div className="text-[#F6F6F6] cursor-pointer mr-2">Next</div>
              <div className="text-[#F6F6F6] cursor-pointer">Repeat</div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-[#F6F6F6]">2:15</p>
            <div className="w-48 h-2 bg-[#F6F6F6] rounded-full relative">
              <div className="absolute top-0 left-0 h-2 bg-[#DC4040] w-1/2 rounded-full"></div>
            </div>
            <p className="text-sm text-[#F6F6F6]">4:18</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSidebar;