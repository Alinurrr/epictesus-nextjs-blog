import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import InfoPost from './InfoPost'

export default function CardPost({ thumbnail, ...xxxx }) {
  return (
    <article>
      <div className="w-full h-52 relative mb-4">
        <Link href="/detail">
          <a>
            <Image
              src={thumbnail} alt="featured thumbnail" className='rounded-xl '
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
      <InfoPost {...xxxx} />
    </article>
  )
}
