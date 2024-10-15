//console.log(filmes[3].titulo);  aqui mostra o resultado do outro arquivo
//console.log(series[1].titulo);

window.onload = function() {
    const query = sessionStorage.getItem('query');
    if (query) {
        
        console.log('Valor da pesquisa:', query);
        document.getElementById('campo-pesquisa').value = query;
    }
}

function pesquisar(){
    let section = document.getElementById("resultado");
    let resultados = "";
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    let titulo= "";
    let descricao = "";
    let todosOsDados = [...filmes, ...series];
    //let tags = "";

    if(!campoPesquisa){ //vazio
        section.innerHTML = "<p>Digite algo para pesquisar</p>"
        return;
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    for(let dado of todosOsDados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        //tags= dado.tags.toLowerCase();
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += `
            <div  class="resultado_busca">
                <div>
                 <img src="${dado.imagem}" alt="poster do filme">     
                </div>
                <div class="descricao_resultado">
                    <h2>${dado.titulo}</h2>
                    <p>${dado.genero}</p>
                    <p>${dado.ano}</p>
                    <p>${dado.descricao}</p>
                </div>
            </div>
        `;
        };
        //console.log(dado.titulo.includes(campoPesquisa));
    };

    if (!resultados){ // se não tiver resultado faça
        resultados =  "<p>Não encontrado</p>";
    };
    section.innerHTML = resultados;
};
