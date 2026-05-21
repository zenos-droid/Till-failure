import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Trainers from './pages/Trainers';
import Transformations from './pages/Transformations';
import BMICalculator from './pages/BMICalculator';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div 
        id="till-failure-app-node" 
        className="bg-neutral-950 text-white min-h-screen flex flex-col justify-between selection:bg-red-650 selection:text-white antialiased overflow-x-hidden"
      >
        {/* Helper to snap coordinates back to origin on routing shifts */}
        <ScrollToTop />
        
        {/* Dynamic header navigation */}
        <Navbar />
        
        {/* Router Viewport stage */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/transformations" element={<Transformations />} />
            <Route path="/bmi" element={<BMICalculator />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback routing */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        {/* Heavy Footer modules */}
        <Footer />
      </div>
    </Router>
  );
}

