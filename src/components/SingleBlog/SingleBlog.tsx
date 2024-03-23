import { post } from '@/types/posts.types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type props = {
    post: post
}

const SingleBlog = ({ post }: props) => {
    return (
        <div className='mb-8 flex flex-row items-center w-full '>
            <div className="flex flex-col gap-4">
                <div className='relative h-[400px] w-full '>
                    <Image sizes='100%' priority src={post?.img || "/noavatar.png"} alt='blog' fill className='objetc-cover' />
                </div>
                <h4 className='font-bold'>{post?.title}</h4>
                <p className='text-sm font-[100] text-customTextSoft'>
                    {post?.desc}                
                </p>
                <Link href={`blog/${post?.slug}`} className='underline'>
                    READ MORE
                </Link>
            </div>
            <div className='rotate-[270deg] text-sm text-nowrap'>
                {post.createdAt.toString().slice(4,16)}
            </div>
        </div>
    )
}

export default SingleBlog