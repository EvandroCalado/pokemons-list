import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchPokemons, getPokemons } from "../Api/Api";
import Container from "../components/Container";
import Pagination from "../components/Pagination";
import Searchbar from "../components/Searchbar";
import Header from "../components/Header";

const itemsPerPage = 151;

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsList, setPokemonsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    fetchPokemons(itemsPerPage, itemsPerPage * page)
      .then((response) => {
        setPokemons(response.results);
        setTotalPages(Math.ceil(response.count / itemsPerPage));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const getPokemonsList = async () => {
    const promises = pokemons.map(async (item) => {
      return await getPokemons(item.url);
    });

    const results = await Promise.all(promises);
    setPokemonsList(results);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getPokemonsList();
  }, [pokemons]);

  const searchPokemons = (name) => {
    const filteredPokemons = [];
    if (name === "") {
      getPokemonsList();
    }
    for (let pokemon in pokemonsList) {
      if (pokemonsList[pokemon].name.includes(name)) {
        filteredPokemons.push(pokemonsList[pokemon]);
      }
    }
    setPokemonsList(filteredPokemons);
  };

  const renderCard = pokemonsList.map((pokemon, index) => {
    const gif = pokemon.sprites.versions["generation-v"]["black-white"].animated
      .front_default
      ? pokemon.sprites.versions["generation-v"]["black-white"].animated
          .front_default
      : pokemon.sprites.versions["generation-v"]["black-white"].front_default;

    const img = pokemon.sprites.other["official-artwork"].front_default;

    return loading ? (
      <div key={index} className="card-loading-container">
        <div className="card-loading"></div>
      </div>
    ) : (
      <Card
        key={index}
        name={pokemon.name}
        id={pokemon.id}
        gif={gif}
        img={img}
        types={pokemon.types}
        favorite={favorite}
        setFavorite={setFavorite}
      />
    );
  });

  return (
    <div>
      <Header favorite={favorite} />
      <Searchbar searchPokemons={searchPokemons} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      <Container renderCard={renderCard} />
    </div>
  );
};

export default Home;
