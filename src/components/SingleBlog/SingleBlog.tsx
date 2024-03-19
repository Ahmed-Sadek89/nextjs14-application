import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type props = {
    blog: number
}

const SingleBlog = ({ blog }: props) => {
    return (
        <div className='mb-8 flex flex-row items-center w-full '>
            <div className="flex flex-col gap-4">
                <div className='relative h-[70vh] w-full'>
                    <Image src={"https://images.pexels.com/photos/14589048/pexels-photo-14589048.jpeg"} alt='blog' fill className='objetc-cover' />
                </div>
                <h4 className='text-2xl font-bold'>Title</h4>
                <p className='text-sm font-[100] text-customTextSoft'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo asperiores, rem, blanditiis quasi dolorum soluta temporibus maxime magnam facere ut corporis numquam corrupti assumenda, itaque voluptatibus ratione iusto odio explicabo!
                </p>
                <Link href={`blog/${blog}`} className='underline'>
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