// Número de aes (letra "a")

let palabra = prompt("Dame la palabra ");

const numeroDeAes = (palabra) => {

    let contador = 0;

    for (let i = 0 ; i <= palabra.length; i++) {

        if(palabra[i] === "a") {
            contador++;
        }     
    }
    return contador;
}

let res = numeroDeAes(palabra);
alert(res);
