
//Imports
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Search from './components/Search';
import NoResults from './components/Search';
import London, {
  NewYork,
  Paris
} from './components/Components';


class App extends Component {

  //Creating the routes
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact= {true} path="/" component={Search} />
            <Route path="/london" component={London} />
            <Route path="/newyork" component={NewYork} />
            <Route path="/paris" component={Paris} />
            <Route component={NoResults} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
