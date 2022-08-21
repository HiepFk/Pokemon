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
  const [page, setPage] = useState(1);
  const [link, setLink] = useState(process.env.REACT_APP_API_LINK);
  const [totalPage, setTotalPage] = useState();
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    const getPokemon = async () => {
      setLoading(true);
      const res = await axios.get(link);
      setLink(
        `https://pokeapi.co/api/v2/pokemon?offset=${20 * page - 20}&limit=20`
      );
      setPokemons(res.data.results);
      setTotalPage(Math.round(res.data.count / 20));
      setLoading(false);
    };
    getPokemon();
  }, [link, page]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Header text={text} setText={setText} setPage={setPage} />
      <Routes>
        <Route
          path="/"
          element={
            <PokemonList
              pokemons={pokemons}
              setPage={setPage}
              page={page}
              totalPage={totalPage}
            />
          }
        />
        <Route exact path="/:name" element={<PokemonDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
