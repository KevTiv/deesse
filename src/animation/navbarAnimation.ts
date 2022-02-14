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
export const openMobileMenu = (mobNavRef:RefObject<HTMLDivElement>)=>{
    gsap.to(mobNavRef.current!,{
        height: '100vh',
        duration: 0.8,
        ease: 'power3.out'
    });
    gsap.to(mobNavRef.current!.querySelector('ul'),{
        display: 'flex',
        opacity: 1,
        duration: 0.1,
    });
    
}
export const closeMobileMenu = (mobNavRef:RefObject<HTMLDivElement>)=>{
    const tl = gsap.timeline();
    tl
    .to(mobNavRef.current,{
        height: 0,
        duration: 0.4,
        ease: 'power3.out'
    })
    .to(mobNavRef.current!.querySelector('ul'),{
        display: 'none',
        opacity: 0,
        duration: 0.1,
    },'-=0.2');
    
}
export const animateOpenBurgerMenu = (burgerRef:RefObject<HTMLDivElement>)=>{
    const tl = gsap.timeline();

    tl
        .to(burgerRef.current!.querySelector('span:nth-child(1'),{
            rotate: '0deg',
            height: '0.15rem',
            duration: 0.3
        })
        .to(burgerRef.current!.querySelector('span:nth-child(2'),{
            width: '1.15rem',
            height: '0.15rem',
            rotate: '0deg',
            duration: 0.3
        })
}
export const animateCloseBurgerMenu = (burgerRef:RefObject<HTMLDivElement>)=>{
    const tl = gsap.timeline();

    tl
        .to(burgerRef.current!.querySelector('span:nth-child(1'),{
            rotate: '45deg',
            height: '0.18rem',
            duration: 0.3
        })
        .to(burgerRef.current!.querySelector('span:nth-child(2'),{
            width: '2.25rem',
            height: '0.14rem',
            rotate: '-50deg',
            duration: 0.3
        })
}