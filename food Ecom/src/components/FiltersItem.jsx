import React from 'react'
import Categories from './Category'

const FiltersItem = () => {
  return (
    <div className='flex items-center justify-center flex-wrap m-auto gap-5   '>
      {Categories.map((item) => {
        return(
            <div key={item.id} className='flex flex-col gap-5 w-33 h-35 rounded-md  bg-green-100 p-3 hover:bg-green-400 transition-all active:scale-95 cursor-pointer'>
                {item.icon}
                <div className='text-xl text-gray-700  font-semibold'>
                    {item.name}
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default FiltersItem
