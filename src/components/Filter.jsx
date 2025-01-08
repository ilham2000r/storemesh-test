import React,{ useState } from 'react'

const Filter = ({ onFilterChange }) => {

  const [filter, setFilter] = useState('ALL')

  const handleFilterChange = (e) => {
    const value = e.target.value
    setFilter(value)
    onFilterChange(value)
  };

  return (
    <div className="md:w-1/5 mx-2 md:mx-5 bg-zinc-200 rounded-md p-4 md:h-96 mb-4 md:mb-0">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-medium">Filter</span>
      </div>
      <select 
        className="flex justify-between bg-slate-100 rounded-md p-2 w-full hover:cursor-pointer"
        value={filter} 
        onChange={handleFilterChange}>
        <option value={'ALL'}>All</option>
        <option value={'A'}>Type A</option>
        <option value={'B'}>Type B</option>
        <option value={'C'}>Type C</option>
      </select>
    </div>
  )
}

export default Filter