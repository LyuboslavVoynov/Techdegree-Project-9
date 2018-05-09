

import React from 'react';
import { Nav } from "./Search";
import Container from './Container';

//creating  list of photos //

const London = props => (
     createCity('london')
);

const NewYork = props => (
      createCity('new york')
);

const Paris = props => (
      createCity('paris')
);

//function for  efficiency
const createCity = arg => {
    return (
      <div>
          <Nav />
          <Container query={arg} />
      </div>
    )
}



export default London;
export {NewYork,Paris};
