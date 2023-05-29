import React, {useState, useEffect} from "react";
import Pokemon from "../models/pokemon";
import PokemonService from "../services/pokemon-service";

const usePokemon = (pokemonId: string) => {

    const [pokemon, setPokemon] = useState<Pokemon|null>(null);
    
    useEffect(() => {
        PokemonService.getPokemon(+pokemonId).
        then((pokemon) => {
            if (pokemon) {
                setPokemon(pokemon);
            }
        });
    }, [pokemonId]);
    return pokemon;
}

export default usePokemon;