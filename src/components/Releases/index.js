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

class Releases extends Component {
  constructor(props) {
    super(props);

   }

   render() {
    const {releases} = this.props
    const releaseCards = releases.map((x)=>{
      console.log(x)
      return(
        <div className="card">
         <div className="card-header"><h1>{x.fields.Name}</h1>
         <ReactMarkdown source={x.fields.ReleaseDate}/></div>
         <div className='iframe'>{ ReactHtmlParser(x.fields.BandcampEmbed) }</div>
         <ReactMarkdown source={x.fields.Credits}/>
         <ReactMarkdown source={x.fields.Description}/>
        </div>
        )

    })
    return (
      <div id="releases">
          <h2>Releases</h2>  
          {releaseCards} 
      </div>      
    );
  }
}

export default Releases
