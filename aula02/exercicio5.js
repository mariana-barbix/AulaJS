function calcular()
{
    let resultado , lado;

    lado = Number(document.getElementById("lado").value);

    resultado = lado * lado;

    document.getElementById("resultado").innerHTML = "<p> O valor do quadrado é" + resultado + "</p>";
}