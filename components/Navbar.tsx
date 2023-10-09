import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CustomButton  from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className="max-2-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href='/' className='flex justify-center items-center'>
                <Image src='/logo.png' alt='hygo logo' width={128} height={118} className='object-contain'></Image>
            </Link>

            <CustomButton title='Sign In' btnType='button' containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'/>
        </nav>
    </header>
  )
}

export default Navbar