import React from 'react';

class Pokemon extends React.Component {
  render() {
    const typeList = this.props.type.map((type, index) => {
      return (
        <li className="pokemon__type--item" key={index}>
          {type}
        </li>
      );
    });
    return (
      <article className="pokemon__list">
        <img
          className="pokemon__photo"
          src={this.props.image}
          alt={`Pokemon ${this.props.title}`}
        />
        <h2 className="pokemon__title uppercase">{this.props.title}</h2>
        <ul className="pokemon__type">{typeList}</ul>
      </article>
    );
  }
}

Pokemon.defaultProps = {
  image:
    'Imagen no encontrada. Por favor, recarga de nuevo la página para mostrar',
  title: 'Adivina el nombre de este Pokemon',
  type: 'Está lleno de amor',
};

export default Pokemon;
