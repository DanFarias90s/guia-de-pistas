
function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.querySelector(".resultados-pesquisa");

  let campoPesquisa = document.getElementById
  ("campo-pesquisa").value

  console.log(campoPesquisa);
  // Imprime a seção no console para fins de depuração (opcional)
  console.log(section);
  
if (!campoPesquisa) {
  section.innerHTML = "<p>Faça uma nova Busca!</p>"
  return
}

campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let titulo = "";
  let resultados = "";
  let descricao = "";
  let tipo = ""; 
  let localicao = "";
  let avaliacao = "";
  let tags = "";

  // Itera sobre os dados da pesquisa
  for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      localicao = dado.localizacao.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tipo = dado.tipo.toLowerCase()
      avaliacao = dado.avaliacao.toLowerCase()
      tags = dado.tags.toLowerCase()
      
      // Constrói o HTML para cada item da pesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
          <div class="item-resultado">
              <h2>
                  <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">
                  ${dado.descricao}
              </p>
              <a href=${dado.link} target="_blank">Mais informações clique aqui!</a>
          </div>
      `;
  } 
  }
  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
}

// Atribui os resultados gerados à seção HTML
section.innerHTML = resultados;

  
}

