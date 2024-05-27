
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Urunler from './components/Urunler';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/products" element={<Urunler />}/>
     </Routes>
    </div>
  );
}

export default App;
