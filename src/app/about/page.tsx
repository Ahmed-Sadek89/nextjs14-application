import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: "About",
  description: "this is about page"
}

const Page = () => {
  return (
    <main className='flex flex-col-reverse lg:flex-row justify-between items-baseline lg:items-center gap-24 lg:gap-36 py-10'>
      <section className='w-full lg:w-1/2 flex flex-col gap-10 flex-1'>
        <h3 className='text-customBtnBg font-bold'>
          About Agency
        </h3>
        <h1 className='text-3xl lg:text-6xl font-semibold text-customTextSoft'>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className='text-sm'>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className='flex flex-row gap-4 items-center justify-between flex-wrap'>
          <div >
            <h1 className='text-customBtnBg font-bold text-4xl'>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div >
            <h1 className='text-customBtnBg font-bold text-4xl'>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div >
            <h1 className='text-customBtnBg font-bold text-4xl'>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>

      </section>
      <section className='w-full lg:w-1/2 h-full flex-1'>
        <div className='relative w-full h-[50vh] lg:w-[500px] lg:h-[500px]'>
          <Image src='/about.png' alt='about' fill className='object-contain'/>
        </div>
      </section>
    </main>
  )
}

export default Page