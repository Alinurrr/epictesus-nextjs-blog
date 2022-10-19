import React, { useState } from 'react'
import Container from './Container'

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false)
  const [offCanvas, setOffCanvas] = useState(false)
  const [search, setSearch] = useState(false)
  return (
    <>
      <div className="py-10">
        <Container>
          <div className="flex items-center">
            <div className="w-3/12 lg:hidden">
              <button onClick={() => { setOffCanvas(!offCanvas) }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                    <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                </svg>
              </button>
            </div>
            <div className="lg:w-2/12 w-6/12 flex items-center lg:justify-start justify-center ">
              <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">
                E
              </div>
              Epictesus
            </div>
            <div className="w-2/12 lg:hidden text-right">
              <button onClick={() => setSearch(!search)}>
                <svg className='inline-block' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                </svg>
              </button>
            </div>
            <div className={`lg:w-6/12 w-full lg:bg-none bg-gradient-to-b from-gray-600 to-gray-900 lg:h-auto h-full lg:p-0 p-10 z-40 transition-all lg:static fixed top-0 ${offCanvas ? 'left-0' : '-left-full'}`}>
              <button className='lg:hidden absolute top-10 right-10' onClick={() => { setOffCanvas(!offCanvas) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
              </button>
              <ul className="lg:space-x-14 flex lg:items-center lg:flex-row flex-col lg:space-y-0 space-y-4">
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
                    <ul className='absolute z-50 w-[200px] bg-gray-800 rounded shadow-2xl mt-4'>
                      <li><a href="#" className="flex py-3 px-6 hover:bg-gray-700/60 border-b border-white/5">Internet</a></li>
                      <li><a href="#" className="flex py-3 px-6 hover:bg-gray-700/60 border-b border-white/5">Books</a></li>
                      <li><a href="#" className="flex py-3 px-6 hover:bg-gray-700/60">Open Source</a></li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <div className={`lg:w-4/12 lg:static absolute w-full left-0 px-10 transition-all ${search ? 'top-10' : '-top-40'}`}>
              <button className='lg:hidden absolute top-3 right-14' onClick={() => { setSearch(!search) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
              </button>
              <input type="search" className='bg-gray-700 py-3 px-6 w-full lg:rounded-full rounded-xl bg-search pl-12' placeholder='Search ...' />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
