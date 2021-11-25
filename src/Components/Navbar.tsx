import React, { useEffect } from 'react';
import '../Styles/Components/Navbar.css';
import citroenLogo from '../Resources/img/Citroen_logo.svg';
import { MdMenu } from "react-icons/md";

type navType = {
    e: React.MouseEvent | null;
}

const Navbar = () => {

    //let navbar = document.querySelector('.mouse-cursor');
    
    
    useEffect(() => {
        // let navbar = document.getElementById("mouse-cursor") as HTMLElement;

        // if(navbar){
        //     navbar.addEventListener('mousemove', (e) => {
        //         const event = e.target as HTMLElement;
        //         let rect = event.getBoundingClientRect();
        //         let x = e.clientX - rect.left;
        //         let y = e.clientY - rect.top;
        //         navbar.style.setProperty('--x', x + 'px');
        //         navbar.style.setProperty('--y', y + 'px');
        //     });
        // }
    },[])

    return (
        <>
        <header className="navbar">
            <nav id="mouse-cursor" className="navbar-wrapper">
                <div className="navbar-icon-group">
                    <img className="navbar-icon" src={citroenLogo} alt="Citroën logo"/>
                    <h1 className="navbar-title ">
                        Citroën DS
                    </h1>
                </div>
                <div className="navbar-quick-link-menu">
                    <ul>
                        <li className="nav-link">
                            History
                        </li>
                        <li className="nav-link">
                            Gallery
                        </li>
                        <li className="nav-link">
                            Redisign
                        </li>
                        <li className="nav-link">
                            Contact
                        </li>
                    </ul>
                </div>
                <div className="navbar-burger-icon">
                    <MdMenu/>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Navbar
