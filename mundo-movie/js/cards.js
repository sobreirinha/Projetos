//

console.log(filmes[3].titulo);

let todosOsFilmes = document.getElementById("filmes_cards") // Pega o filho da seção, que é a div
let dadosFilmes=  filmes; // Pega só os filmes

function criar_card_filmes(){
   todosOsFilmes.innerHTML = '';

   for(let dado of dadosFilmes) {
      todosOsFilmes.innerHTML += `
         <div class="card">
            <a href="https://www.google.com.br target="_blank">
               <img src="${dado.imagem}" alt="${dado.titulo}">
            </a>
            <h3>${dado.titulo}</h3>
         </div>`;
   }
}


//console.log(dadosFilmes);
criar_card_filmes();



