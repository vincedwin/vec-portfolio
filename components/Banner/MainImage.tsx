import React, {useRef, useEffect} from 'react'
import Image from 'next/image'
import { gsap} from 'gsap';
import { CustomEase } from "gsap/dist/CustomEase";
gsap.registerPlugin(CustomEase);


interface Props{
    SlideDuration:number
    SlideXDistance:number
    SlideDelay:number
    ImageSrc:string
}

const MainImage = ({SlideDuration, SlideXDistance, ImageSrc}:Props) => {
    const mainImageContainer = useRef(null)
    const mainImageRef = useRef(null)
    useEffect(()=>{
        
        const ScreenWidth = window.innerWidth
        const XCor = -(ScreenWidth/2 + 500)
        const windowMain = gsap.utils.wrap(XCor, window.innerWidth)
        const mainAnimation = gsap.timeline()
        
        //main image container zoom
        mainAnimation.from(mainImageContainer.current,{
          scale:1.3,
        })
        mainAnimation.to(mainImageContainer.current,{
          scale:0.5, 
          duration:8.8,
          ease: "power3.inOut"
        })

        //main image zoom
        gsap.to(mainImageRef.current,{
          duration:2,
          y:-100,
          ease: "power3.inOut"
        })
        gsap.from(mainImageRef.current,{
          scale:1.3
        })
        gsap.to(mainImageRef.current,{
          scale:0.5, 
          duration:9,
          transformOrigin: "50% 50%",
          ease: "power3.inOut"
        })
        
        //transition X 
        gsap.to(mainImageContainer.current,{
          delay:9,
          duration:SlideDuration,
          x: SlideXDistance,
          modifiers: {
            x: x => windowMain(parseFloat(x)) + "px"
          }
        })
    })
  return (
    <div className='absolute h-[1200px] w-[1600px] top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 overflow-hidden' ref={mainImageContainer}>
        <img className='absolute h-[1600px] w-[1400px] object-cover pointer-events-none' src={ImageSrc} alt='main' ref={mainImageRef}/>
    </div>
  )
}

export default MainImage