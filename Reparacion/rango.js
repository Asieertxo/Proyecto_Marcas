const rango = document.querySelector("#rango");
const precio = document.querySelector("#precio");
rango.oninput = () => {
    precio.innerHTML = rango.value * 10;
}

function calcular(){
    var num1 = parseInt(document.getElementById('rango').value);
    var basico = num1 / 10;
    var inferior = num1 / 8.5;
    var superior = num1 / 6.5;
    var top = num1 / 5.0;
    document.getElementById("mes-basico").innerHTML = basico.toFixed(2);
    document.getElementById("mes-inferior").innerHTML = inferior.toFixed(2);
    document.getElementById("mes-superior").innerHTML = superior.toFixed(2);
    document.getElementById("mes-top").innerHTML = top.toFixed(2);
}