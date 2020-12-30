import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Header, Releases, Footer, About} from '../';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel_slides: [],
    };

   }
/* <ReactMarkdown  source={"hi"}/>*/
   render() {
    const {releases, about} = this.props
    return (

     <header className="App-header Homepage">
          <Header about={false}></Header>
          <Releases releases={releases}></Releases>
          <Footer></Footer>
      </header>
      



    );
  }
}

export default Home
