import Image from 'next/image'
import React, { useState } from 'react'

export default function PostAuthor({
  authorAvatar, authorName, authorJob
}) {

  const [loadingImage, setLoadingImage] = useState(true)

  return (
    <>
      <div className="flex items-center mt-5">
        <Image
          src={authorAvatar} alt="author photo"
          className='rounded-full object-cover'
          width={56} height={56}
          onLoadingComplete={() => setLoadingImage(false)}
        />
        {loadingImage && <div className='rounded-full w-14 h-14 animate-pulse bg-slate-200 absolute' />}

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
