import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Button from './components/button/Button';
import Card from './components/card/Card';
import Footer from './components/fotter/Fotter';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projeccts';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
