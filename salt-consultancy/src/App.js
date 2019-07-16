import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { CookiesProvider, withCookies, useCookies } from 'react-cookie';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Developers from './components/Developers';
import Booking from './components/Booking';
import Projects from './components/Projects';
import Login from './components/Login';
import Blog from './components/Blog';
import CustomNavbar from './components/Navbar';


function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
      <CustomNavbar/>
        <header className="App-header">
          <h1>
            Salt Consultancy
        </h1>
          <h3>JavaScript Full-Stack Developers for You!</h3>
        </header>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/developers" component={Developers} />
          <Route path="/booking" component={Booking} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
        </div>
      </BrowserRouter>
    </CookiesProvider>

  );
}


export default App;
