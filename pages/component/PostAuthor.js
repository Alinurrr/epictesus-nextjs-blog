import Image from 'next/image'
import React from 'react'

export default function PostAuthor({
  authorAvatar, authorName, authorJob
}) {
  return (
    <>
      <div className="flex items-center mt-5">
        <Image src={authorAvatar} alt="author photo" className='rounded-full object-cover' width={56} height={56} />
        <div className="ml-4">
          <h3>{authorName}</h3>
          <div className="text-white/60 text-sm mt-1">
            {authorJob}
          </div>
        </div>
      </div>
    </>
  )
}
