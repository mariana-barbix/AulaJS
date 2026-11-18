function calcular()
{
    let resultado , base , altu;

    base = Number(document.getElementById("base").value);
    altu = Number(document.getElementById("altu").value);

    resultado = (base * altu)/2;

    document.getElementById("resultado").innerHTML = "<p> O valor do triangulo é" + resultado + "</p>";
}
