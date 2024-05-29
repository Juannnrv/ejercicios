// Sumar rango de números

let n1 = parseFloat(prompt("Dame el primer número "));
let n2 = parseFloat(prompt("Dame el segundo número "));

const sumarRango = (n1, n2) => {

    let contador = 0;

    for (let i = n1 ; i <= n2; i++) {
        contador += i;
    }
    return contador;
}

let res = sumarRango(n1, n2);
alert(res);
