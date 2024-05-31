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

    let pares = array.filter((x) => x % 2 === 0);

    console.log(pares);
    
    }


pares()

