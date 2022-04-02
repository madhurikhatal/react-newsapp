import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

// class base component
export default class App extends Component {  
  render() {
    console.log ("this is render");
    return (
      <>
       <Navbar/>
       <News pageSize={6} country="in" category='general' />
      
     </>
    )
  }
}
