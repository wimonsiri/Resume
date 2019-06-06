import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Name from './components/Name';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Name/>
      <About/>
    </div>
  );
}

export default App;
