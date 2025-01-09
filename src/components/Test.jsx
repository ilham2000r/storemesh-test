import React, { useState } from 'react';
import { Grip, Search, Menu, X } from 'lucide-react';
import Logo from '../assets/Logo.png';

const Navbar = ({ onSearchChange, onFilterToggle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  const toggleSearch = () => {
    const isOpen = !searchOpen;
    setSearchOpen(isOpen);
    onFilterToggle(isOpen); // ส่งค่า isOpen ไปยัง Index
  };

  return (
    <div className="relative">
      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <img className="w-8" src={Logo} alt="Logo" />
            <span className="font-semibold text-xl">Storemesh</span>
          </div>
          <div className="flex items-center gap-4">
            <Search
              className="w-5 h-5"
              onClick={toggleSearch} // เรียก toggleSearch เมื่อคลิก
            />
          </div>
        </div>

        {/* Search Input */}
        {searchOpen && (
          <div className="relative flex items-center transition-all transform duration-300 ease-in-out translate-y-0">
            <input
              className="pl-3 p-2 bg-zinc-200 m-3 rounded-md w-screen"
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <X
              className="absolute right-5 w-5 cursor-pointer"
              onClick={toggleSearch}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
