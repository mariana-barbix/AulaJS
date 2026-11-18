document.write("<h1>Exercicio 06</h1>");

var quantidade = Number(prompt("Digite a quantidade de um produto:"));
var preco = Number(prompt("Digite o valor de um produto:"));

var subtotal = (quantidade * preco);
var desconto = subtotal * 10 / 100;
var final = (subtotal - desconto);

document.write("<p>O valor final do produto é:" + final + "</p>");



