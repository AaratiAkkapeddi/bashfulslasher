import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  RouteComponentProps,
  useParams
} from "react-router-dom";
import './App.css';
import {Home, About, Studio} from './components'
const NoMatchPage = () => {
  return (
    <div>
      <h3 className='oops-message text-large'>Woops! This page does not exist. Maybe try going <a className='link' href='/'>Home</a>?</h3>
    </div>
  );
};
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        err : null,
        isLoaded : false,
        releases: [],
        about: [],
        studio: []
    };
  }

  componentDidMount() {
      fetch('https://api.airtable.com/v0/app9707VoQ6iOhLcD/Releases?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
        .then(res => res.json())
        .then(res => {
          this.setState({ releases: res.records.reverse() })
        })
        .catch(error => console.log(error))
      fetch('https://api.airtable.com/v0/app9707VoQ6iOhLcD/About?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
        .then(res => res.json())
        .then(res => {
          this.setState({ about: res.records })
        })
        .catch(error => console.log(error))
      fetch('https://api.airtable.com/v0/app9707VoQ6iOhLcD/Studio?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
        .then(res => res.json())
        .then(res => {
          this.setState({ studio: res.records })
        })
        .catch(error => console.log(error))
    

        
  }


render() {
  const { releases,about, studio } = this.state;
  
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home about={about} releases={releases}/>
        </Route>
        <Route exact path="/about">
          <About about={about} />
        </Route>
        <Route exact path="/studio">
          <Studio studio={studio} />
        </Route>
        <Route component={NoMatchPage} />
      </Switch>
    </div>
    </Router>
  );
}

}

export default App;
