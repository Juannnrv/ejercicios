// Sumar arreglo

const sumarArreglo = () => {

    let elementos = [];
    let continuar = true;   

    while (continuar) {
        let elemento = prompt("Ingresa un elemento del arreglo, si deseas no agregar más dejalo vacío:");

        if (elemento === null || elemento === "") {
            continuar = false;
        } else {
            elementos.push(parseFloat(elemento));
        }
    }

    let contador = 0;

    for (let i = 0 ; i < elementos.length; i++) {
        contador += elementos[i];
    }
    return contador;
}

let res = sumarArreglo();
alert(res);
