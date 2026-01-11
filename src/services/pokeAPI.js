const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (limit = 50) => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
  const data = await response.json();
  return data.results;
};

export const fetchPokemonDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  return await response.json();
};

export const fetchPokemonSpecies = async (id) => {
  const response = await fetch(`${BASE_URL}/pokemon-species/${id}`);
  return await response.json();
};

export const fetchPokemonTypes = async (id) => {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  const data = await response.json();
  return data.types.map(t => t.type.name);
};