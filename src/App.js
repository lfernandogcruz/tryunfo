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
      // hasTrunfo,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const update = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: update }, this.verifyInputs);
  }

  onSaveButtonClick() {
    console.log('eita');
  }

  verifyInputs() {
    const { cardName, cardDescription, cardAttr1 } = this.state;
    const { cardAttr2, cardAttr3, cardImage } = this.state;
    const { cardRare } = this.state;
    // verifica
    // nome.length !== 0
    // descricao.length !== 0
    // imagem.length !== 0
    // raridade.length !== 0
    const checkName = cardName.length > 0;
    const checkDescription = cardDescription.length > 0;
    const checkImage = cardImage.length > 0;
    const checkRarity = cardRare.length > 0;

    // attr1 + attr2 + attr3 <= 210
    const maxSum = 211;
    const maxAttr = 90;
    const checkSumAttrs = (
      Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
    ) < maxSum;
    // attrX = entre 0 e 90
    const checkAttr1 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxAttr;
    const checkAttr2 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxAttr;
    const checkAttr3 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxAttr;
    // this.setState({isSaveButtinDisabled: false}) // setar isso
    if (
      checkName
      && checkDescription
      && checkImage
      && checkRarity
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
    // const { hasTrunfo } = this.props;
    return (
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
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
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
    );
  }
}

export default App;
