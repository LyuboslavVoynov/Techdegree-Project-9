///////////////////IMPORTS///////////////
//importing in the necessary items
import React, { Component } from 'react';
import Form from './Form';
import Container from './Container';
import {NavLink} from 'react-router-dom';

//Navigation menu
const Nav = props => (
    <nav className="main-nav">
        <ul>
            <li><NavLink exact={true} to='/'>Home</NavLink></li>
            <li><NavLink to='/london'>London</NavLink></li>
            <li><NavLink to='/newyork'>New York</NavLink></li>
            <li><NavLink to='/paris'>Paris</NavLink></li>

        </ul>
    </nav>
);

//no reults
const NoResults = props => (
    <li className="not-found">
        <h3 className='no-result'>No Results Found.</h3>
        <p> Please try again.</p>
    </li>
);


class Search extends Component {
  //query info
    constructor() {
        super();
        this.state = {
          query: 'daft punk',
        }
    }
    //set the query as the search item
    onSearch = search => {
        this.setState({ query: search});
    }
    //render the searched photos
    render() {
        return (
            <div>
                <Form onSearch={this.onSearch} />
                <Nav />
                <Container query={this.state.query} />
            </div>
        );
    }
}

export default Search;
export {Nav,NoResults}
