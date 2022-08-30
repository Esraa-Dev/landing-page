import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import Presentation from './components/Presentation'
import aboutImage from './images/About.png'
import aboutImage1 from './images/download.png'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Features/>
      <About image={aboutImage} title="comes with all you need for Daily Life" button="Get the App"/>
      <About image={aboutImage1} title="Download and get the App" button="Download" />
     <Presentation/>
     <Contact/>
    </div>
  );
}

export default App;
