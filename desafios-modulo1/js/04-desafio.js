function experiencia(anos) {
  if (anos >= 0 && anos <= 1) {
    return console.log("Iniciante");
  } else if (anos >= 1 && anos <= 3) {
    return console.log("Intermediário");
  } else if (anos >= 3 && anos <= 6) {
    return console.log("Avançado");
  } else if (anos >= 7) {
    return console.log("Jedi Master");
  }
}

var anosEstudos = 7;
experiencia(anosEstudos);
