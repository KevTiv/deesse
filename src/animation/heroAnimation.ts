import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { RefObject } from 'react'

export const heroAppear = (heroPart1Ref: RefObject<HTMLDivElement>)=>{
    
    const tl = gsap.timeline({defaults:{
        duration: 2,
        ease: "power3.inOut"
    }});
    tl
    .from(document.querySelector('.hero-breadcrumbs'),{
        'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
        duration: 1.5
    })
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
    },'-=1.85');
};

export const heroSecondPartAppear = (heroFunFactRef: RefObject<HTMLDivElement>, refTriggerStart: string, refTriggerEnd: string)=>{
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
        defaults:{
            duration: 4,
            ease: "power3.inOut"
        },
        scrollTrigger:{
            trigger: heroFunFactRef.current!,
            start: `-=${refTriggerStart}`,
            end: `-=${refTriggerEnd}`,
            scrub: 4,
        }
    });
    tl
    .to(heroFunFactRef.current!.querySelectorAll('h3,p'),{
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        stagger: 0.75,
    })
    .to(heroFunFactRef.current!.querySelectorAll('.animate-fun-img'),{
        'clip-path': 'circle(36% at 50% 50%)',
        scale: 1,
        stagger: 0.75,
        ease: "power3.out"
    },'-=1');
};