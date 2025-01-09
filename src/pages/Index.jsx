import React,{ useState} from 'react'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import ItemList from '../components/ItemList'


const Index = () => {

  const [filter, setFilter] = useState('ALL')

  const [searchQuery, setSearchQuery] = useState("");

  const [filterOpen, setFilterOpen] = useState(false);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter); 
  };

  const handleSearchChange = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
  };

  const toggleFilterOpen = (isOpen) => {
    setFilterOpen(isOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onSearchChange={handleSearchChange} onFilterToggle={toggleFilterOpen}/>
      <div className="flex flex-col md:flex-row">
        {/* ซ่อน Filter component หาก filterOpen เป็น false ในขนาด sm */}
        {(filterOpen || window.innerWidth >= 768) && (
          <Filter onFilterChange={handleFilterChange} />
        )}
        <ItemList filter={filter} searchQuery={searchQuery} />
      </div>
    </div>
  )
}

export default Index