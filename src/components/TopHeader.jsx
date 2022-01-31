import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
function TopHeader() {
  return (
    <div className='hidden  md:flex bg-[#015c55] h-10 text-white justify-center items-center'>
      <div className='flex text-white justify-end items-center space-x-4 h-full text-sm mr-10'>
        <p className='border-gray-500 border-opacity-80 px-2 border-r-2 border-l-2 h-full flex items-center cursor-pointer hover:text-gray-200 transform duration-200 ease-out'>
          Font Size
        </p>
        <div className='border-gray-500 border-opacity-80 pr-4 border-r-2 h-full flex items-center cursor-pointer hover:text-gray-200 transform duration-200 ease-out'>
          <FontAwesomeIcon icon={brands("facebook")} size='xl' />
        </div>
        <div className='items-center justify-center space-x-2 border-gray-500 border-opacity-80 pr-4 border-r-2 h-full flex'>
          <p>Mobile App:</p>
          <FontAwesomeIcon
            icon={brands("apple")}
            size='xl'
            className='cursor-pointer hover:text-gray-200 transform duration-200 ease-out'
          />
          <FontAwesomeIcon
            icon={brands("android")}
            size='xl'
            className='cursor-pointer hover:text-gray-200 transform duration-200 ease-out'
          />
        </div>

        <div className='flex space-x-4'>
          <p className='pl-4'>1414 Sample Ave. • Peru, IL 61354</p>
          <span>|</span>
          <p>123.456.7891</p>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
