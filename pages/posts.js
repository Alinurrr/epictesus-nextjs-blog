import React, { useState } from 'react'
import CardPost from './component/CardPost'
import Container from './component/Container'
import Layout from './component/Layout'
import mockPost from '../utils/posts.json';
import SectionHeader from './component/SectionHeader';


export default function posts() {
  const [posts, setPosts] = useState(mockPost);
  return (
    <>
      <Layout>
        <Container>
          <SectionHeader>UI Design</SectionHeader>
          {
            !posts.length ? (
              <div className="text-center py-20">
                <h2 className='text-6xl'>No result 😥</h2>
                <p className='text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto'>We couldn't find any posts with the keyword `yahahahahahyuk`. Please try another keyword.</p>
              </div>
            ) : (
              <div className="flex flex-wrap -mx-8 mt-4">
                {posts.map((post, index) => (
                  <div key={index} className="md:w-4/12 w-full px-4 py-6">
                    <CardPost {...post} />
                  </div>
                ))}
              </div>
            )
          }
        </Container>
      </Layout>
    </>
  )
}
