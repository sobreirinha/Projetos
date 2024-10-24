let dados = projetos;

let currentIndex = 0;

// Cria cada Elemento
function elementosProjetos(){
let listaProjetos = document.getElementById ("lista_projetos");   
   listaProjetos.innerHTML = '';

   if(currentIndex >= 0 && currentIndex < dados.length) {
      let dado = dados[currentIndex];
      listaProjetos.innerHTML= `<div class="card_projetos">
         <div class="projeto">
            <a href="${dado.url}" target="_blank">
               <img class="gif-projeto" src="${dado.imagem}" alt="${dado.nomeProjeto}">   
            </a>
         </div>

         <div class="info-projeto">

            <h3>${dado.nomeProjeto}</h3>

               <p><strong>Linguagem:</strong> ${dado.linguagem}</p>

                  <p><strong>Descrição:</strong> ${dado.descricao}</p>
         </div>
 </div>`;
   };
};


// Entender isto
function atualizarProjeto() {
   elementosProjetos();
}

// Botões
document.getElementById("prev").addEventListener("click", function() {
   clearInterval(intervalId);// Para quando clicarem
   if (currentIndex > 0) {
       currentIndex--; // Decrementa o índice
   }
   else {
      currentIndex = dados.length - 1; // Vai para o último projeto
   }
   atualizarProjeto(); // Atualiza a exibição
});

document.getElementById("next").addEventListener("click", function() {
   clearInterval(intervalId); // Para quando clicarem
   if (currentIndex < dados.length - 1) {
       currentIndex++; // Incrementa o índice
   }
   else {
      currentIndex = 0; // Retorna para o primeiro projeto
   }
   atualizarProjeto(); // Atualiza a exibição
});


elementosProjetos(); // Chama a funçao de criar o elemento
console.log(projetos);

// Carrossel automático
intervalId = setInterval(() =>  {
   if (currentIndex < dados.length - 1) {
      currentIndex++; // Incrementa o índice
   } else {
      currentIndex = 0; // Retorna para o primeiro projeto
   }
   atualizarProjeto(); // Atualiza a exibição
}, 3000); // Troca a cada 3 segundos