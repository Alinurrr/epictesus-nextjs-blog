import Image from 'next/image'
import React from 'react'
import InfoPost from './InfoPost'

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex -mx-4 items-center">
        <div className="px-4 w-8/12 h-96 relative">
          <Image
            src="/featured-thumbnail.png" alt="featured thumbnail" className='rounded-xl '
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-4/12 px-4">
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
    </article >
  )
}
