//  Duplicar elementos de un arreglo

const duplicar = () => {

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

    let por = array.map(elemento => elemento * 2);

    console.log(por);
    
    }

duplicar()

