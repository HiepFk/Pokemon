import React, { useEffect, useState } from "react";
import axios from "axios";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import Loading from "./components/Loading";
function App() {
  const [pokemons, setPokemons] = useState([]);
  const [link, setLink] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  const [nextUrl, setNextUrl] = useState("");
  const [preUrl, setPreUrl] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPokemon = async () => {
      setLoading(true);
      const res = await axios.get(link);
      setNextUrl(res.data.next);
      setPreUrl(res.data.previous);

      setPokemons(res.data.results);
      setLoading(false);
    };
    getPokemon();
  }, [link]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PokemonList
              pokemons={pokemons}
              nextUrl={nextUrl}
              preUrl={preUrl}
              setLink={setLink}
            />
          }
        />
        <Route exact path="/:id" element={<PokemonDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
