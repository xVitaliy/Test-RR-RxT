// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import React from "react";


function App() {
    return (
        <div className='AppWrapper'>
            <Header />
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
