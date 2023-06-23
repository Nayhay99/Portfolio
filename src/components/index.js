import React, { Component } from 'react'
import NavBar from "./Navbar";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import Skills from './Skills/Skills';
import Footer from './Footer'

class Portfolio extends Component{
    render(){
        return(
            <React.Fragment>
                <NavBar></NavBar>
                <Home></Home>
                <Experience></Experience>
                <Skills></Skills>
                <Projects></Projects>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}
export default Portfolio;