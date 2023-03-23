import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

import BulbasaurPic from "../assets/bulbasaur.gif";
import styles from "./pokemons.module.css";

const Pokemons = () => {
    const [query, setQuery] = useState("");
  return (
   <>
   <Header query={query} setQuery={setQuery} />
   <main>
        <nav>
          <Link to="/" className={styles.listItem}>
            <img src={BulbasaurPic} alt="bulbasaur" className={styles.listItem} />
            <div>
              <span>Bulbasaur</span>
              <span>001</span>
            </div>
          </Link>
        </nav>
   </main>

   <Footer></Footer>
   </>
  )
}

export default Pokemons;