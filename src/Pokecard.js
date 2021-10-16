import React, { Component } from 'react';
import './Pokecard.css';

const y = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
class Pokecard extends Component {
  render(){
  let imgsrc = `${y}${this.props.id}.png` ;
  return (
    <div>
    <h2>{this.props.id}</h2>
    <img src ={imgsrc} alt="Loading"/> 
    <p> I am random </p>
    <p>{this.props.name}</p>
    <p>{this.props.type}</p>
    <p>{this.props.exp}</p>
    </div>
   
  );
  }
}

export default Pokecard;
