import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import Header from './components/Header/header';
import Index from './components/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Index />
    </div>
  );
}

export default App;
