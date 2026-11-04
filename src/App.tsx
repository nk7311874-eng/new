import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Journey from '@/components/sections/Journey';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Skills from '@/components/sections/Skills';
import Tools from '@/components/sections/Tools';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Tools />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
