import React, { Component } from 'react';
import Ball from "./Ball"
import "./App.css"; 
import Lottery from './Lottery';


class App extends Component {
  render() {
   return (
   <div className="App">
     <Lottery title="Lotto" />
     <Lottery title='Mini Daily' maxNum={10} maxBalls={4}/>
   </div>
    )
  };
}

export default App;
