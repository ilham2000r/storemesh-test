import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ItemList = ({ filter, searchQuery }) => {
  const items = [
    {
      id: 1,
      name: "Item A",
      type: "A",
    },
    {
      id: 2,
      name: "Item B",
      type: "B",
    },
    {
      id: 3,
      name: "Item C",
      type: "C",
    }
  ];

  const filteredItems = items
    .filter(item => (filter === "ALL" || item.type === filter))
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const [pageNo, setPageNo] = useState(1);
  const handlePrevPage = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNextPage = () => {
    setPageNo(pageNo + 1);
  };

  return (
    <div className="flex-1 px-2 md:px-10">
      {/* Desktop View - Show both Data and Sort By */}
      <div className="hidden md:flex justify-between items-center mb-4">
        <div className="text-xl font-medium">Data</div>
        <div>
          <span className="mr-3">Sort By</span>
          <select className="p-2 hover:cursor-pointer bg-white rounded-md">
            <option>None</option>
            <option>Date</option>
            <option>Type</option>
          </select>
        </div>
      </div>

      {/* Mobile View - Show only Data */}
      <div className="flex justify-between md:hidden mb-4">
        <div className="flex items-center ml-5 text-xl font-medium">Data</div>
        <div>
          <span className="mr-3">Sort By</span>
          <select className="p-1 hover:cursor-pointer bg-white rounded-md">
            <option>None</option>
            <option>Date</option>
            <option>Type</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        {filteredItems.map((item, index) => (
          <ItemCard key={index} name={item.name} value={item.type} />
        ))}
      </div>

      <div className="flex justify-end">
        <div className="p-1 hover:cursor-pointer" onClick={handlePrevPage}>
          <ChevronLeft />
        </div>
        <div className="p-1 ">{pageNo}</div>
        <div className="p-1 hover:cursor-pointer" onClick={handleNextPage}>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default ItemList;
