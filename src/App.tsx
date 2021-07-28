import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/pages/Home";

function App() {
  return (
      <div className="wrapper">
        <Header/>

        <div className="content">
          <Home/>
        </div>

      </div>
  )
}

export default App
