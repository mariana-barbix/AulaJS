document.write("<h1>Exercicio 09</h1>");

var principal = Number(prompt("Digite o valor pincipal:"));
var taxa = Number(prompt("Digite o valor dos juros em porcentagem:"));
var tempo = Number(prompt("Digite o valor do tempo em anos:"));

var montante = principal * (1 + (taxa * tempo))
document.write("<p>O valor do montante é:" + montante + "</p>");