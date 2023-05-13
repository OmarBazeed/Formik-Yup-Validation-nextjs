import Image from 'next/image'
import React from 'react'
import theImage from "../public/vercel.svg"

const Header = () => {
    return (
        <div>
            <h2 className='inline'>The Header</h2>
            <Image alt="..." height={100} width={100} src={theImage} className='inline' />
        </div>
    )
}

export default Header