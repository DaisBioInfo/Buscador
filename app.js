function pesquisar() {
    // Seleciona a seção HTML com o ID "resultados-pesquisa" para inserir os resultados
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa nao conter algo valido ou sem nada
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada elemento (dado) no array 'areas'
    for (let dado of areas) {

        // se o campoPesquisa conter algo valido
        if(dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)){
        // Cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
        }      
    }
  
    // Atribui o HTML gerado ao conteúdo da seção
    section.innerHTML = resultados;
  }

