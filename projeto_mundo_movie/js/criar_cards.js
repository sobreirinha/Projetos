console.log(filmes[3].titulo);

let paginaInicial = document.getElementById("main_filmes") // Pega o filho da seção, que é a div
let dadosFilmes=  filmes; // Pega só os filmes


function criar_card_filmes(){
   paginaInicial.innerHTML = '';

   for(index = 3; index < dadosFilmes.length; index++) { //começa pelo index 3 no array
      let dado = dadosFilmes[index];
      paginaInicial.innerHTML += `
         <div class="card">
            <a href="https://www.google.com.br target="_blank">
               <img src="${dado.imagem}" alt="${dado.titulo}">
            </a>
            <h3>${dado.titulo}</h3>
         </div>`;
   }
}

let catalago = document.getElementById ("catalago");
let dadosCatalago = [...filmes, ...series];

function tela_catalago(){
   for(index = 0 ; index < dadosCatalago.length; index++){
      let dado = dadosCatalago[index];
      catalago.innerHTML += `
         <div class="card">
            <a href="https://www.google.com.br target="_blank">
               <img src="${dado.imagem}" alt="${dado.titulo}">
            </a>
            <h3>${dado.titulo}</h3>
         </div>`;
   }
}
criar_card_filmes();
tela_catalago();