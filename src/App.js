import React from 'react';
import Header from './components/Header'
import MidSection from './components/MidSection';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <MidSection/>
      </Router>
      
    </div>
  );
}

export default App;
