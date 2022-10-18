import React, { useState } from 'react';
import CardPost from './component/CardPost';
import Container from './component/Container';
import FeaturedPost from './component/FeaturedPost';
import Layout from './component/Layout';
import mockPost from '../utils/posts.json';

export default function Home() {
  const [posts, setPosts] = useState(mockPost);

  return (
    <Layout>
      <Container>
        <FeaturedPost />
        <div className="flex flex-wrap -mx-8 mt-4">
          {posts.map((post, index) => (
            <div key={index} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}
