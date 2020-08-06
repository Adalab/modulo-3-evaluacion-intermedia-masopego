import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
  render() {
    const pokemonItems = this.props.pokecard.map((poke, id) => {
      return (
        <li className="card__item" key={id}>
          <Pokemon image={poke.url} title={poke.name} type={poke.types} />
        </li>
      );
    });
    return (
      <>
        <h1 className="title">
          Mis Pokemon{' '}
          <span>
            <i className="fas fa-heart"></i>
          </span>
        </h1>
        <ul className="pokemon__cards">{pokemonItems}</ul>
      </>
    );
  }
}

PokeList.propTypes = {
  pokecard: PropTypes.array,
};

export default PokeList;
