import React, { useEffect, useState } from "react";
import Navbar from "../components/Searchbar";
import Card from "../components/Card";
import fetchPokemons, { getPokemons } from "../Api/Api";
import "./Home.css"

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsList, setPokemonsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemons()
      .then((response) => {
        setPokemons(response.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getPokemonsList = async () => {
    const promises = pokemons.map(async (item) => {
      return await getPokemons(item.url);
    });

    const results = await Promise.all(promises);
    setPokemonsList(results);
    setLoading(false);
  };

  useEffect(() => {
    getPokemonsList();
  }, [pokemons]);

  return (
    <div>
      <Navbar />
      <div className="container">
        {loading ? (
          <div className="text-white">Carregando...</div>
        ) : (
          pokemonsList.map((pokemon, index) => {
            const gif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
              index + 1
            }.gif`;
            const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              index + 1
            }.png`;
            return (
              <Card
                key={index}
                name={pokemon.name}
                id={pokemon.id}
                gif={gif}
                img={img}
                types={pokemon.types}
              />
            );
          })
        )}
      </div>
      {/* {pokemons.map((pokemon, index) => {
        const gif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
          index + 1
        }.gif`;

        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`;

        return (
          <Card
            key={index}
            name={pokemon.name}
            gif={gif}
            img={img}
            id={index + 1}
          />
        );
      })} */}
    </div>
  );
};

export default Home;
