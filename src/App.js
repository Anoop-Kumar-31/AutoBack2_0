import logo from './logo.svg';
import './App.css';
import NavBAR from './components/NavBAR';
import AboutAutoBack from './components/AboutAutoBack';
import MobileAccess from './components/MobileAccess';
import Properties from './components/Properties';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBAR/>
      <AboutAutoBack/>
      <MobileAccess/>
      <Properties/>
      <Footer/>
    </div>
  );
}

export default App;
