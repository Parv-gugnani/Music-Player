import React from 'react';
import SearchBar from './Searchbar';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react'; // Add lucide-react for the search icon

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-[#0E0E0E] px-4 flex items-center justify-between z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="./music.png" alt="Logo" className="h-auto w-20 sm:w-40" />
        </Link>
      </div>

      {/* Center Links */}
      <div className="flex-grow hidden sm:flex justify-center space-x-6 md:space-x-10">
        <Link to="/" className="text-white opacity-70 hover:opacity-100">Music</Link>
        <Link to="/podcast" className="text-white opacity-70 hover:opacity-100">Podcast</Link>
        <Link to="/live" className="text-white opacity-70 hover:opacity-100">Live</Link>
        <Link to="/radio" className="text-white opacity-70 hover:opacity-100">Radio</Link>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-end w-1/3 pr-4">
        {/* Show Search Icon on small screens */}
        <div className="block sm:hidden">
          <button>
            <Search className="text-white" size={20} />
          </button>
        </div>
        {/* Full Search Bar for larger screens */}
        <div className="hidden sm:block w-full">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;