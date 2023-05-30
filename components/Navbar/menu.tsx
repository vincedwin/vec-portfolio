'use client';
 

import React from 'react'
import { modalState, modalTypeState } from "../../atom/modalAtom"
import { HiXMark, HiHeart,HiBuildingOffice2} from 'react-icons/hi2'
import Image from 'next/image'
import { useRecoilState } from "recoil"
import { SVGProps,useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import { navState } from '@/atom/navAtom'

interface RowProps{
    Title:string
    Tag?: string
    Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
    Action?: string
    onClick?: ()=>{}
}

interface Props{
    close:()=>{}
}

const NavMenuRow = ({Title, Tag, Icon, Action, onClick}:RowProps )=>{
    const [navOpen, setNavOpen] = useRecoilState<boolean>(navState)
    const router = useRouter();
    const buttonAction =()=>{
        router.push(`${Action}`)
        setNavOpen(false)
    }
    
    return(
        <div
            onClick={()=>
                Action
                ?buttonAction()
                :null
            }
            className='w-full flex gap-5 border-b py-4 border-gray-500/30 cursor-pointer'>
            {Icon && <Icon className='h-6 aspect-square'/>}
            {Title}
        </div>
    )
}


const NavMenu = ({close}:Props)=>{
    const [Category, setCategory] = useState(['Home','Apple-Flip', "House", "News", 'Talents', 'invest','Contact'])
  return (
    <div
            onClick={(e)=>e.stopPropagation()} 
            className='w-[80vw] h-full scrollbar-hide'>
            <div className='h-screen h-screen-ios bg-brand w-[80vw] p-3'>

                {/*List*/}
                <div className='w-full h-full flex flex-col overflow-y-scroll text-white font-extralight uppercase
                    scrollbar-thin scrollbar-track-transparent'>
                    {
                    Category?.map((item:any)=>(
                        <NavMenuRow Title={item} Action={`${item.toLowerCase()}`} key={item}/>
                    ))
                    }
                </div>
            </div>
        </div>
  )
}

export default NavMenu