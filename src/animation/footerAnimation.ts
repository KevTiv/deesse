import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { RefObject } from 'react'

export const footerAppear = (footerRef: RefObject<HTMLDivElement>) => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
        defaults:{
            duration: 4,
            ease: "power3.inOut"
        },
        scrollTrigger:{
            trigger: footerRef.current!,
            start: '-=900',
            end: '-=600',
            scrub: 3,
        }
    });
    tl
    .to(footerRef.current!.querySelectorAll('p, .emailSubmit, .socials'),{
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        stagger: 0.75
    })
    .from(footerRef.current!.querySelector('.img-animate'),{
       'clip-path': 'circle(0% at 50% 50%) !important',
        y: 100,
        opacity: 0,
        scale: 0.5,
    //    x: 80
    },'-=3');
}