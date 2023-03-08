import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greetings from './greetings';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Greetings />} />
      </Routes>
    </Router>
  );
}

export default App;
