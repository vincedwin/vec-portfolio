import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface Props{
    W:string;
    H:string;
}

const Logo = ({W,H}:Props) => {
  return (
    <Link href='/'
     className={`relative cursor-pointer opacity-75 transition  hover:opacity-100
        ${H} ${W}`}>
        <Image src='/LogoW.png' alt='VEC' fill className='object-contain'/> 
    </Link>
  )
}

export default Logo