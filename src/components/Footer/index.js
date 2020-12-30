import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Footer extends Component {
  constructor(props) {
    super(props);

   }

   render() {

    return (

    <div id="footer">
    <a href="https://bashfulslasher.bandcamp.com/" id='bandcamp'>
    <svg  viewBox="0 0 30 18" fill="none" >
<path d="M10 0H30L20.5 18H0L10 0Z" fill="#3C4586"/>
</svg></a>
    	<a href="https://www.instagram.com/bashfulslasher/" id='instagram'><svg  viewBox="0 0 25 25" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.0804 2.33976H6.54635C4.22214 2.33976 2.33798 4.22534 2.33798 6.55132V18.2501C2.33798 20.5761 4.22214 22.4617 6.54635 22.4617H18.0804C20.4046 22.4617 22.2888 20.5761 22.2888 18.2501V6.55132C22.2888 4.22534 20.4046 2.33976 18.0804 2.33976ZM6.54635 0C2.9309 0 0 2.93312 0 6.55132V18.2501C0 21.8683 2.9309 24.8014 6.54635 24.8014H18.0804C21.6959 24.8014 24.6268 21.8683 24.6268 18.2501V6.55132C24.6268 2.93313 21.6959 0 18.0804 0H6.54635Z" fill="#3C4586"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4008 16.2006C14.6224 16.2006 16.3717 14.4319 16.3717 12.3134C16.3717 10.1949 14.6224 8.42618 12.4008 8.42618C10.1792 8.42618 8.42998 10.1949 8.42998 12.3134C8.42998 14.4319 10.1792 16.2006 12.4008 16.2006ZM12.4008 18.6884C15.9699 18.6884 18.8632 15.8342 18.8632 12.3134C18.8632 8.79256 15.9699 5.93837 12.4008 5.93837C8.83177 5.93837 5.93848 8.79256 5.93848 12.3134C5.93848 15.8342 8.83177 18.6884 12.4008 18.6884Z" fill="#3C4586"/>
<path d="M20.6095 5.67639C20.6095 6.59276 19.8666 7.33564 18.9503 7.33564C18.0339 7.33564 17.291 6.59276 17.291 5.67639C17.291 4.76001 18.0339 4.01714 18.9503 4.01714C19.8666 4.01714 20.6095 4.76001 20.6095 5.67639Z" fill="#3C4586"/>
</svg></a>
    	<a href="mailto:dwilnerlawrence@gmail.com"><svg  viewBox="0 0 28 20" fill="none" >
<rect x="1" y="1" width="25.7193" height="18" rx="4" stroke="#3C4586" stroke-width="2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.07324 1L2.91848 2L12.3777 13.1912L13.6841 14.7368L15.0117 13.2093L24.7531 2L25.6221 1H2.07324ZM22.1034 2L13.7052 11.6636L5.53721 2H22.1034Z" fill="#3C4586"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.3358 18L16.2722 11.7621L17.5602 10.1754L23.9118 18L24.7235 19H2.64526L3.45703 18L9.80864 10.1754L11.0966 11.7621L6.03303 18H21.3358Z" fill="#3C4586"/>
</svg>

</a>
    </div>




    );
  }
}

export default Footer
