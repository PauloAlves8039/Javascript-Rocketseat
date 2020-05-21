var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

/**
 * Realiza uma renderização de repositórios de uma conta do Github. 
 * 
 * @function
 * @name renderizarRepositorios
 * @param {*} repositories parâmetro para renderização de repositórios. 
 */
function renderizarRepositorios(repositories){
  for(rep of repositories){
    var textElement = document.createTextNode(rep.name);
    var liElement = document.createElement('li');

    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
}

/**
 * Responsável por listar os repositórios do Github renderizados. 
 * 
 * @function 
 * @name listarRepositorios
 */
function listarRepositorios(){
  var user = inputElement.value;

  if(!user) return;

  axios.get(`https://api.github.com/users/${user}/repos`)
    .then(function (response) {
      renderizarRepositorios(response.data);
    });

}
