import React, { Component } from 'react';

export default class Submenu extends Component{

  // constructor(props){
  //   super(props);
  //   this.state = { active: true };
  // }

  console.log(this.constructor;

  changeState(){
    // this.setState({ active: !this.state.active });
    // console.log(this.state.active);
  }

  render(){ return <div onClick={ this.changeState.bind(this) }>Подменю</div> }
};
