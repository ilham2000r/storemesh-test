import React, { useState } from "react"
import { Grip, Search, Menu, X } from "lucide-react"
import Logo from "../assets/Logo.png"
const Navbar = ({ onSearchChange, onFilterToggle }) => {
  const [accIsOpen, setAccIsOpen] = useState(false)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [selectedMenu, setSelectedMenu] = useState("menu1")

  const [searchQuery, setSearchQuery] = useState('')

  const [searchOpen, setSearchOpen] = useState(false)


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    onSearchChange(e.target.value)
  }
  
  const handleLogout = () =>{
    window.location.reload()
  }
  
  const handleClick = (menu) => {
    setSelectedMenu(menu)
  }

  const toggleSearch = () => {
    const isOpen = !searchOpen;
    setSearchOpen(isOpen);
    onFilterToggle(isOpen)
    setMobileMenuOpen(false)
  };

  console.log("search ",searchOpen);
  

  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="flex gap-10 p-5">
          <div 
            className="flex gap-2 justify-center w-1/5 my-auto hover:cursor-pointer"
            onClick={handleLogout}>
            <span className="font-semibold text-2xl flex items-center">
              <img className="w-12" src={Logo} alt="Logo" />
            </span>
            <span className="font-semibold text-2xl flex items-center">
              Storemesh
            </span>
          </div>
          <div className="flex flex-1 gap-3 w-1/4 my-auto">
            <div
              className={`text-lg cursor-pointer 
                ${
                  selectedMenu === "menu1"
                    ? "border-b-4 border-blue-500 duration-200"
                    : ""
                }`}
              onClick={() => handleClick("menu1")}
            >
              Menu 1
            </div>
            <div
              className={`text-lg cursor-pointer 
                ${
                  selectedMenu === "menu2"
                    ? "border-b-4 border-blue-500 duration-200"
                    : ""
                }`}
              onClick={() => handleClick("menu2")}
            >
              Menu 2
            </div>
            <div
              className={`text-lg cursor-pointer 
                ${
                  selectedMenu === "menu3"
                    ? "border-b-4 border-blue-500 duration-200"
                    : ""
                }`}
              onClick={() => handleClick("menu3")}
            >
              Menu 3
            </div>
          </div>
          <div className="flex flex-1 gap-5 justify-end">
            <div className="flex">
              <input
                value={searchQuery} 
                onChange={handleSearchChange} 
                className="bg-zinc-200 my-auto p-1 px-2 rounded-md shadow-inner"
                type="text" 
                placeholder="Search" 
              />
            </div>
            <div className="flex gap-5 relative">
              <Grip className="my-auto" />
              <div>
                <div
                  onMouseDown={() => setAccIsOpen(!accIsOpen)}
                  className="px-4 py-2 bg-slate-200 rounded-full flex items-center hover:cursor-pointer"
                >
                  <p className="font-semibold text-xl">A</p>
                </div>
                {accIsOpen && (
                  <div 
                    className="absolute right-0 mt-2 p-2 px-4 bg-red-200 rounded-lg shadow-lg hover:cursor-pointer hover:bg-red-300"
                    onClick={handleLogout}
                    >
                    Logout
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex justify-between items-center p-4">
          <div 
            className="flex items-center gap-2"
            onClick={handleLogout}>
            <img className="w-8" src={Logo} alt="Logo" />
            <span className="font-semibold text-xl">Storemesh</span>
          </div>
          <div className="flex items-center gap-4">
          <Search
              className="w-5 h-5"
              onClick={toggleSearch} 
            />
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen)
                setSearchOpen(false);
                onFilterToggle(false)
              }}
              className="text-gray-600"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50">
            <div className="flex flex-col p-4 space-y-4">
              <div
                className={`text-lg cursor-pointer pl-2 
                    ${
                      selectedMenu === "menu1"
                        ? "border-l-4 border-blue-500 duration-200"
                        : ""
                    }`}
                onClick={() => {
                  handleClick("menu1");
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
              >
                Menu 1
              </div>
              <div
                className={`text-lg cursor-pointer pl-2 
                    ${
                      selectedMenu === "menu2"
                        ? "border-l-4 border-blue-500 duration-200"
                        : ""
                    }`}
                onClick={() => {
                  handleClick("menu2");
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
              >
                Menu 2
              </div>
              <div
                className={`text-lg cursor-pointer pl-2 
                    ${
                      selectedMenu === "menu3"
                        ? "border-l-4 border-blue-500 duration-200"
                        : ""
                    }`}
                onClick={() => {
                  handleClick("menu3");
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
              >
                Menu 3
              </div>
              <div className="pt-2 border-t">
                <div
                  onClick={() => setAccIsOpen(!accIsOpen)}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                      <p className="font-semibold text-lg">A</p>
                    </div>
                    <span 
                      className="font-semibold"
                      onClick={handleLogout}>Logout</span>
                  </div>
                  <Grip className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
