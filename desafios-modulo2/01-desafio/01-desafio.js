function adicionarQuadrado() {
  var quadrado = document.createElement("div");

  quadrado.style.width = "100px";
  quadrado.style.height = "100px";
  quadrado.style.display = "inline-block";
  quadrado.style.backgroundColor = "#FF0000";

  var app = document.getElementById("app");
  app.appendChild(quadrado);
}
