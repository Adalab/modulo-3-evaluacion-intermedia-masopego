import React from 'react';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      initialColor: true,
    };
  }
  handleClick(ev) {
    this.setState((prevState, props) => {
      return {
        initialColor: !prevState.initialColor,
      };
    });
  }
  render() {
    const typeList = this.props.type.map((type, index) => {
      return (
        <li className="pokemon__type--item" key={index}>
          {type}
        </li>
      );
    });
    return (
      <article
        className={`pokemon__list ${this.state.initialColor ? '' : 'active'}`}
        onClick={this.handleClick}
      >
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
