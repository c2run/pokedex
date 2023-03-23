import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemons } from "../api/fetchPokemons";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Pokemon } from "../types/types.d";
import styles from "./pokemons.module.css";

const Pokemons = () => {
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
    };
    fetchAllPokemons();
  }, []);

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav>
          {pokemons?.slice(0, 151).map((pokemon) => (
            <Link
              key={pokemon.id}
              className={styles.listItem}
              to={`/pokemons/${pokemon.name.toLowerCase()}`}
            >
              <img
                className={styles.listItemIcon}
                src={pokemon.imgSrc}
                alt={pokemon.name}
              />
              <div className={styles.listItemText}>
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
              </div>
            </Link>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;