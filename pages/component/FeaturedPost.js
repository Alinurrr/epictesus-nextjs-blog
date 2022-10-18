import Image from 'next/image'
import React from 'react'

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
          <div className="flex items-center text-white/60 space-x-4">
            <div className="uppercase">
              UI Design
            </div>
            <span>&bull;</span>
            <div>Okt 18, 2022</div>
          </div>
          <h2 className="text-2xl mt-4">Understanding color theory: the color wheel and finding complementary colors</h2>
          <p className="text-white/60 mt-6 w-10/12">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
          </p>
          <div className="flex items-center mt-6">
            <Image src="/author-1.png" alt="author photo" className='rounded-full object-cover' width={56} height={56} />
            <div className="ml-4">
              <h3>Leslie Alexander</h3>
              <div className="text-white/60 text-sm">
                UI Designer
              </div>
            </div>
          </div>
        </div>
      </div>
    </article >
  )
}
