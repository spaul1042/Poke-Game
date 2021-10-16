import React, { Component } from 'react';
import './App.css';
import Pokecard from'./Pokecard'

//const y = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
class Pokedox extends Component {
  render(){
  
  return (
    <div>
    { this.props.pokeman.map((x) => {
      return(
      <Pokecard id= {x.id} name ={x.name} type ={x.type} exp={ x.exp} />
  
      );
    
    })}
    </div>


  
  );
  }
}

export default Pokedox;
