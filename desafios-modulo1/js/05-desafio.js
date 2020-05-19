var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"],
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
  },
];

function exibirHabilidades(usuarios) {
  for (usr of usuarios) {
    console.log("O " + usr.nome + " possui as habilidade: " + usr.habilidades.join(", "));
  }
}

exibirHabilidades(usuarios);
