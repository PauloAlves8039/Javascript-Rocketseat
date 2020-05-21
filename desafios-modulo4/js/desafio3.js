var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderizarRepositorios(repositories){
  listElement.innerHTML = '';
  for(rep of repositories){
    var textElement = document.createTextNode(rep.name);
    var liElement = document.createElement('li');

    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
}

/**
 * Realiza uma renderização da lista de repositório.
 * 
 * @function
 * @name renderizarCarregamento
 * @param {*} loading parâmetro de carregamento.
 */
function renderizarCarregamento(loading) {
  listElement.innerHTML = '';
  var textElement = document.createTextNode('Carregando...');
  var loadingElement = document.createElement('li');
  loadingElement.appendChild(textElement);
  listElement.appendChild(loadingElement);  
}

/**
 * Realiza uma renderização de erros.
 * 
 * @function
 * @name renderizarErro
 * @param {*} loading parâmetro de carregamento de erros.
 */
function renderizarErro(loading){
  listElement.innerHTML = '';

  var textElement = document.createTextNode('Erro ao carregar dados!');
  var errorElement = document.createElement('li');
  errorElement.style.color = '#FF0000';
  errorElement.appendChild(textElement);
  listElement.appendChild(errorElement);
}

function listarRepositorios(){
  var user = inputElement.value;

  if(!user) return;

  renderizarCarregamento();

  axios.get(`https://api.github.com/users/${user}/repos`)
    .then(function (response) {
      renderizarRepositorios(response.data);
    })
    .catch(function () {
      renderizarErro();
    });

}
