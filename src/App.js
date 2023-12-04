import Header from './components/Header';
import './App.css';
import CarouselAppHero from './components/Carousel';
import About from './components/About';
import Services from './components/Services'
import Works from './components/Works';
import Team from './components/Team';
import Testimonials from './components/Testimonials';



function App() {
  return (<>
      <Header/>
      <section>
        <CarouselAppHero/>
        <About/>
        <Services/> 
        <Works/>
        <Team/>
        <Testimonials/>
      </section> 
    </>)
}

export default App