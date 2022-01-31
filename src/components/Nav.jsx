import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//#007f78
function Nav() {
  return (
    <div className='flex'>
      <div className='bg-[#026966] h-60 flex grow justify-around items-center lg:px-10'>
        <div className='w-44 h-44 text-white'>
          <img
            src='https://www.lk-cs.com/images/default-source/default-album/logo.svg?sfvrsn=d7ceedf1_0'
            alt=''
          />
        </div>
        <div>
          <ul className='md:flex text-white text-2xl space-x-16 lg:space-x-9 lg:px-2 ml-5 hidden'>
            <li className='cursor-pointer hover:text-gray-200 transform duration-200 ease-out'>
              Accounts
            </li>
            <li className='cursor-pointer hover:text-gray-200 transform duration-200 ease-out'>
              Loans
            </li>
            <li className='cursor-pointer hover:text-gray-200 transform duration-200 ease-out'>
              Services
            </li>
            <li className='cursor-pointer hover:text-gray-200 transform duration-200 ease-out'>
              About
            </li>
            <span className='lg:hidden inline'>
              <FontAwesomeIcon icon={faBars} size='xl' />
            </span>
          </ul>
        </div>
        <span className='md:hidden inline text-white'>
          <FontAwesomeIcon icon={faBars} size='2xl' />
        </span>
      </div>
      <div className='bg-[#007f78] lg:w-[500px] hidden lg:flex text-white items-center justify-center'>
        <div className='flex flex-col items-center space-y-4'>
          <h1 className='text-3xl font-light'>Online Banking</h1>
          <div className='flex flex-col w-56'>
            <input
              type='text'
              placeholder='User ID'
              className='placeholder:text-center text-[#007f78] h-9 focus:outline-none focus:ring-2 ring-blue-400 text-center'
            />
            <button className='h-9 border-white border-2 mt-2 hover:bg-white hover:text-[#007f78] hover:border-none transform duration-150 ease-out'>
              Login
            </button>
          </div>
          <div className='flex space-x-2'>
            <p className='cursor-pointer'>Forgot username?</p>
            <span>|</span>
            <p className='cursor-pointer'>Enroll Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
