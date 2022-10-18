import Image from 'next/image'
import React from 'react'
import InfoPost from './InfoPost'

export default function CardPost({ thumbnail, ...xxxx }) {
  return (
    <article>
      <div className="w-full h-52 relative mb-4">
        <Image
          src={thumbnail} alt="featured thumbnail" className='rounded-xl '
          layout="fill"
          objectFit="cover"
        />
      </div>
      <InfoPost {...xxxx} />
    </article>
  )
}
