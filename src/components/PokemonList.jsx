import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import { fetchPokemons, fetchPokemonDetails } from '../services/pokeAPI';

const generatePrice = (id) => {
  const seed = id * 9301 + 49297;
  return (seed % 100) + 50;
};

const PokemonList = ({ searchQuery, sortOption, typeFilter }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const data = await fetchPokemons(151);
        
        const pokemonsWithDetails = await Promise.all(
          data.map(async (pokemon, index) => {
            const details = await fetchPokemonDetails(index + 1);
            return {
              ...pokemon,
              id: index + 1,
              price: generatePrice(index + 1),
              types: details.types.map(t => t.type.name)
            };
          })
        );
        
        setPokemons(pokemonsWithDetails);
        setFilteredPokemons(pokemonsWithDetails);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      } finally {
        setLoading(false);
      }
    };
    loadPokemons();
  }, []);

  useEffect(() => {
    let filtered = pokemons;

    if (searchQuery) {
      filtered = filtered.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (typeFilter !== 'all') {
      filtered = filtered.filter(pokemon =>
        pokemon.types.includes(typeFilter)
      );
    }

    switch (sortOption) {
      case 'price-asc':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        filtered = [...filtered].sort((a, b) => a.id - b.id);
    }

    setFilteredPokemons(filtered);
  }, [searchQuery, sortOption, typeFilter, pokemons]);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="pokemon-container">
      {filteredPokemons.length === 0 ? (
        <div className="no-results">
          No Pokemon found for "{searchQuery}"
        </div>
      ) : (
        filteredPokemons.map((pokemon) => (
          <PokemonCard 
            key={pokemon.name} 
            pokemon={pokemon} 
            id={pokemon.id} 
            price={pokemon.price} 
          />
        ))
      )}
    </div>
  );
};

export default PokemonList;