import React from 'react';
import Header from './components/Header'
import MidSection from './components/MidSection';
import Footer from './components/Footer';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <MidSection/>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
