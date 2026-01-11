import React, { useState } from 'react';
import PokemonList from '../components/PokemonList';
import SearchBox from '../components/SearchBox';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [typeFilter, setTypeFilter] = useState('all');

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleTypeFilterChange = (e) => {
    setTypeFilter(e.target.value);
  };

  return (
    <div className="home-page">
      <h1 className="page-title">Buy your favorite Pokemon here!</h1>
      <SearchBox onSearch={handleSearch} />
      
      <div className="filters-container">
        <div className="filter-group">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortOption} onChange={handleSortChange} className="filter-select">
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="type">Filter by type:</label>
          <select id="type" value={typeFilter} onChange={handleTypeFilterChange} className="filter-select">
            <option value="all">All Types</option>
            <option value="normal">Normal</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="ice">Ice</option>
            <option value="fighting">Fighting</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="flying">Flying</option>
            <option value="psychic">Psychic</option>
            <option value="bug">Bug</option>
            <option value="rock">Rock</option>
            <option value="ghost">Ghost</option>
            <option value="dark">Dark</option>
            <option value="dragon">Dragon</option>
            <option value="steel">Steel</option>
            <option value="fairy">Fairy</option>
          </select>
        </div>
      </div>
      
      <PokemonList 
        searchQuery={searchQuery} 
        sortOption={sortOption} 
        typeFilter={typeFilter} 
      />
    </div>
  );
};

export default HomePage;