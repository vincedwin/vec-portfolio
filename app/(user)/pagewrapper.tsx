"use client"
import { motion } from 'framer-motion'
import {RecoilRoot} from 'recoil'
import { useRecoilState } from 'recoil'
import { navState } from '@/atom/navAtom'
import NavMenu from '../../components/Navbar/menu'

const dropIn = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};


const RecoilModal = ({children}:{children: React.ReactNode})=>{
    const [navOpen, setNavOpen] = useRecoilState<boolean>(navState)
    return(
        <div className=''>
          <motion.div
              initial={false} 
              animate={navOpen?{ x:0}: {x:'-80vw'}}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className='fixed h-full top-0 bottom-0 w-[80vw] z-50'>
              <div className='fixed top-0 h-full w-full bg-[#10362e]'>
                <NavMenu close={async () => setNavOpen(false)}/>  
              </div>
            </motion.div>

            <motion.div 
              initial={false} 
              animate={navOpen?{ x:'80vw'}: {x:0}}
              transition={{ ease: "easeOut", duration: 0.5 }}>
              {navOpen && 
                <div 
                  onClick={()=> setNavOpen(false)}
                  className='absolute inset-0 bg-black/30 z-50 ease-in-out duration-150 cursor-pointer'/>
              }
              {children}
            </motion.div>
        </div>)
}

export default function PageWrapper({
    children,
  }: {
    children: React.ReactNode
  }) {


    return(
        <RecoilRoot>
            <RecoilModal>
                {children}
            </RecoilModal>
        </RecoilRoot>
    )
}