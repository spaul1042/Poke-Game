import React, { Component } from 'react';
import './App.css';
import Pokedox from './Pokedox'

class App extends Component {
  render(){

  return (
    <div>

    <Pokedox
     pokeman = {[
       { id:1 , name:"Rockstar" ,type:"peaceful" ,exp: 20 } ,
       { id:2 , name:"Rockstar" ,type:"peaceful" ,exp: 30 } ,
       { id:3 , name:"Rockstar" ,type:"peaceful" ,exp: 40 } ,
       { id:4 , name:"Rockstar" ,type:"peaceful" ,exp: 50 } ,
       { id:5 , name:"Rockstar" ,type:"peaceful" ,exp: 60 } ,
       { id:6 , name:"Rockstar" ,type:"peaceful" ,exp: 70 } ,
     
     ]}
     />
     

    </div>
  );

  }
}

export default App;