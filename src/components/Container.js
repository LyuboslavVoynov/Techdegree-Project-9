///////////////////IMPORTS///////////////
//importing in the necessary items
import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';
import Links from './Links';

class Container extends Component {

    //hold returned photos, loading state, and photo links
    constructor() {
        super();
        this.state = {
          photos: [],
          links: [],
          loading: true,
        }
    }

  // search when the component is loaded
  componentDidMount() {
    this.performSearch(this.props.query);
  }

  //new query search
  componentWillReceiveProps(newProps) {
      this.performSearch(newProps.query);
  }
    //perform search by requesting from the api
    performSearch = (query = 'daft punk') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&safe_search=1&content_type=1&per_page=12&page=1&format=json&nojsoncallback=1`)
    .then(response => {
      //set the state with the received data
      this.setState({
        photos: response.data.photos.photo,
      });
      //create the links
      let photoLinks = this.state.photos.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg` );
      this.setState({
        links: photoLinks,
        loading: false,
      });
    })
    //error handler
    .catch(error => {
      console.log('ERROR!', error);
    });
  }
    //render photos if the loading state is false
    render() {
        return (
            <div className="photo-container">

             {(this.state.loading) ?  <h1 className = 'loading'>Loading...</h1> : <Links result={this.state.links} />}

            </div>
        );
    }
}

export default Container;
