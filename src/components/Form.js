// 1.
// Crie o formulário que será usado para adicionar cartas ao baralho
// .
// Crie um formulário que será utilizado para criar as cartas do seu baralho.

// Crie um componente chamado Form dentro da pasta src/components.

// Renderize o componente Form dentro do componente principal App.

// Crie os seguintes itens dentro do component Form:

// bulb Dica: Você pode criar um componente de input. Lembre-se de sempre ter uma
// label associada para cada input.

// um campo do tipo text que contenha o atributo data-testid="name-input".
// Este campo será usado para inserir o nome da carta.

// um campo do tipo textarea que contenha o atributo data-testid="description-input".
// Este campo será usado para inserir a descrição da carta.

// um campo do tipo number que contenha o atributo data-testid="attr1-input".
// Este campo será usado para inserir o primeiro atributo da carta.
// Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.

// um campo do tipo number que contenha o atributo data-testid="attr2-input".
// Este campo será usado para inserir o segundo atributo da carta.
// Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.

// um campo do tipo number que contenha o atributo data-testid="attr3-input".
// Este campo será usado para inserir o terceiro atributo da carta.
// Ele é livre para você adicionar o atributo que mais combinar com o seu baralho.

// um campo do tipo text que contenha o atributo data-testid="image-input".
// Este campo será usado para inserir o caminho para imagem da carta.

// um campo do tipo select que contenha o atributo data-testid="rare-input".
// Este campo será usado para inserir a raridade da carta e deverá ter as
// options: normal, raro e muito raro (é importante que as opções estejam nessa ordem).

// um campo do tipo checkbox que contenha o atributo data-testid="trunfo-input".
// Este campo será usado para inserir se a carta é o Super Trunfo.

// um buttonque contenha o atributo data-testid="save-button" e que tenha o texto "Salvar".

// .

// O que será verificado
// Será validado se existe um input texto que possui o data-testid="name-input".
// Será validado se existe um input textarea que possui o data-testid="description-input".
// Será validado se existe um input number que possui o data-testid="attr1-input".
// Será validado se existe um input number que possui o data-testid="attr2-input".
// Será validado se existe um input number que possui o data-testid="attr3-input".
// Será validado se existe um input texto que possui o data-testid="image-input".
// Será validado se existe um input select que possui o data-testid="rare-input".
// Será validado se existe um input checkbox que possui o data-testid="trunfo-input".
// Será validado se existe um botão que possui o data-testid="save-button".

// .
// .
// .

// 2.
// Adicione as props necessárias ao componente de formulário
// .
// O componente Form deverá receber as seguintes props:
// cardName, uma string;
// cardDescription, uma string;
// cardAttr1, uma string;
// cardAttr2, uma string;
// cardAttr3, uma string;
// cardImage, uma string;
// cardRare, uma string;
// cardTrunfo, um boolean;
// hasTrunfo, um boolean;
// isSaveButtonDisabled, um boolean;
// onInputChange, uma callback;
// onSaveButtonClick, uma callback;
// As props do componente Form deverão ser utilizadas conforme o indicado abaixo:

// Campo name-input: a propriedade value deve receber o valor da prop cardName e a prop
// onChange deve receber o valor da prop onInputChange.

// Campo description-input: a propriedade value deve receber o valor da prop cardDescription e
// a prop onChange deve receber o valor da prop onInputChange.

// Campo attr1-input: a propriedade value deve receber o valor da prop cardAttr1 e a prop
// onChange deve receber o valor da prop onInputChange.

// Campo attr2-input: a propriedade value deve receber o valor da prop cardAttr2 e a prop
// onChange deve receber o valor da prop onInputChange.

// Campo attr3-input: a propriedade value deve receber o valor da prop cardAttr3 e a prop
// onChange deve receber o valor da prop onInputChange.

// Campo image-input: a propriedade value deve receber o valor da prop cardImage e a prop
// onChange deve receber o valor da prop onInputChange.

// Campo rare-input: a propriedade value deve receber o valor da prop cardRare e a prop
// onChange deve receber o valor da prop onInputChange.

// Campo trunfo-input: a propriedade checked deve receber o valor da prop cardTrunfo e a
// prop onChange deve receber o valor da prop onInputChange.

// Botão save-button: a propriedade disabled deve receber o valor da prop isSaveButtonDisabled
// e a prop onClick deve receber o valor da prop onSaveButtonClick.

// Obs: por enquanto a prop hasTrunfo ainda não foi utilizada, mas não se preocupe,
// pois ela será usada em breve.

// O que será verificado
// Será validado se o campo de nome recebe o valor da prop cardName e se a callback
// onInputChange é chamada quando o campo sofre alguma alteração.

// Será validado se o campo de descrição recebe o valor da prop cardDescription e se a
// callback onInputChange é chamada quando o campo sofre alguma alteração.

// Será validado se o campo do atributo 1 recebe o valor da prop cardAttr1 e se a callback
// onInputChange é chamada quando o campo sofre alguma alteração.

// Será validado se o campo do atributo 2 recebe o valor da prop cardAttr2 e se a callback
// onInputChange é chamada quando o campo sofre alguma alteração.

// Será validado se o campo do atributo 3 recebe o valor da prop cardAttr3 e se a callback
// onInputChange é chamada quando o campo sofre alguma alteração.

// Será validado se o campo de imagem recebe o valor da prop cardImage e se a callback
// onInputChange é chamada quando o campo sofre alguma alteração.

// Será validado se o campo de raridade recebe o valor da prop cardRare e se a callback
// onInputChange é chamada quando o campo sofre alguma alteração.

// Será validado se o campo de Super Trufo recebe o valor da prop cardTrunfo e se a
// callback onInputChange é chamada quando o campo sofre alguma alteração.

// Será validado se o botão de salvar é habilitado se o valor da prop isSaveButtonDisabled
// for false.

// Será validado se o botão de salvar é desabilitado se o valor da prop isSaveButtonDisabled
// for true.

// Será validado a callback onSaveButtonClick é chamada quando o botão é clicado.
