// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getPokemonList } from './api/api';
import './App.css';
import Board from './components/board';
// import Card from './components/card';
import { pokemons } from './types/pokemon/pokemon';


export interface Props {
  something?: string;
}



function App({ something }: Props) {
  const [pokemons, setPokemons] = useState<pokemons[]>([])


  useEffect(() => {
    const getPoke = async () => {
      const { results } = await getPokemonList()
      setPokemons(results)
    }
    getPoke()
  }, [])

  // const front = pokemon?.data?.sprites?.front_default;

  return (
    <div className="App">
      <Board pokemons={pokemons} />
      {/* {front && <Card image={front} />} */}
    </div>
  );
}

export default App;
