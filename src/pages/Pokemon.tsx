import {useNavigate, useParams} from "react-router-dom";
import PokeballImg from "../assets/pokeball.png";
import BulbasaurImg from "../assets/bulbasaur.gif";
import Footer from "../components/Footer";
import styles from "./pokemon.module.css";
import { fetchPokemon } from "../api/fetchPokemon";
import { useEffect } from "react";
import {useState} from "react";
import { PokemonDetails } from "../types/types";
import LoadingScreen from "../components/LoadingScreen";
import { waitFor } from "../utils/utils";

const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const {name} = useParams();
  const navigate = useNavigate();

    useEffect(() => {
       async function getPokemon(){
        setIsLoading(true);
        await waitFor(500);
        const fetchedPokemon = await fetchPokemon(name as string);
        setPokemon(fetchedPokemon);
        setIsLoading(false);
      }
      getPokemon();
    }, [name]);
    
    if(isLoading || !pokemon) return <LoadingScreen />;

  return (
    <>
    <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
      <img className={styles.pokeballImg} src={PokeballImg} alt="" /> Volver
    </button>
    <div className={styles.pokeballButton}>
      <main className={styles.pokemonInfo}>
        <div className={styles.pokemonTitle}>{pokemon?.name?.toUpperCase()}</div>
        <div>{pokemon?.id}</div>
        <div>
          <img className={styles.pokemonInfoImg} src={pokemon?.imgSrc} alt={pokemon?.name} />
        </div>
        <div>HP: {pokemon?.hp}</div>
        <div>Ataque: {pokemon?.attack}</div>
        <div>Defensa: {pokemon?.defense}</div>
      </main>
    </div>
    <Footer />
    </>
  )
}

export default Pokemon;