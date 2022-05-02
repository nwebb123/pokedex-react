import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component{
    static defaultProps = {
        pokemon : [
            
            { id: 1, name:'Bulbasuar', type: 'Grass/Poison', base_experience: 62 },
            { id: 2, name:'Ivysaur', type: 'Grass/Poison', base_experience: 62 },
            { id: 3, name:'Venusaur', type: 'Grass/Poison', base_experience: 62 },
            { id: 4, name:'Charmander', type: 'Fire', base_experience: 62 },
            { id: 5, name:'Charmeleon', type: 'Fire', base_experience: 62 },
            { id: 6, name:'Charizard', type: 'Fire/Flying', base_experience: 62 },
            { id: 7, name:'Squirtle', type: 'Water', base_experience: 62 },
            { id: 8, name:'Wartortle', type: 'Water', base_experience: 63 },
            { id: 9, name:'Blastoise', type: 'Water', base_experience: 63 },
            // { id: 10, name:'Squirtle', type: 'Water', base_experience: 63 },
            // { id: 11, name:'Squirtle', type: 'Water', base_experience: 63 },
            // { id: 12, name:'Metapod', type: 'Bug', base_experience: 72 },
            // { id: 13, name:'Butterfree', type: 'Flying', base_experience: 178 },
            // { id: 25, name:'Pikachu', type: 'Electric', base_experience: 112 },
            // { id: 39, name:'Jigglypuff', type: 'Normal', base_experience: 95 },
            // { id: 94, name:'Gengar', type: 'Poison', base_experience: 225 },
            // { id: 133, name:'Eevee', type: 'Normal', base_experience: 65 },
        ]
    }
    render(){
        return(
            <div className="Pokedex">
                <h1 className="Pokedex-title">Pokemon Original Starters</h1>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p)=>(
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))} 
                </div>
               
            </div>
        )
    }
}

export default Pokedex;