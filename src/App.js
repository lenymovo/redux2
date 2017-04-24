import React, { Component } from 'react';
import Submenu from './Submenu';

export default class App extends Component{
  render(){
    return(
      <div>
        Menu
        <Submenu />
      </div>
    );
  }
};
