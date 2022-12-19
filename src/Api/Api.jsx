export const fetchPokemons = async (limit = 649, offset = 0) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = await response.json();

  return data;
};

export const getPokemons = async (url) => {
  const response = await fetch(url)
  return response.json()
}
