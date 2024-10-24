console.log(series[3].titulo);

let todasSeries = document.getElementById("series_cards") // Pega o filho da seção, que é a div
let dadosSeries = series; // Pega só as series

function criar_card_series(){
   todasSeries.innerHTML = '';
   for (let dados of dadosSeries) {
      todasSeries.innerHTML += `
         <div class="card">
            <a href="https://www.google.com.br/" target="_blank">
               <img src="${dados.imagem}" alt="${dados.titulo}">
            </a>
            <h3>${dados.titulo}</h3>
         </div>`;
     }
}
//console.log(dadosSeries);

criar_card_series();


