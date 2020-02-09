import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { AppQuery } from '../Graphql'

class App extends Component {

  render() {
    if (this.props.data.loading) {
      return <p>Loading...</p>;
    }
    return (
      <div className='App'>
        {this.props.data.ecommerces.map((ecommerce, index) => {
          const { name, day, location } = ecommerce
          return (
            <div key={index + name}>
              <p>{name}</p>
              <p>{day}</p>
              <p>{location}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const AppWithData = graphql(AppQuery)(App);

export default AppWithData;
