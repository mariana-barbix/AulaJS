document.write("<h1>Exercicio 08</h1>");

var peso = Number(prompt("Digite o seu peso:"));
var altura = Number(prompt("Digite a sua altura:"));

var imc = peso / (altura * altura);
document.write("<p>O IMC é:" + imc + "</p>");
