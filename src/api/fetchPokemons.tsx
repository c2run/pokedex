import { formatPokemonName } from "../utils/utils";

export async function fetchPokemons(){
    const respuesta = await fetch(
        "https://unpkg.com/pokemons@1.1.0/pokemons.json"
    );


    if(!respuesta.ok){
        throw new Error("Falló al traer los pokemons");
    }
    
    const resultados = await respuesta.json();
    console.log(resultados);


    const pokemons = resultados.map((pokemon: any) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(pokemon.name)}.gif`,
    
    }));

    const uniquePokemons = pokemons.filter(
        (pokemon: any, index: number) =>
        pokemons.findIndex((other: any) => other.id === pokemon.id) === index
        
    );
    return uniquePokemons;
}
