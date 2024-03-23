import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: "Conatct",
  description: "this is contact page"
}

const Page = () => {
  return (
    <main className='flex flex-col lg:flex-row justify-around items-baseline lg:items-center py-10 lg:py-24 gap-10'>
      <section className='w-full lg:w-1/2 h-full'>
        <div className='relative w-full h-[50vh] lg:w-[500px] lg:h-[500px]'>
          <Image sizes='100%' priority src='/contact.png' alt='contact' fill className='object-contain' />
        </div>
      </section>
      <section className='w-full lg:w-1/2'>
        <form className='flex flex-col gap-3'>
          <input
            type="text"
            placeholder="Name and Surname"
            className='outline-none rounded-md bg-customSoft p-5'
          />
          <input
            type="email"
            placeholder="Email Address"
            className='outline-none rounded-md bg-customSoft p-5'
          />
          <input
            type="number"
            placeholder="Phone Number (Optional)"
            className='outline-none rounded-md bg-customSoft p-5'
          />
          <textarea
            cols={30}
            rows={10}
            placeholder="Message"
            className='outline-none rounded-md bg-customSoft p-5'
          ></textarea>
          <button className='bg-customBtnBg py-6 rounded-md font-bold'>Send</button>
        </form>
      </section>
    </main>
  )
}

export default Page