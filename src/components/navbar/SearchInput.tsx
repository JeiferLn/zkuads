import React from 'react'
import Icons from '../Icons';

interface SearchInputProps {
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({className}) => {
  return (
    <div className={`${className} relative h-full grid items-center`}>
      <div className='bg-[#302F31] p-2 pl-2 px-5 rounded-full text-sm text-[#9F9999] flex justify-between items-center gap-1'>
        <div className='`w-4 h-4 pt-0.5'>
          <Icons name="Search"/>
        </div>
        <input type="text" name="" id="" placeholder='Games, categories, and more' className='bg-transparent outline-none'/>
      </div>
    </div>
  )
}

export default SearchInput