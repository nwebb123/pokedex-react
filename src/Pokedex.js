import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component{
    static defaultProps = {
        pokemon : [
            //1st Gen
            { id: 1, name:'Bulbasuar', type: 'Grass/Poison', base_experience: 62 },
            { id: 2, name:'Ivysaur', type: 'Grass/Poison', base_experience: 62 },
            { id: 3, name:'Venusaur', type: 'Grass/Poison', base_experience: 62 }, 
            
            { id: 4, name:'Charmander', type: 'Fire', base_experience: 62 },
            { id: 5, name:'Charmeleon', type: 'Fire', base_experience: 62 },
            { id: 6, name:'Charizard', type: 'Fire/Flying', base_experience: 62 },  
            
            { id: 7, name:'Squirtle', type: 'Water', base_experience: 62 },
            { id: 8, name:'Wartortle', type: 'Water', base_experience: 63 },
            { id: 9, name:'Blastoise', type: 'Water', base_experience: 63 },
            
            { id: 25, name:'Pikachu', type: 'Electric', base_experience: 63 },

            //Second Gen
            { id: 152, name:'Chikorita', type: 'Grass', base_experience: 63 },
            { id: 153, name:'Bayleef', type: 'Grass', base_experience: 63 },
            { id: 154, name:'Meganium', type: 'Grass', base_experience: 63 },
            
            { id: 155, name:'Cyndaquil', type: 'Fire', base_experience: 63 },
            { id: 156, name:'Quilava', type: 'Fire', base_experience: 63 },
            { id: 157, name:'Typhlosion', type: 'Fire', base_experience: 63 },
            
            { id: 158, name:'Totodile', type: 'Water', base_experience: 63 },
            { id: 159, name:'Croconaw', type: 'Water', base_experience: 63 },
            { id: 160, name:'Feraligatr', type: 'Water', base_experience: 63 },
            
            //Third Gen
            { id: 252, name:'Treeko', type: 'Grass', base_experience: 63 },
            { id: 253, name:'Grovyle', type: 'Grass', base_experience: 63 },
            { id: 254, name:'Sceptile', type: 'Grass', base_experience: 63 },
            
            { id: 255, name:'Torchic', type: 'Fire', base_experience: 63 },
            { id: 256, name:'Combusken', type: 'Fire/Fighting', base_experience: 63 },
            { id: 257, name:'Blaziken', type: 'Fire/Fighting', base_experience: 63 },
            
            { id: 258, name:'Mudkip', type: 'Water', base_experience: 63 },
            { id: 259, name:'Marshtomp', type: 'Water/Ground', base_experience: 63 },
            { id: 260, name:'Swampert', type: 'Water/Ground', base_experience: 63 },
            


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