'use client'
import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image'
import AnimatedText from './Text'
import { gsap, Power4 } from 'gsap';
import MainImage from "./MainImage";
import SecondImage from "./SecondImage";

const SlideDelay= 9
const SlideDuration = 800
const SlideXDistance = -50000
const  Banner = () => {
  const textArray = ['Vincent', 'Vincent', 'Vincent']
  const animatedWord = useRef(new Array())
  const blackScreenRef = useRef(null)


  useEffect(()=>{
    gsap.to(blackScreenRef.current,{
      translateY:'-100vh',
      delay:1.5,
      duration:1.2,
      skewy:30
    })
  })

  return (
    // All images
    <div className='h-screen overflow-hidden relative'>
      <div
        ref={blackScreenRef} 
        className='absolute h-screen w-screen left-0 top-0 bg-[#c9a91c] z-30 '/>
      <MainImage
        SlideDuration={1600} 
        SlideXDistance={SlideXDistance}  
        SlideDelay={SlideDelay} 
        ImageSrc='/LoaderImages/DSC05935.jpg'/>
      <SecondImage 
        SlideDuration={SlideDuration}  
        SlideXDistance={SlideXDistance}  
        SlideDelay={SlideDelay} 
        SizeH={300}
        SizeW={200}
        PositionX={30}
        PositionY={550}
        ImageSrc='/LoaderImages/2.jpeg'/>
      <SecondImage 
        SlideDuration={SlideDuration}  
        SlideXDistance={SlideXDistance}  
        SlideDelay={SlideDelay} 
        SizeH={300}
        SizeW={600}
        PositionX={1800}
        PositionY={400}
        ImageSrc='/LoaderImages/3.png'/>
      <SecondImage 
        SlideDuration={SlideDuration}  
        SlideXDistance={SlideXDistance}  
        SlideDelay={SlideDelay} 
        SizeH={200}
        SizeW={300}
        PositionX={900}
        PositionY={450}
        ImageSrc='/LoaderImages/4.jpeg'/>
      <SecondImage 
        SlideDuration={SlideDuration}  
        SlideXDistance={SlideXDistance}  
        SlideDelay={SlideDelay} 
        SizeH={300}
        SizeW={200}
        PositionX={1500}
        PositionY={50}
        ImageSrc='/LoaderImages/5.jpeg'/>
    {/* text Element */}
    <div className='inset-0 grid place-items-center z-40 absolute'>
      <div>
        {textArray.map((text, i)=>(
          <div ref={(element) => animatedWord.current.push(element)} key={i}>
            <AnimatedText>
              {text}
            </AnimatedText>
          </div>
        ))}
        <button className='w-full my-10  rounded-full opacity-90 text-[#2c2c2c] hover:opacity-100  backdrop-contrast-100'>
        </button>
      </div>
    </div> 
    </div>
  )
}

export default Banner