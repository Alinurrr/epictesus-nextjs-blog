import React, { useState } from 'react'
import CardPost from './component/CardPost'
import Container from './component/Container';
import FeaturedPost from './component/FeaturedPost'
import Footer from './component/Footer';
import Navbar from './component/Navbar'

export default function Home() {
  const [posts, setPosts] = useState([
    {
      thumbnail: '/thumbnail-2.png',
      category: 'Internet',
      date: 'June 28, 2022',
      title: 'How to design a product that can grow itself 10x in year',
      shortDescription: 'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
      authorName: 'Jenny Wilson',
      authorJob: 'Product Designer',
      authorAvatar: '/author-2.png'
    },
    {
      thumbnail: '/thumbnail-3.png',
      category: '9 TO 5',
      date: 'June 22, 2021',
      title: 'The More Important the Work, the More Important the Rest',
      shortDescription: 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
      authorName: 'Esther Howard',
      authorJob: 'Entrepreneur',
      authorAvatar: '/author-3.png'
    },
    {
      thumbnail: '/thumbnail-4.png',
      category: 'INSPIRATIONS',
      date: 'June 18, 2021',
      title: 'Email Love - Email Inspiration, Templates and Discovery',
      shortDescription: 'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
      authorName: 'Robert Fox',
      authorJob: 'Front-end Engineer',
      authorAvatar: '/author-4.png'
    },
    {
      thumbnail: '/thumbnail-5.png',
      category: '9 TO 5',
      date: 'June 22, 2021',
      title: 'The More Important the Work, the More Important the Rest',
      shortDescription: 'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
      authorName: 'Esther Howard',
      authorJob: 'Entrepreneur',
      authorAvatar: '/author-3.png'
    },
    {
      thumbnail: '/thumbnail-6.png',
      category: 'INSPIRATIONS',
      date: 'June 18, 2021',
      title: 'Email Love - Email Inspiration, Templates and Discovery',
      shortDescription: 'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
      authorName: 'Robert Fox',
      authorJob: 'Front-end Engineer',
      authorAvatar: '/author-4.png'
    },
    {
      thumbnail: '/thumbnail-7.png',
      category: 'INTERNET',
      date: 'June 28, 2021',
      title: 'How to design a product that can grow itself 10x in year',
      shortDescription: 'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
      authorName: 'Jenny Wilson',
      authorJob: 'Product Designer',
      authorAvatar: '/author-2.png'
    },
  ]);

  return (
    <div className='bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white overflow-hidden'>
      <Navbar />
      <Container>
        <FeaturedPost />
        <div className="flex flex-wrap -mx-4 mt-4">
          {posts.map((post, index) => (
            <div key={index} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  )
}
