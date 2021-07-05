import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './components/Players/Player';
import Cart from './components/Cart/Cart';

function App() {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(()=>{
    fetch('https://mocki.io/v1/e4e96e73-82fa-4105-b285-9a76e309d0ca')
    .then(res => res.json())
    .then(data => setPlayers(data))
  }, [])

  const handleSelectPlayer = (player) => {
    const newCart = [...cart, player];
    setCart(newCart);
  }

  return (
    <div>
      <h1>Total Player: {players.length}</h1>
      <h2>Player Selected: {cart.length}</h2>
      <Cart cart={cart}></Cart>
      <ul>
        {
          players.map(player => <Player player = {player} handleSelectPlayer = {handleSelectPlayer} key = {player.salary} ></Player>)
        }
      </ul>
    </div>
  );
}

export default App;
