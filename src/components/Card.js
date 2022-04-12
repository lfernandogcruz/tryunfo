// 3. Crie e renderize o componente Card com as props necessárias
// Crie um componente com o nome Card na pasta src/components e
// renderize-o no componente principal App. O componente Card deve receber
// as seguintes props:
// cardName, uma string;
// cardDescription, uma string;
// cardAttr1, uma string;
// cardAttr2, uma string;
// cardAttr3, uma string;
// cardImage, uma string;
// cardRare, uma string;
// cardTrunfo, um boolean;
// Renderize o componente Card dentro do componente principal App.
import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardTrunfo } = this.props;
    const { cardAttr2, cardAttr3, cardImage, cardRare } = this.props;
    return (
      <div>
        <p data-testid="name-card">{cardName}</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p data-testid="rare-card">{cardRare}</p>
        {
          cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;

// Exiba o valor da prop cardName. Você pode usar qualquer tag HTML que faça sentido,
// desde que ela tenha o atributo data-testid="name-card".

// Exiba a imagem usando a tag HTML img, com o atributo src que tenha o valor da
// prop cardImage e o atributo alt com o valor da prop cardName. Essa imagem também
// deve ter o atributo data-testid="image-card"

// Exiba o valor da prop cardDescription. Você pode usar qualquer tag HTML que faça
// sentido, desde que ela tenha o atributo data-testid="description-card".

// Exiba o valor da prop cardAttr1. Você pode usar qualquer tag HTML que faça sentido,
// desde que ela tenha o atributo data-testid="attr1-card".

// Exiba o valor da prop cardAttr2. Você pode usar qualquer tag HTML que faça sentido,
// desde que ela tenha o atributo data-testid="attr2-card"

// Exiba o valor da prop cardAttr3. Você pode usar qualquer tag HTML que faça sentido,
// desde que ela tenha o atributo data-testid="attr3-card".

// Exiba o valor da prop cardRare. Você pode usar qualquer tag HTML que faça sentido,
// desde que ela tenha o atributo data-testid="rare-card".

// Exiba o texto Super Trunfo somente quando o valor da prop cardTrunfo for true.
// Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo
// data-testid="trunfo-card".

// Dica: Você pode utilizar renderização condicional para renderizar ou não o texto
// do super trunfo.

// .

// O que será verificado
// Será validado se o componente data-testid="name-card" é exibido e possui o
// valor da prop cardName.
// Será validado se o componente data-testid="image-card" é exibido e possui o atributo
// src com o valor da prop cardImage e o atributo alt com o valor da prop cardName.
// Será validado se o componente data-testid="description-card" é exibido e possui o valor
// da prop cardDescription.
// Será validado se o componente data-testid="attr1-card" é exibido e possui o valor da
// prop cardAttr1.
// Será validado se o componente data-testid="attr2-card" é exibido e possui o valor da
// prop cardAttr2.
// Será validado se o componente data-testid="attr3-card" é exibido e possui o valor da
// prop cardAttr3.
// Será validado se o componente data-testid="rare-card" é exibido e possui o valor da
// prop cardRare.
// Será validado se o componente data-testid="trunfo-card" é exibido quando a prop
// cardTrunfo tiver o valor true.
// Será validado se o componente data-testid="trunfo-card" não é exibido quando a
// prop cardTrunfo tiver o valor false.
