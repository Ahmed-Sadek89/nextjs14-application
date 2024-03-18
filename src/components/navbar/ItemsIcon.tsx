import React from 'react'

type props = {
    styles: string,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ItemsIcon = ({ styles, setOpen }: props) => {
    return (
        <div 
            className={`flex flex-col gap-2 cursor-pointer ${styles}`}
            onClick={() => setOpen((prev) => !prev)}
        >
            <div className='h-1 w-10 bg-customWhite'></div>
            <div className='h-1 w-10 bg-customWhite'></div>
            <div className='h-1 w-10 bg-customWhite'></div>
        </div>
    )
}

export default ItemsIcon