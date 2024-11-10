import React from 'react';
import { Link } from 'react-router-dom';


const artists = [
  { id: 1, name: 'Michael Jackson', img: 'mch.png' },
  { id: 2, name: 'Kishore Kumar', img: 'kishore.png' },
  { id: 3, name: 'Drake', img: 'mch.png' },
  { id: 4, name: 'Taylor Swift', img: 'mch.png' },
  { id: 5, name: 'Ed Sheeran', img: 'mch.png' },
  { id: 6, name: 'Beyoncé', img: 'mch.png' },
  { id: 7, name: 'The Weeknd', img: 'mch.png' },
  { id: 8, name: 'Bruno Mars', img: 'mch.png' },
];

const Music = () => {
  return (
    <div className="p-6 pt-24">
      <h1 className="text-2xl font-bold mb-4">Artists</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </div>
  );
};

export default Music;