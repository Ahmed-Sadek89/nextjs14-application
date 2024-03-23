import SingleBlog from '@/components/SingleBlog/SingleBlog'
import { getPosts } from '@/libs/Post/Post.data';
import React from 'react'

export const metadata = {
  title: 'Blogs',
  description: "this is blog page"
}

const Page = async () => {
  const posts = await getPosts();
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
      {
        posts.slice(0,10).map((index) => (
          <SingleBlog key={index._id} post={index} />
        ))
      }
    </main>
  )
}

export default Page