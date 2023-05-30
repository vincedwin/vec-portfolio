import React, { useEffect, useRef, useState } from 'react'
import { gsap, Power4} from 'gsap';

 const TextAnimation = ({children}:{children:any}) => {
    const itemEls = useRef(new Array())

    useEffect(()=>{
        const tl = gsap.timeline()
        tl.to(itemEls.current, {
            duration:1,
            stagger:{each:0.1},
            translateY: "-50px",
            ease: Power4.easeInOut,
        })
        tl.set(itemEls.current,{
            translateY:"50px",
            opacity:1,
            ease: Power4.easeInOut,
        })
        tl.to(itemEls.current,{
            delay:1.5,
            duration:1,
            stagger:{each:0.1},
            translateY:"0px",
            opacity:1,
            ease: Power4.easeInOut,
        })
    },[])

    return (
        <div className=" overflow-hidden z-50  drop-shadow-lg">
            <div 
                className="flex uppercase font-bold tracking-wider text-5xl">
                {[...children].map((char, i)=>(
                    <h2 ref={(element) => itemEls.current.push(element)} key={i}
                        className='mix-blend-difference'
                        style={{mixBlendMode: 'difference'}}>{char}</h2>
                ))}
            </div>
        </div>
    )
}


export default TextAnimation