import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from '../components/Headre';
import Footer from '../components/Footer';
import Home from './home';
import Stays from './stays';
import Rentals from '../app/rental';
import Activities from './activities';
import Cruises from './cruises';
import About from './about';
import Contact from './contact';
import FAQ from './faq';
import Blog from './blog';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stays" element={<Stays />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/cruises" element={<Cruises />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
