import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: "Homepage",
    description: "this is Homepage"
}
const Page = () => {
    return (
        <main className='flex flex-col-reverse lg:flex-row justify-between items-baseline lg:items-center gap-10'>
            <section className='w-full lg:w-1/2 flex flex-col gap-10'>
                <h1 className='w-full lg:w-1/2 text-5xl lg:text-7xl font-bold leading-tight text-customTextSoft'>
                    Creative Thoughts Agency.
                </h1>
                <p className='text-sm lg:text-lg'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                    blanditiis adipisci minima reiciendis a autem assumenda dolore.
                </p>
                <div className='flex flex-row gap-4 items-center flex-wrap'>
                    <button className='bg-customBtnBg rounded-md py-3 px-6'>Learn more.</button>
                    <button className='bg-customWhite text-black rounded-md py-3 px-6'>Contact</button>
                </div>
                <div className='relative w-[500px] h-[50px]'>
                    <Image src='/brands.png' alt='brands' fill className=' filter grayscale' />
                </div>
            </section>
            <section className='w-full lg:w-1/2 h-full'>
                <div className='relative  h-screen'>
                    <Image src='/hero.gif' alt='brands' fill />
                </div>
            </section>
        </main>
    )
}

export default Page