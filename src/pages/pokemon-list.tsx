import React, { FunctionComponent, useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import PokemonCard from '../components/pokemon-card';
import usePokemons from '../hooks/pokemons.hook';
import PokemonSearch from './pokemon-search';

const PokemonList: FunctionComponent = () => {

    const pokemons = usePokemons();
    
    return (
        <div>
        <h1 className="center">Pokédex</h1>
        <div className="container"> 
            <Link to={`/pokemons/add`} className="btn btn-floation halfway-fab waves-effect waves-lignt">
                <i className="material-icons">add</i>
            </Link>
            <PokemonSearch />
            <div className="row"> 
            {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
            </div>
        </div>
        </div> 
    );
}
  
export default PokemonList;