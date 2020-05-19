function adicionarQuadrado() {
  var quadrado = document.createElement("div");

  quadrado.style.width = "100px";
  quadrado.style.height = "100px";
  quadrado.style.display = "inline-block";
  quadrado.style.backgroundColor = "#FF0000";

  var app = document.getElementById("app");
  app.appendChild(quadrado);

  quadrado.onmousemove = function () {
    quadrado.style.backgroundColor = getRandomColor();
  };
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var newColor = getRandomColor();
