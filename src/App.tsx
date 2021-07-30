import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/pages/Home";
import Message from "./Components/Message";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Message/>

            <div className="content">
                <Home/>
            </div>

        </div>
    )
}

export default App
