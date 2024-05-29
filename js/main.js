// Imprimir un arreglo

const imprimirArreglo= () =>{
    let elementos = [];
    let continuar = true;

    while (continuar) {
        let elemento = prompt("Ingresa un elemento del arreglo, si deseas no agregar más dejalo vacío:");

        if (elemento === null || elemento === "") {
            continuar = false;
        } else {
            elementos.push(elemento);
        }
    }

    for (let i = 0; i < elementos.length; i++) {
        console.log(elementos[i]);
    }
}

imprimirArreglo();
