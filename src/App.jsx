import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Изменено с BrowserRouter на HashRouter
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import PokemonDetail from './pages/PokemonDetail';
import ContactPage from './pages/ContactPage';
import ShoppingCart from './components/ShoppingCart';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router> {/* Теперь использует HashRouter */}
        <div className="App">
          <Navigation />
          <ShoppingCart />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;