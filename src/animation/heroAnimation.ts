import gsap from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger'
import { RefObject } from 'react'

export const heroAppear = (heroPart1Ref: RefObject<HTMLDivElement>)=>{
    // gsap.registerPlugin(scrollTrigger);
    const tl = gsap.timeline({defaults:{
        duration: 2,
        ease: "power3.inOut"
    }})
    tl
    .from(heroPart1Ref.current!.querySelectorAll('.img-container'),{
        'clip-path': 'circle(0% at 50% 50%)',
        stagger: 0.45,
    })
    .to(heroPart1Ref.current!.querySelectorAll('h1, p'),{
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        stagger: 0.5
    },'-=1.5')
    .from(heroPart1Ref.current!.querySelector('.h1_emphasize_animate'),{
        scale: 1.85,
        color: '#e3e7d3',
    },'-=1.45')
    .from(heroPart1Ref.current!.querySelector('button'),{
        opacity: 0,
        duration: 0.5
    },'-=1.85')
}