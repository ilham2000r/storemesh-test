import React,{ useState} from 'react'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import ItemList from '../components/ItemList'


const Index = () => {

  const [filter, setFilter] = useState('ALL')

  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter); 
  };

  const handleSearchChange = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onSearchChange={handleSearchChange}/>
      <div className="flex flex-col md:flex-row">
        <Filter onFilterChange={handleFilterChange} /> 
        <ItemList filter={filter} searchQuery={searchQuery} /> 
      </div>
    </div>
  )
}

export default Index