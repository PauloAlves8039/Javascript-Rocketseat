var idade = parseInt(prompt('Digite sua idade: ')); 

/**
 * Verifica se idade de uma pessoa é maior de 18 anos.
 * 
 * @function
 * @name checaIdade
 * @param {*} idade parâmetro para verificação da idade.
 */
function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(idade >= 18){
                resolve();
            }else {
                reject();
            }
        }, 2000);
    });
}
checaIdade(20)
  .then(function () {
    console.log("Maior que 18");
  })
  .catch(function () {
    console.log("Menor que 18");
  });
