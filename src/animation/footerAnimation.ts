import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { RefObject } from 'react'

export const footerAppear = (footerRef: RefObject<HTMLDivElement>, refTriggerStart: string, refTriggerEnd: string) => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
        defaults:{
            duration: 4,
            ease: "power3.inOut"
        },
        scrollTrigger:{
            trigger: footerRef.current!,
            start: `-=${refTriggerStart}`,
            end: `-=${refTriggerEnd}`,
            scrub: 4,
            // markers: true
        }
    });
    tl
    .to(footerRef.current!.querySelectorAll('p, .emailSubmit, .socials'),{
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        stagger: 0.75
    })
    // .to(footerRef.current!.querySelector('span'),{
    //    'clip-path': 'circle(35% at 50% 50%) !important',
    // //    x: 80
    // },'-=3');
}