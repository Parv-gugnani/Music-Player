import React from 'react';
import SearchBar from './Searchbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-[#0E0E0E] px-4 flex items-center justify-between">
      
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="./music.png" alt="Logo" className="h-auto w-40" />
        </Link>
      </div>

      <div className="flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
        <Link to="/" className="text-white opacity-70 hover:opacity-100">Music</Link>
        <Link to="/podcast"  className="text-white opacity-70 hover:opacity-100">Podcast</Link>
        <Link to="/live" className="text-white opacity-70 hover:opacity-100">Live</Link>
        <Link to="/radio" className="text-white opacity-70 hover:opacity-100">Radio</Link>
      </div>

      <div className="flex items-center justify-end w-1/3 pr-4">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;