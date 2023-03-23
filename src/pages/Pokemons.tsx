import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Pokemons = () => {
    const [query, setQuery] = useState("Bulbasaur");
  return (
   <>
   <Header query={query} setQuery={setQuery} />
   <main>
        <h1>Pokemons</h1>
   </main>

   <Footer></Footer>
   </>
  )
}

export default Pokemons;