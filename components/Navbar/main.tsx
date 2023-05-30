'use client'

import Head from 'next/head'
import Image from 'next/image'
import Logo from '../General/Logo'
import {HiOutlineBars3,HiOutlinePaperAirplane} from 'react-icons/hi2'
import { useRecoilState } from 'recoil'
import { modalState, modalTypeState } from '@/atom/modalAtom'
import NavButton from './button'
import { navState } from '@/atom/navAtom'

interface Props{
    Header?:string
    Color?:string
}

const NavbarMain =({Header, Color}:Props)=>{

    const [NavOpen, setNavOpen] = useRecoilState<boolean>(navState)

    const whatsappMe =()=>{
        window.open('https://wa.me/85266011004?text=Hi%20Vincent')
    }

    return(
        <header className={`fixed top-0 flex w-full items-center justify-between p-4 h-24 z-50`}>
            <Head>
                <title>{process.env.NEXT_PUBLIC_NAME+'-'+ {Header}}</title>
            </Head>

            <div className='px:4 sm:px-10 mx-auto flex w-full items-center'>
              {/*Left*/}
              <div className=' h-full  justify-start w-24'>
                <div className='px-2 rounded-full flex bg-[#26c7c7] text-white hover:bg-[#2c2c2c] hover:text-[#e6e6e6] uppercase drop-shadow-lg ease-in-out duration-100 justify-evenly items-center' 
                    onClick={()=>whatsappMe()}>
                    <h2>Talk </h2> <HiOutlinePaperAirplane className='h-5 aspect-square'/>
                </div>
              </div>
              {/* middle */}
              <div className='flex-1 justify-center drop-shadow-lg flex'>
                  <Logo H='h-10' W='w-10'/>
              </div>
              {/*Right*/}
              <div className='flex items-center justify-end space-x-8 w-24 h-full'>
                <div onClick={()=>{setNavOpen(true)}} className='cursor-pointer'>
                    <HiOutlineBars3 className='h-6 headerIcon '/>
                </div> 
              </div> 
            </div>

        </header>
    )
}

export default NavbarMain