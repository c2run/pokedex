import {useNavigate, useParams} from "react-router-dom";
import PokeballImg from "../assets/pokeball.png";
import BulbasaurImg from "../assets/bulbasaur.gif";
import Footer from "../components/Footer";
import styles from "./pokemon.module.css";

const Pokemon = () => {
  const {name} = useParams();
  const navigate = useNavigate();
  return (
    <>
    <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
      <img className={styles.pokeballImg} src={PokeballImg} alt="" /> Volver
    </button>
    <div className={styles.pokeballButton}>
      <main className={styles.pokemonInfo}>
        <div className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
        <div>Nr. 001</div>
        <div>
          <img className={styles.pokemonInfoImg} src={BulbasaurImg} alt="bulbasaur" />
        </div>
        <div>HP: 000</div>
        <div>Ataque: 000</div>
        <div>Defensa: 000</div>
      </main>
    </div>
    <Footer />
    </>
  )
}

export default Pokemon;