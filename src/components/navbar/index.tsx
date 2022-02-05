import { useEffect, useRef } from 'react'
import { navAnimation } from '../../animation/navbarAnimation';
import '../../Styles/components/navbar/index.scss'

const Navbar = () => {
    const navRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        navAnimation(navRef);
    },[])
  return (
    <>
        <section>
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
        </section>
    </>
  )
};

export default Navbar;
