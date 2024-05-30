// Sumar arreglo entre el rango

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
    
    let n1 = parseFloat(prompt("Dame la posición inicial "));
    let n2 = parseFloat(prompt("Dame la posición final  "));

    if (n1 < 0 || n2 >= elementos.length || n1 > n2) {
        return "Lo siento, la posición que ingresaste no está dentro del rango del arreglo.";
    }

    let contador = 0;

    for (let i = n1; i <= n2; i++) {
        contador += elementos[i];   
    }
    return contador;
}

let res = sumarArreglo();
alert(res);

