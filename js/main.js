// Traducir palabras a números

const numerosAPalabras = () => {

    let array = ["cinco", "seis", "siete", "ocho", "nueve"];
    let nuevo = [];

    for (let i = 0; i < array.length; i++) {

        num = array[i].toString();

        switch(num) {
            case "cero":
                nuevo.push(0);
                break;
            case "uno":
                nuevo.push(1);
                break;
            case "dos":
                nuevo.push(2);
                break;
            case "tres":
                nuevo.push(3);
                break;
            case "cuatro":
                nuevo.push(4);
                break;
            case "cinco":
                nuevo.push(5);
                break;
            case "seis":
                nuevo.push(6);
                break;
            case "siete":
                nuevo.push(7);
                break;
            case "ocho":
                nuevo.push(8);
                break;
            case "nueve":
                nuevo.push(9);
                break;
        }
    }
    console.log([nuevo.join(", ")]);
}

numerosAPalabras();

