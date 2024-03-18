"use client"
import Link from 'next/link'
import { links } from './links'
import { usePathname } from 'next/navigation'

type props = {
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}
const NavLinks = ({ setOpen }: props) => {
    const admin = true;
    const pathname = usePathname()
    return (
        <>
            {
                links.map((index) => (
                    <li
                        key={index.title}
                        className={`${pathname === index.path && 'bg-customWhite text-customDark p-2 rounded-xl'}`}
                        onClick={() => setOpen && setOpen((prev) => !prev)}
                    >
                        <Link href={index.path}>
                            {index.title}
                        </Link>
                    </li>

                ))
            }
            <li>
                <Link href='/admin'>
                    admin
                </Link>
            </li>
            {
                admin ?
                    <li className='bg-customWhite cursor-pointer text-customDark p-2 rounded-xl'>
                        logout
                    </li>
                    : <li>
                        <Link href='/login'>
                            Login
                        </Link>
                    </li>
            }
        </>
    )
}

export default NavLinks