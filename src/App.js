import React from 'react';
import './output.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './components/Content';  // Make sure the path is correct

function App() {
  return (
    <div className="App bg-gray-900 text-white min-h-screen">
      <Router>
        <Content />
      </Router>
      <footer className="text-center py-6 mt-16">
        <p>&copy; 2023 Ethan Sam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
