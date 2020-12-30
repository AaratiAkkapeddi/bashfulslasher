import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Header extends Component {
  constructor(props) {
    super(props);

   }

   render() {
    const {about} = this.props
    return (

     <header className="App-header Homepage">
          <h1 id="main-header">Bashful Slasher</h1>      
         {about ? 
          (
          <a href='./'>Releases</a>
          )
          : (
          <a href='./about'>About</a>
          )} 
      </header>




    );
  }
}

export default Header
