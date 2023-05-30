'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

var frame_count  = 9,
    offset_value = 100;

const AppleClone = () => {
    const imageRef = useRef(null)
    const sectionRef = useRef(null)

    useEffect(()=>{
        console.clear();
        const canvas = document.getElementById("hero-lightpass") as HTMLCanvasElement
        const context = canvas.getContext("2d");
        canvas.width = 1158;
        canvas.height = 770;
    
        const frameCount = 147;
        const currentFrame = (index:number) => (
          `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`
        );
        const images: any[] = []
        const airpods = {
          frame: 0
        };
        
        for (let i = 0; i < frameCount; i++) {
          const img = new Image();
          img.src = currentFrame(i);
          images.push(img);
        }
        
        gsap.to(airpods, {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            scrub: 0.5
          },
          onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
        });
        
        images[0].onload = render;
        
        function render() {
          context?.clearRect(0, 0, canvas.width, canvas.height);
          context?.drawImage(images[airpods.frame], 0, 0); 
        }
        
      },[])
    return (
        <div className='bg-black h-screen grid place-items-center'>
            <canvas id="hero-lightpass" className='h-1/2 w-full fixed object-cover'/>
        </div>
    )
}

export default AppleClone