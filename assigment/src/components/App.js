import React from 'react';
import '../stylesheet/App.css';
import PokeList from './PokeList';
import pokemonFromApi from '../data/itemList.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemonFromApi,
    };
  }

  render() {
    return (
      <div>
        <PokeList />
      </div>
    );
  }
}

export default App;
