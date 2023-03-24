//https://pokeapi.co/api/v2/pokemon/bulbasaur
import { PokemonDetails } from "../types/types";
import { formatName } from "../utils/utils";

export async function fetchPokemon(name: string): Promise<PokemonDetails> {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${formatName(name)}`);

    if(!respuesta.ok){
        throw new Error(`Error recuperando ${name}`);
    }
    const resultado = await respuesta.json();
    const pokemon = {
        name: resultado.name,
        id: resultado.id,
        imgSrc: resultado.sprites.front_default,
        hp: resultado.stats[0].base_stat,
        attack: resultado.stats[1].base_stat,
        defense: resultado.stats[2].base_stat,

    }
    return pokemon;
}