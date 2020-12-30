import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {Header} from "../"
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
   }
   toggleOpen(){
    this.setState({open: true});
   }
   toggleClose(){
    this.setState({open: false});
   }
   render() {
    const {about} = this.props
    const {open} = this.state

    return (
      <>
      <Header about={true}></Header>
      
      <div className={open ? "open":""} id="about">
        {about[0] ?
         (
          <>

         <img src={about[0].fields.Image[0].url}/>
          <ReactMarkdown source={about[0].fields.About}/>
           
          </>
          )
          : ""}
         
      </div>      
      </>
    );
  }
}

export default About
