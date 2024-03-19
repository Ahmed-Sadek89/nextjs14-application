import SingleBlog from '@/components/SingleBlog/SingleBlog'
import React from 'react'

const Page = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
      {
        [1, 2, 3, 4, 5].map((index) => (
          <SingleBlog key={index} blog={index} />
        ))
      }
    </main>
  )
}

export default Page