import React from 'react'
import FeaturedPost from './component/FeaturedPost'
import Navbar from './component/Navbar'

export default function Home() {
  return (
    <div className='bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white'>
      <Navbar />
      <div className="container mx-auto">
        <FeaturedPost />
      </div>
    </div>
  )
}
