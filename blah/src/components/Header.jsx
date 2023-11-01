import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
export default function Header() {
  return (
    <>
      <header>
        <div className='flex flex-wrap pt-4 pb-4 pl-24 pr-24 bg-slate-300 items-center justify-between w-full  mx-auto fixed'>
            <h1>
                <Link to='/'>
                    <span className='font-bold text-2xl text-slate-500'>Dreamy</span>
                    <span className='font-bold text-2xl text-black'>Estate</span>
                </Link>
            </h1>
            <form className='bg-slate-200 p-2 rounded-lg flex items-center'>
                <input type='text' className='bg-transparent focus:outline-none w-24 sm:w-64' placeholder='Search your dream place...'/>
                <FaSearch className='text-slate-400'/>
            </form>
            <ul className='flex gap-4'>
                <li className='hidden sm:inline hover:underline'>
                    <Link to="/" className='text-slate-700 font-bold text-lg'>
                        Home
                    </Link>
                </li>
                <li className='hidden sm:inline hover:underline'>
                    <Link to='/Aboutus'className='text-slate-700 font-bold text-lg'>
                        Aboutus
                    </Link>
                </li>
                <li className='hidden sm:inline hover:underline'>
                    <Link to='/Signin'className='text-slate-700 font-bold text-lg'>
                        Signin
                    </Link>
                </li>
            </ul>
            
        </div>
      </header>
    </>
  )
}
