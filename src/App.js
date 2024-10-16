import React from 'react';
import Header from './components/Header'
import MidSection from './components/MidSection';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Menu from './pages/Menu';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MidSection />} /> 
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
