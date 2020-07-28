import React from 'react';

class Pokemon extends React.Component {
  render() {
    const typeList = this.props.type.map((type, index) => {
      return <li key={index}>{type}</li>;
    });
    return (
      <article>
        <img
          className="pokemon__photo"
          src={this.props.image}
          alt={`Pokemon ${this.props.title}`}
        />
        <h2 className="pokemon__title">{this.props.title}</h2>
        <ul className="pokemon__type">{typeList}</ul>
      </article>
    );
  }
}

export default Pokemon;
