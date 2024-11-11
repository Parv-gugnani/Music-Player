// src/pages/music.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PlayerContext } from '../context/playercontext';
import { Heart } from 'lucide-react';

const artists = [
  { id: 1, name: 'Michael Jackson', img: 'mch.png' },
  { id: 2, name: 'Kishore Kumar', img: 'kishore.png' },
  // other artists...
];

const Music = () => {
  const { likedSongs, playSong, addLikedSong, removeLikedSong } = useContext(PlayerContext);

  const toggleLike = (song) => {
    const isLiked = likedSongs.some((likedSong) => likedSong.title === song.title);
    isLiked ? removeLikedSong(song) : addLikedSong(song);
  };

  const handleDragStart = (event, song) => {
    event.dataTransfer.setData('song', JSON.stringify(song));
  };

  return (
    <div className="p-6 pt-24 md:pr-72">
      <h1 className="text-2xl font-bold mb-4">Artists</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {artists.map((artist) => (
          <Link
            to={`/artist/${artist.id}`}
            key={artist.id}
            className="bg-[#0E0E0E] p-4 rounded-lg hover:bg-[#171717] transition"
          >
            <img
              src={artist.img}
              alt={artist.name}
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <h2 className="text-lg font-semibold">{artist.name}</h2>
          </Link>
        ))}
      </div>

      <h2 className="text-xl font-semibold text-white mb-4">Liked Songs</h2>
      <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
        {likedSongs.length > 0 ? (
          likedSongs.map((song, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg flex items-center justify-between"
              draggable
              onDragStart={(event) => handleDragStart(event, song)}
            >
              <div>
                <h3 className="text-white font-semibold">{song.title}</h3>
              </div>
              <div className="flex items-center space-x-3">
                <button onClick={() => playSong(song)} className="text-white bg-blue-500 px-3 py-1 rounded-md">
                  Play
                </button>
                <button onClick={() => toggleLike(song)}>
                  <Heart
                    className={`${
                      likedSongs.some((liked) => liked.title === song.title)
                        ? 'text-red-500'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No liked songs yet. Start liking some!</p>
        )}
      </div>
    </div>
  );
};

export default Music;