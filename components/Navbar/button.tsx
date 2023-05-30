import React, {SVGProps} from 'react'

interface Props{
    Icon?:(props: SVGProps<SVGSVGElement>)=> JSX.Element
    title?:string
    login?:any
    action?: ()=>void
    cart?:boolean | undefined | null
}

const NavButton = ({Icon, title, login, action, cart}:Props) => {
  return (
    <div
        onClick={action} 
        className={`max-w-fit space-x-2
        flex items-center justify-center  
        ease-in-out duration-200 cursor-pointer 
        group headerLink relative 
        ${login && 'bg-blue-500 text-white my-3'}`}>
        {Icon && <Icon className="h-6 w-6"/>}
        {
          (cart) &&
          <div className='absolute bg-purple-600 rounded-full aspect-square p-1 top-3 right-4'/>
        }
        {title && <p>{title}</p>}
    </div>
  )
}

export default NavButton