import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';


function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
