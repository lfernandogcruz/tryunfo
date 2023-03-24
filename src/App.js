import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedDeck: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
    this.verifyTrunfo = this.verifyTrunfo.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const update = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: update }, this.verifyInputs);
  }

  onSaveButtonClick() {
    const { cardName, cardDescription, cardAttr1 } = this.state;
    const { cardAttr2, cardAttr3, cardImage } = this.state;
    const { cardRare, cardTrunfo } = this.state;
    // const { savedDeck } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      savedDeck: [...prevState.savedDeck, newCard],
    }));

    this.setState(
      {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      },
      this.verifyTrunfo,
    );
  }

  verifyTrunfo() {
    const { savedDeck } = this.state;

    savedDeck.some((carta) => (carta.cardTrunfo
      ? this.setState({
        hasTrunfo: true,
      })
      : this.setState({
        hasTrunfo: false,
      })));
  }

  verifyInputs() {
    const { cardName, cardDescription, cardAttr1 } = this.state;
    const { cardAttr2, cardAttr3, cardImage } = this.state;

    const checkName = cardName.length > 0;
    const checkDescription = cardDescription.length > 0;
    const checkImage = cardImage.length > 0;

    const maxSum = 211;
    const maxAttr = 90;
    const cdAtt1 = Number(cardAttr1);
    const cdAtt2 = Number(cardAttr2);
    const cdAtt3 = Number(cardAttr3);
    const checkSumAttrs = cdAtt1 + cdAtt2 + cdAtt3 < maxSum;

    const checkAttr1 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxAttr;
    const checkAttr2 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxAttr;
    const checkAttr3 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxAttr;

    if (
      checkName
      && checkDescription
      && checkImage
      // && checkRarity
      && checkSumAttrs
      && checkAttr1
      && checkAttr2
      && checkAttr3
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const { cardName, cardDescription, cardAttr1 } = this.state;
    const { cardAttr2, cardAttr3, cardImage } = this.state;
    const { cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    const { hasTrunfo, savedDeck } = this.state;

    return (
      <section>
        <div>
          <h1>Tryunfo</h1>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div>
          {savedDeck.map((elCard) => (
            <div key={ elCard.cardName }>
              <Card
                cardName={ elCard.cardName }
                cardDescription={ elCard.cardDescription }
                cardAttr1={ elCard.cardAttr1 }
                cardAttr2={ elCard.cardAttr2 }
                cardAttr3={ elCard.cardAttr3 }
                cardImage={ elCard.cardImage }
                cardRare={ elCard.cardRare }
                cardTrunfo={ elCard.cardTrunfo }
                key={ elCard.cardName }
              />
              <button data-testid="delete-button" key={ elCard.cardName } type="button">
                Excluir
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
