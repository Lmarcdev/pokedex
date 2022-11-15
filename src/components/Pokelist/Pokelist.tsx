import React from 'react';
import Pokecard from '../Pokecard/Pokecard';

const Pokelist = () => {
    return (
        <div className='pokelist'>
            <Pokecard name="pikachu" />
            <Pokecard name="bulbasaur" /> 
            <Pokecard name="ivysaur" /> 
            <Pokecard name="venusaur" /> 
            <Pokecard name="charizard" />      
        </div>
    );
};

export default Pokelist