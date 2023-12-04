import Header from './components/Header';
import './App.css';
import CarouselAppHero from './components/Carousel';
import About from './components/About';
import Services from './components/Services'


function App() {
  return (<>
      <Header/>
      <section>
        <CarouselAppHero/>
        <About/>
        <Services/> 
      </section> 
    </>)
}

export default App