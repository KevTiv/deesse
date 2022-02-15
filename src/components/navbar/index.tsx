import { useEffect, useRef, useState } from 'react'
import { navAnimation, openMobileMenu,  closeMobileMenu, animateOpenBurgerMenu, animateCloseBurgerMenu } from '../../animation/navbarAnimation';
import '../../Styles/components/navbar/index.scss'

const SmScreenNavbar = ()=>{
    const mobNavRef = useRef<HTMLDivElement>(null);
    const burgerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    return(
        <>
            <nav className="mobNav">
                <div>
                    <h3>Book a Citroën</h3>
                </div>

                <div className="burgerContainer"
                    onClick={()=>{
                        setIsOpen(!isOpen);
                        isOpen? closeMobileMenu(mobNavRef) : openMobileMenu(mobNavRef);
                        isOpen? animateOpenBurgerMenu(burgerRef) : animateCloseBurgerMenu(burgerRef);
                    }}
                    ref={burgerRef}
                >
                    <span></span>
                    <span></span>
                </div>
            </nav>

            <div className="mobileMenu" ref={mobNavRef}>
                <ul>
                        <li onClick={()=>{
                            setIsOpen(!isOpen);
                            animateCloseBurgerMenu(burgerRef);
                        }}>Fairs</li>
                        <li onClick={()=>{
                            setIsOpen(!isOpen);
                            animateCloseBurgerMenu(burgerRef);
                        }}>About Us</li>
                        <li onClick={()=>{
                            setIsOpen(!isOpen);
                            animateCloseBurgerMenu(burgerRef);
                        }}>Contact</li>
                </ul>
            </div>
        </>
    )
}
const DefaultNavBar = ()=>{
    const navRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        navAnimation(navRef);
    },[])
    return(
        <>
            <nav className="navbar" ref={navRef}>
                <div>
                    <span className="logo logo_animate">BC</span>
                    <h3>Book a Citroën</h3>
                </div>

                <ul>
                    <li>Fairs</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    )
}
const Navbar = () => {
    const [isMediaMobile, setMediaMobile] = useState<boolean>(false);

    useEffect(()=>{
        
        if(window.innerWidth <= 640){
            return setMediaMobile(true);
        }else{
            return setMediaMobile(false);
        }
    },[]);
  return (
    <>
        <section>
            {/* <SmScreenNavbar/> */}
            {isMediaMobile ? <SmScreenNavbar/> : <DefaultNavBar/>}
        </section>
    </>
  )
};

export default Navbar;
