// Encontrar números pares en un arreglo

const pares = () => {

    let array = [];
    let seguir = true;

    while(seguir) {
        let elementos = parseFloat(prompt("Indicame los números de tu array, si no quieres agregar mas elementos presiona enter sin escribir nada:"))

        if(isNaN(elementos)) {
            seguir = false;
        }
        else {
            elementos = parseFloat(elementos);
            array.push(elementos);
        }
    }

    let posicion = []
    array.forEach((x, i) => {
        
        if(x % 2 === 0) {
            posicion.push(i);
            return i    

        }
    })

    console.log(posicion);
    
    }

pares()

