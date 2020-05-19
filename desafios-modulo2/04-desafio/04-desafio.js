var nomes = ["Diego", "Gabriel", "Lucas"];
var listaDeNomes = document.querySelector("ul");
var inputElement = document.querySelector("input");

function adicionarItem(texto) {
  var listaDeElementos = document.createElement("li");
  var textElement = document.createTextNode(texto);

  listaDeElementos.appendChild(textElement);
  listaDeNomes.appendChild(listaDeElementos);
}

function adicionar() {
  adicionarItem(inputElement.value);
  inputElement.value = "";
}