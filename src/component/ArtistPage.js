// src/component/ArtistPage.js
import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/playercontext';
import { Heart } from 'lucide-react';

const ArtistPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { playSong, toggleLikeSong, likedSongs } = useContext(PlayerContext);

  const artistDetails = {
    1: {
      name: 'Michael Jackson',
      listeners: '27,852,501',
      img: '/mch.png',
      songs: [
        { title: 'Billie Jean', url: '/audios/billie-jean.mp3' },
        { title: 'Thriller', url: '/audios/thriller.mp3' },
      ],
    },
    2: {
      name: 'Kishore Kumar',
      listeners: '25,000,000',
      img: '/kishore.png',
      songs: [
        { title: 'Zindagi Ka Safar', url: '/audios/zindagi.mp3' },
        { title: 'Zindagi Ka Safar 2', url: '/audios/zindagi.mp3' },
      ],
    },
  };

  const artist = artistDetails[id];

  const handleDragStart = (event, song) => {
    event.dataTransfer.setData('song', JSON.stringify(song));
  };

  return (
    <div className="relative w-full p-6 pt-28 md:pt-32 lg:pr-72">
      <button onClick={() => navigate(-1)} className="text-white mb-4 bg-[#0E0E0E] p-2 rounded-lg hover:bg-[#151515]">
        &larr; Back
      </button>

      <div className="relative bg-cover bg-center rounded-2xl h-96 w-full mx-auto bg-gradient-to-t from-red-500 to-transparent overflow-hidden">
        <img src={artist.img} alt={`${artist.name} Background`} className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-60" />
      </div>

      <div className="absolute top-48 md:top-40 left-4 md:left-20 lg:left-32 p-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{artist.name}</h1>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 space-x-0 md:space-x-4 text-gray-300">
          <span className="text-base md:text-xl">{artist.listeners} monthly listeners</span>
          <span className="bg-blue-500 text-white text-xs md:text-sm px-2 py-1 rounded-full">Verified Artist</span>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-white mb-4">Songs</h2>
        <div className="space-y-4">
          {artist.songs.map((song, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg flex items-center justify-between"
              draggable
              onDragStart={(event) => handleDragStart(event, song)} // Enable drag functionality
            >
              <div>
                <h3 className="text-white">{song.title}</h3>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => playSong(song)} className="text-white bg-blue-500 px-3 py-1 rounded-md">
                  Play
                </button>
                <button onClick={() => toggleLikeSong(song)}>
                  <Heart className={`${
                    likedSongs.some((liked) => liked.title === song.title) ? 'text-red-500' : 'text-gray-400'
                  }`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;