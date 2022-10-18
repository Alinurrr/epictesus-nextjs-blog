import React, { useState } from 'react'
import Container from './Container'

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false)
  return (
    <>
      <div className="py-10">
        <Container>
          <div className="flex items-center">
            <div className="w-2/12 flex items-center">
              <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">
                E
              </div>
              Epictesus
            </div>
            <div className="w-7/12">
              <ul className="space-x-14 flex items-center">
                <li><a href="#" className="hover:underline">UI Design</a></li>
                <li><a href="#" className="hover:underline">Front-End</a></li>
                <li><a href="#" className="hover:underline">Back-End</a></li>
                <li className='relative'>
                  <a href="#" className="hover:underline cursor-pointer flex items-center"
                    onClick={() => setDropdown(!dropdown)}>
                    Lainnya
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  {dropdown && (
                    <ul className='absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4'>
                      <li><a href="#" className="flex py-3 px-6 hover:bg-gray-700/60 border-b border-white/5">Internet</a></li>
                      <li><a href="#" className="flex py-3 px-6 hover:bg-gray-700/60 border-b border-white/5">Books</a></li>
                      <li><a href="#" className="flex py-3 px-6 hover:bg-gray-700/60">Open Source</a></li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <div className="w-3/12">
              <input type="search" className='bg-gray-700 py-3 px-6 w-full rounded-full bg-search pl-12' placeholder='Search ...' />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
