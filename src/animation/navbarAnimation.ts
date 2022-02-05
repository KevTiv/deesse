import gsap from 'gsap'
import { RefObject } from 'react'

export const navAnimation = (navRef:RefObject<HTMLDivElement>)=>{
    // gsap.registerPlugin(scrollTrigger);
    
    const tl = gsap.timeline({defaults:{
        duration: 2,
        ease: "power3.inOut"
    }})
    tl
    .to(navRef.current!.querySelector('.logo_animate'),{
        'clip-path': 'circle(50% at 50% 50%)'
    })
    .to(navRef.current!.querySelector('h3'),{
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    }, '-=1.8')
    .to(navRef.current!.querySelectorAll('li'),{
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        stagger: 0.2,
        duration: 1
    }, '-=1.4');

}