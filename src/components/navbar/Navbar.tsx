"use client"
import { useState } from 'react'
import NavLinks from './NavLinks'
import ItemsIcon from './ItemsIcon'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className='h-[6rem] pt-6'>
            <section className='flex flex-row justify-between items-center'>
                <h3 className='text-2xl font-bold'>Sadek</h3>
                <ul className='hidden md:flex flex-row items-center gap-4 capitalize'>
                    <NavLinks />
                </ul>
                <ItemsIcon styles='md:hidden' setOpen={setOpen} />
            </section>
            {
                open &&
                <section className='flex md:hidden justify-end '>
                    <div className='bg-customDark h-screen z-50 fixed top-0 right-0 w-1/2'>
                        <ItemsIcon styles='mr-2 mt-5 items-end' setOpen={setOpen} />
                        <div className="h-screen m-auto flex justify-center items-center">
                            <ul className='flex flex-col items-center gap-4 capitalize'>
                                <NavLinks  setOpen={setOpen}/>
                            </ul>
                        </div>
                    </div>
                </section>
            }
        </header>
    )
}

export default Navbar