import SingleBlog from '@/components/SingleBlog/SingleBlog'
import { getPosts } from '@/libs/Post/Post.data';
import React from 'react'

// type blogs = {
//   id: number,
//   userId: number,
//   title: string,
//   body: string,
// }
// const getData = async (): Promise<blogs[]> => {
//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/posts',
//     {cache: 'force-cache'}
//   );
//   if (!res.ok) {
//     throw new Error("Faild fetch blogs")
//   }
//   return res.json()
// }

const Page = async () => {
  // const blogs = await getData();
  const posts = await getPosts();
  console.log({posts})
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