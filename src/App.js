import React,{ useState} from 'react';
import Header from './components/Header'
import MidSection from './components/MidSection';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Menu from './pages/Menu';
import { Routes,Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';


function App() {
  const [menuData, setMenuData] = useState([]);
    const location = useLocation();

    const fetchMenuData = (category) => {
        fetch(`http://localhost:3400/Menu/${category}`)
            .then((res) => res.json())
            .then((data) => setMenuData(data))
            .catch((err) => console.log(err));
    };
  return (
    <div className="App">
      
        <Header />
        <AnimatePresence inital={false} mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MidSection />} /> 
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="*" element={<NoPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      
    </div>
  );
}

export default App;
