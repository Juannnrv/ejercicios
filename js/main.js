// Transcribir ADN a ARN

let cadenaADN = prompt("Por favor, ingrese la cadena de ADN:");

const transcribir = (cadenaADN) => {
    const mapa = {
        "G": "C",
        "C": "G",
        "T": "A",
        "A": "U"
    };

    let cadenaARN = "";

    for (let i = 0; i < cadenaADN.length; i++) {
        let nucleotidoADN = cadenaADN[i];
        let nucleotidoARN = mapa[nucleotidoADN];

        if (!nucleotidoARN) {
            return "Error: Cadena de ADN contiene nucleótidos no válidos.";
        }

        cadenaARN += nucleotidoARN;
    }

    return cadenaARN;
}


let res = transcribir(cadenaADN);
alert(res);



