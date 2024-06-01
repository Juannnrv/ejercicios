// Encontrar palabras que terminan en "s"

const terminanConS = () => {

    let array = [];
    let seguir = true;

    while(seguir) {
        let elementos = prompt("Indicame los palabras de tu array, si no quieres agregar mas elementos presiona enter sin escribir nada:")

        if (elementos === "") {
            seguir = false;
        }
        else {
            array.push(elementos);
        }
    }

    let palabras = () => {
        return array.filter(array => array.toLowerCase().endsWith("s"));
    }

    console.log(palabras());
    
    }

    terminanConS()
