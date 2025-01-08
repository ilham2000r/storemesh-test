import React from 'react'

const ItemCard = ({ name }) => {
  return (
    <div>
        <div className='p-3 rounded-md my-3 bg-slate-200 shadow-lg hover:scale-105 duration-200'>
            <div>
                { name }
            </div>
        </div>
    </div>
  )
}

export default ItemCard