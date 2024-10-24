let resultado = document.getElementById("resultado");
let btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", calcularImc);

function calcularImc(){
console.log("Botão clicado!");

let nome = document.getElementById("nome").value;
let altura = parseFloat(document.getElementById("altura").value) / 100;
let peso = parseFloat(document.getElementById("peso").value);

   if (!peso || !altura || peso <= 10 || altura < 0.3 || altura > 2.5){
      resultado.innerHTML = `<p>Por favor digite números validos.</p>`
      return;
   }

let imc = peso / (altura * altura);
// let imc = peso (altura ** 2 );

   if (imc < 18.5){
      resultado.innerHTML = `<p>${nome} seu imc é ${imc.toFixed(2)}, está abaixo do peso.</p>`
   } else if (imc >= 18.5 && imc <= 24.9) {
      resultado.innerHTML = `<p>${nome},seu imc é ${imc.toFixed(2)}, está no peso ideal.</p>`
   } else if (imc >= 25 && imc <= 29.99 ) {
      resultado.innerHTML = `<p>${nome} seu imc é ${imc.toFixed(2)}, e está com sobre peso.</p>`
   } else if (imc >= 30 && imc <= 34.9) {
      resultado.innerHTML = `<p>${nome} seu imc é ${imc.toFixed(2)}, obesidade grau 1. </p>`
   } else if (imc >= 35 && imc <= 39.9) {
      resultado.innerHTML = `<p>${nome} seu imc é ${imc.toFixed(2)}, obesidade grau 2. </p>`
   } else if (imc > 40){
      resultado.innerHTML = `<p>${nome} seu IMC é ${imc.toFixed(2)}, obesidade grau 3.</p>`;
   } else {
      resultado.innerHTML = `<p>Resultado não encontrado, tente inserir sua altura e peso sem pontos e vírgulas </p>`;
   }
}

