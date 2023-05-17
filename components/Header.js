import Image from 'next/image'
import React from 'react'
import theImage from "../public/vercel.svg"

const Header = () => {
    return (
        <div className="flex items-center justify-between p-5">
            <h2 className='inline font-bold font-mono text-blue-500 text-xl'> The Header 👏 </h2>
            <Image alt="..." height={100} width={100} src={theImage} className='inline' />
        </div>
    )
}

export default Header