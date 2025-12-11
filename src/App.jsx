import './App.css';
import NavBAR from './components/NavBAR';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudies from './components/CaseStudies';
import TechStack from './components/TechStack';
import About from './components/About';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBAR />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <WhyChooseUs />
        <CaseStudies />
        <TechStack />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
