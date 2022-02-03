import Footer from '../components/footer'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import '../Styles/Global/App.scss'
import '../Styles/Global/font.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
