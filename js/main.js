// Encontrar palabras que empiecen por "a"

const empiezanConA = () => {

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
        return array.filter(array => array.toLowerCase().startsWith("a"));
    }

    console.log(palabras());
    
    }

    empiezanConA()
