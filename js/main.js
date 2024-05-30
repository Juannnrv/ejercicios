// Remover ceros

const removerCeros = () => {

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

    let elementoAeliminar = 0
    let nuevoarray = elementos.filter(item => item !== elementoAeliminar);

    return nuevoarray
}

let res = removerCeros();
alert(res.join(", "));
