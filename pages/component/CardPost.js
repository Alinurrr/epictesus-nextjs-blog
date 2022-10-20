import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import InfoPost from './InfoPost'

export default function CardPost({ thumbnail, ...xxxx }) {
  const [thumbnailLoading, setThumbnailLoading] = useState(true)

  return (
    <article>
      <div className="w-full h-52 relative mb-4">
        <Link href="/detail">
          <a>
            <Image
              src={thumbnail} alt="featured thumbnail" className='rounded-xl '
              layout="fill"
              objectFit="cover"
              onLoadingComplete={() => setThumbnailLoading(false)}
            />
            {
              thumbnailLoading &&
              <div className="w-full h-full animate-pulse bg-slate-200 rounded-xl absolute" />
            }
          </a>
        </Link>
      </div>
      <InfoPost {...xxxx} />
    </article>
  )
}
