var nomes = ["Diego", "Gabriel", "Lucas"];
var listaDeNomes = document.querySelector("ul");

for (nome of nomes) {
  var listaDeElementos = document.createElement("li");
  var conteudoDaLista = document.createTextNode(nome);
  listaDeElementos.appendChild(conteudoDaLista);
  listaDeNomes.appendChild(listaDeElementos);
}
