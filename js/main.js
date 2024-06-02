// Distancia entre dos strings

let palabra1 = prompt("Dame la primera palabra: ");
let palabra2 = prompt("Dame la segunda palabra: ");

const distancia = (str1, str2) => {
    let contador = 0;
    
    for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
        if (str1[i] !== str2[i]) {
            contador++;
        }
    }

    contador += Math.abs(str1.length - str2.length);

    return contador;
}

let resultado = distancia(palabra1, palabra2);
console.log(resultado);
