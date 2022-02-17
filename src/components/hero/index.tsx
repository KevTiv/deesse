import '../../Styles/components/hero/index.scss'

import img1 from '../../img/citroen-1.webp'
import img2 from '../../img/citroen-2.webp'
import img3 from '../../img/citroen-8.webp'
import img6 from '../../img/citroen-6.webp'

import { useRef, useEffect, useState } from 'react'
import { heroAppear, heroSecondPartAppear } from '../../animation/heroAnimation'

const Hero = () => {
    
    const [triggers, setTriggers] = useState({
        start: '',
        end: ''
    });

    const heroPart1Ref = useRef<HTMLDivElement>(null);
    const heroFunFactRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        heroAppear(heroPart1Ref);

        if(window.innerWidth <= 640){
            return setTriggers({ start: '240%', end: '155%'});
        }else if(window.innerWidth >= 1200){
            return setTriggers({ start: '15%', end: '5%'});
        }else{
            return setTriggers({ start: '100%', end: '40%'});
        }
    },[]);
    useEffect(() => {
        heroSecondPartAppear(heroFunFactRef, triggers.start, triggers.end);
    },[triggers])
    return (
        <>
            <section>
                <div className="content content-section hero-cta-content">
                    <div className="hero-breadcrumbs">Featured offering</div>
                    <div className="part-1" ref={heroPart1Ref}>
                        <div>
                            <h1>Experience a work of</h1>
                            <span className="img-container">
                                <img src={img1} alt="Citroën DS" />
                            </span>
                        </div>
                        <div>
                            <span className="img-container">
                                <img src={img2} alt="Citroen DS speed meter" />
                            </span>
                            <h1 className="h1_emphasize_animate">
                                <b>Art</b>
                            </h1>
                        </div>   
                        <div>
                            <p>Ride in the <b>most iconic</b> french automobile of the 20th century.</p>
                            <button className="btn btn-cta">
                                <span>
                                    Book a session now
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content content-section fun-fact" ref={heroFunFactRef}>
                    <div>
                        <div>
                            <h3>Did you know?</h3>
                            <p>
                                After 18 years of secret development as the successor to the Traction Avant, the DS 19 was introduced on October 6, 1955 
                                at the Paris Motor Show. In the first 15 minutes of the show, 743 orders were taken, and orders for the first day totalled 
                                12,000. During the 10 days of the show, the DS took in 80,000 deposits; a record that stood for over 60 years, until it was 
                                eclipsed by the Tesla Model 3 which received 180,000 first day deposits in March 2016.
                            </p>
                        </div>
                        <span className="img-container animate-fun-img">
                            <img src={img6} alt="Citroën DS side" />
                        </span>
                    </div>
                    <div>
                        <span className="img-container animate-fun-img">
                            <img className="showCar" src={img3} alt="Citroën DS front facing" />
                            {/* <img className="showAndre" src={img4} alt="André Lefèbvre" />
                            <img className="showFlaminio" src={img5} alt="Flaminio Bertoni" /> */}
                        </span>
                        <div>
                            <h3>An insolite combination</h3>
                            <p>
                                Design by Italian sculptor and industrial designer <b>Flaminio Bertoni</b> and the French aeronautical engineer <b>André Lefèbvre</b>.
                                Contemporary automobile journalists said:<br/> <b>"The DS pushed the envelope in the ride vs. handling compromise possible in a motor vehicle."</b>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
};

export default Hero;