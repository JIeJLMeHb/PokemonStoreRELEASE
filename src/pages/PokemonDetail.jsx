import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPokemonDetails, fetchPokemonSpecies } from '../services/pokeAPI';
import { CartContext } from '../context/CartContext';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemonDetails = async () => {
      try {
        const [details, speciesData] = await Promise.all([
          fetchPokemonDetails(id),
          fetchPokemonSpecies(id)
        ]);
        setPokemon(details);
        setSpecies(speciesData);
      } catch (error) {
        console.error('Error loading pokemon details:', error);
      } finally {
        setLoading(false);
      }
    };
    loadPokemonDetails();
  }, [id]);

  if (loading) return <div className="loading">Loading Pokemon details...</div>;
  if (!pokemon) return <div>Pokemon not found</div>;

  return (
    <div className="pokemon-detail">
      <Link to="/" className="back-link">← Back to Store</Link>
      
      <div className="detail-header">
        <img 
          src={pokemon.sprites.front_default} 
          alt={pokemon.name}
          className="detail-image"
        />
        <div className="detail-info">
          <h1 className="detail-name">{pokemon.name}</h1>
          <p className="detail-id">#{id.toString().padStart(3, '0')}</p>
          
          <div className="types">
            {pokemon.types.map(type => (
              <span key={type.type.name} className={`type type-${type.type.name}`}>
                {type.type.name}
              </span>
            ))}
          </div>
          
          <p className="detail-description">
            {species?.flavor_text_entries
              ?.find(entry => entry.language.name === 'en')
              ?.flavor_text || 'No description available'}
          </p>
          
          <div className="stats">
            <h3>Stats</h3>
            {pokemon.stats.map(stat => (
              <div key={stat.stat.name} className="stat">
                <span className="stat-name">{stat.stat.name}:</span>
                <span className="stat-value">{stat.base_stat}</span>
              </div>
            ))}
          </div>
          
          <div className="abilities">
            <h3>Abilities</h3>
            <div className="ability-list">
              {pokemon.abilities.map(ability => (
                <span key={ability.ability.name} className="ability">
                  {ability.ability.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;