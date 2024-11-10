import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (searchText) {
      console.log('Searching for:', searchText);
    }
  };

  return (
    <div className="relative w-64 h-10 bg-[#270000] rounded-full flex items-center px-4 shadow-md">
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="bg-transparent text-white placeholder-gray-300 focus:outline-none w-full"
      />
      <button onClick={handleSearch} className="absolute right-3 text-gray-300">
        <Search size={18} />
      </button>
    </div>
  );
};

export default SearchBar;