import Hero from './layout/Hero';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

import About from './components/About';
import Services from './components/Services';
import Tours from './components/Tours';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
