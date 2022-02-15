import Footer from '../components/footer'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import '../Styles/Global/App.scss'
import '../Styles/Global/font.scss'
import bg from '../img/bg-img.webp'
import { useEffect, useRef } from 'react'
import { bgAppear } from '../animation/bgAnimation'

function App() {
  const bgRef = useRef<HTMLDivElement>(null);
  
  useEffect(()=>{
    bgAppear(bgRef);
  },[])
  return (
    <div className="App">

      <div className="bg-left" ref={bgRef}>
        <span className="img-container">
          <img className="bg_animate" src={bg} alt="" />
        </span>
      </div>
      <div className="bg-right"></div>

      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
