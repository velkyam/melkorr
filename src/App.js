import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Offer from './components/Offer';
import Bar from './components/Bar';

function App() {
  return (
    <div className="App">
      <Bar/>
      <Nav/>
      <Hero/>
      <Offer/>
      <Footer/>
    </div>
  );
}

export default App;
