import SingleBlog from '@/components/SingleBlog/SingleBlog'
import React from 'react'

type blogs = {
  id: number,
  userId: number,
  title: string,
  body: string,
}
const getData = async (): Promise<blogs[]> => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {cache: 'force-cache'}
  );
  if (!res.ok) {
    throw new Error("Faild fetch blogs")
  }
  return res.json()
}

const Page = async () => {
  const blogs = await getData()
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
      {
        blogs.slice(0,10).map((index) => (
          <SingleBlog key={index.id} blog={index} />
        ))
      }
    </main>
  )
}

export default Page