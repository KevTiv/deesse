import gsap from 'gsap'
import { RefObject } from 'react'

export const bgAppear = (bgRef: RefObject<HTMLDivElement>) =>{
    const tl = gsap.timeline({defaults:{
        duration: 4,
        ease: "power3.inOut"
    }})
    tl.from(bgRef.current!.querySelector('.bg_animate'),{
        scale: 4
    });
}