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

class Studio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel_slides: [],
    };

   }
/* <ReactMarkdown  source={"hi"}/>*/
   render() {
    const {studio} = this.props
    let images = '';
    if(studio[0]){
       images = studio[0].fields.Images.map((x)=>{
        return(
            <img src={x.url}/>
            )

          });
    }
    
    return (

     <header className="App-header Homepage">
          <Header studio={true} about={false}></Header>
          {studio[0] ?
             (
              <>
             <div id="about">

             {images}
              <ReactMarkdown source={studio[0].fields.Text}/>
             
               </div>
               <Footer/>
              </>
              )
          : ""}
          <Footer></Footer>
      </header>
      



    );
  }
}

export default Studio
