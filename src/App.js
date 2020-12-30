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
import {Home,Info, Past,Present,Future,Happening,Navigation,Homepreview, Mainmenu, AnnouncementPage, ExhibitionPage} from './components'
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
    };
  }

  componentDidMount() {
      fetch('https://api.airtable.com/v0/app9707VoQ6iOhLcD/Releases?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
        .then(res => res.json())
        .then(res => {
          this.setState({ releases: res.records })
        })
        .catch(error => console.log(error))
      fetch('https://api.airtable.com/v0/app9707VoQ6iOhLcD/About?api_key='+process.env.REACT_APP_AIRTABLE_API_KEY)
        .then(res => res.json())
        .then(res => {
          this.setState({ about: res.records })
        })
        .catch(error => console.log(error))
    

        
  }


render() {
  const { releases,about } = this.state;
  
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home about={about} releases={releases}/>
        </Route>
        <Route component={NoMatchPage} />
      </Switch>
    </div>
    </Router>
  );
}

}

export default App;
