import React, {useRef, useEffect} from 'react'
import Image from 'next/image'
import { gsap, Linear } from 'gsap';

interface Props{
  SlideDuration:number
  SlideXDistance:number
  SlideDelay:number
  ImageSrc:string
  PositionX:number
  PositionY:number
  SizeH:number
  SizeW:number
}
const SecondImage = ({SlideDuration, SlideXDistance, SlideDelay,ImageSrc, PositionX, PositionY, SizeH, SizeW}:Props) => {
    const secondImageScreenRef = useRef(null)
    const secondImageRef = useRef(null)
    const secondImageRefContainer = useRef(null)
    useEffect(()=>{
      const XCor = -(PositionX + SizeW)
      gsap.to(secondImageScreenRef.current,{
        translateX:'-110%',
        delay:1.2,
        duration:7.8,
        ease: "power3.inOut"
      })
        
      const windowSecond= gsap.utils.wrap(XCor , window.innerWidth)
      gsap.from(secondImageRef.current,{
        scale:1.3,
        transformOrigin: "50% 50%",
      })
      gsap.to(secondImageRef.current,{
        scale:1, 
        duration:8.8,
        ease:"power2.out"
      })
      gsap.to(secondImageRefContainer.current,{
        translateY:-20,
        delay:1.2,
        duration:7.8,
        ease: "power3.inOut"
      })
      gsap.to(secondImageRefContainer.current,{
        delay:SlideDelay,
        duration:SlideDuration,
        x: SlideXDistance, 
        ease: Linear.easeNone,
        repeat: -1,
        modifiers: {
          x: x => windowSecond(parseFloat(x)) + "px"
        }
      })
    })
  return (
    <div  
      ref={secondImageRefContainer} 
      style={{position:'absolute',top:PositionY, left:PositionX, height:SizeH, width:SizeW, overflow: 'hidden'}}>
      <div ref={secondImageRef}
          className={`relative flex pointer-events-none`}
          style={{height:SizeH, width:SizeW}}>
          <div ref={secondImageScreenRef} className='absolute -inset-2 bg-[#f0f0f0] z-10'/>
          <Image src={ImageSrc} alt='main' layout='fill' objectFit='cover'/>
      </div>
    </div>
  )
}

export default SecondImage