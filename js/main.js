// Traducir números a palabras

const numerosAPalabras = () => {

    let array = [5, 6, 7, 8, 9];
    let nuevo = [];

    for (let i = 0; i < array.length; i++) {

        num = array[i].toString();

        switch(num) {
            case "0":
                nuevo.push("cero");
                break;
            case "1":
                nuevo.push("uno");
                break;
            case "2":
                nuevo.push("dos");
                break;
            case "3":
                nuevo.push("tres");
                break;
            case "4":
                nuevo.push("cuatro");
                break;
            case "5":
                nuevo.push("cinco");
                break;
            case "6":
                nuevo.push("seis");
                break;
            case "7":
                nuevo.push("siete");
                break;
            case "8":
                nuevo.push("ocho");
                break;
            case "9":
                nuevo.push("nueve");
                break;
        }
    }
    console.log([nuevo.join(", ")]);
}

numerosAPalabras();

