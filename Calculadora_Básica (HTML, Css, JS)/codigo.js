const suma = () => {
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;

    document.getElementById("resultado").innerHTML = parseInt(n1) + parseInt(n2);
}

const resta = () => {
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;

    document.getElementById("resultado").innerHTML = n1 - n2;
}

const multiplicacion = () => {
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;
    
    document.getElementById("resultado").innerHTML = n1 * n2;
}

const division = () => {
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;
    
    document.getElementById("resultado").innerHTML = n1 / n2;
}