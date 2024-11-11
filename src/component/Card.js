// src/component/Card.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, HeartFill } from 'lucide-react';

const LikedSongCard = ({ song, isLiked, onLikeToggle }) => {
  return (
    <div
      className="flex items-center justify-between bg-gray-100 dark:bg-gray-900 border-l-4 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-100 p-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-200 dark:hover:bg-blue-800 transform hover:scale-105"
    >
      <Link to={`/song/${song.id}`} className="flex items-center flex-grow">
        <div className="flex-shrink-0 mr-3">
          <svg
            className="h-6 w-6 text-blue-600"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200">{song.title}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{song.artist}</p>
        </div>
      </Link>
      <button onClick={onLikeToggle} className="text-red-500">
        {isLiked ? <HeartFill /> : <Heart />}
      </button>
    </div>
  );
};

export default LikedSongCard;