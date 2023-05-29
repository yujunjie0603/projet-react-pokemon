import React, {useState, useEffect} from "react";
import Pokemon from "../models/pokemon";
import PokemonService from "../services/pokemon-service";

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        PokemonService.getPokemons()
        .then((pokemons) => {
            setPokemons(pokemons)
        })
    }, []);

    return pokemons;
}

export default usePokemons;