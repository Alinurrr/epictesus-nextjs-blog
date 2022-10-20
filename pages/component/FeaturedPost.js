import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import InfoPost from './InfoPost'

export default function FeaturedPost() {
  const [thumbnailLoading, setThumbnailLoading] = useState(true)

  // useEffect(() => {
  //   setThumbnail('/public/featured-thumbnail.png')
  //   // console.log(thumbnail)
  // }, [])

  return (
    <article>
      <div className="flex flex-wrap -mx-4 items-center">

        {
          thumbnailLoading &&
          <div className="px-4 lg:w-8/12 md:w-7/12 w-full sm:h-96 h-60 relative mb-4 md:mb-0 animate-pulse bg-slate-200 rounded-xl" />
        }
        <div className="px-4 lg:w-8/12 md:w-7/12 w-full sm:h-96 h-60 relative mb-4 md:mb-0 transition-all">
          <Link href="/detail">
            <a>
              <Image
                src="/featured-thumbnail.png" alt="featured thumbnail" className='rounded-xl '
                layout="fill"
                objectFit="cover"
                loading="lazy"
                onLoadingComplete={() => setThumbnailLoading(false)}
              />
            </a>
          </Link>
        </div>

        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
          <InfoPost
            category="UI DESIGN"
            date="Okt 18, 2020"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
            authorAvatar="/author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
      <hr className='border-white/10 mt-10' />
    </article >
  )
}
