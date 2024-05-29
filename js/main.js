// Número de caracteres

let palabra = prompt("Dame la palabra ");
let caracter = prompt("Indicame el caracter especial ")

const numeroDeCaracteres = (palabra, caracter) => {

    let contador = 0;

    for (let i = 0 ; i <= palabra.length; i++) {

        if(palabra[i] === caracter.toString()) {
            contador++;
        }     
    }
    return contador;
}

let res = numeroDeCaracteres(palabra, caracter);
alert(res);
