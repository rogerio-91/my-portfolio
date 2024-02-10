import './App.css';
import Footer from './components/section/Footer';
import Navbar from './components/section/Navbar';
import Prensentation from './components/section/Prensentation';
import Projects from './components/section/Projects';
import Skills from './components/section/Skills';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Prensentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
