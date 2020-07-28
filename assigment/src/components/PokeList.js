import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    const pokemonItems = this.props.pokecard.map((poke, index) => {
      return (
        <li className="card__item" key={index}>
          <Pokemon image={poke.url} title={poke.name} type={poke.types} />
        </li>
      );
    });
    return <ul class="pokemon__cards">{pokemonItems}</ul>;
  }
}

export default PokeList;
