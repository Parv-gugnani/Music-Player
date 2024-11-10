import React from 'react';

const NowPlaying = ({ song }) => {
  return (
    <div className="flex-grow">
      <h2 className="text-center text-white font-bold mb-4">Now Playing</h2>
      <div className="flex justify-center items-center mb-4">
        <img
          src={song ? song.img : '/placeholder.jpg'}
          alt={song ? song.title : 'No Song Playing'}
          className="w-full h-32 object-cover rounded-md"
        />
      </div>
      <div className="text-center text-white">
        <h3 className="text-lg font-semibold">{song ? song.title : 'No Song Playing'}</h3>
        <p className="text-sm">{song ? song.artist : ''}</p>
      </div>
    </div>
  );
};

export default NowPlaying;