import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type props = {
    blog: {
        id: number,
        userId: number,
        title: string,
        body: string,
    }
}

const SingleBlog = ({ blog }: props) => {
    return (
        <div className='mb-8 flex flex-row items-center w-full '>
            <div className="flex flex-col gap-4">
                <div className='relative h-[400px] w-full '>
                    <Image src={"https://images.pexels.com/photos/14589048/pexels-photo-14589048.jpeg"} alt='blog' fill className='objetc-cover' />
                </div>
                <h4 className='font-bold'>{blog.title}</h4>
                <p className='text-sm font-[100] text-customTextSoft'>
                    {blog.body}                
                </p>
                <Link href={`blog/${blog.id}`} className='underline'>
                    READ MORE
                </Link>
            </div>
            <div className='rotate-[270deg] text-sm'>
                01/01/2024
            </div>
        </div>
    )
}

export default SingleBlog