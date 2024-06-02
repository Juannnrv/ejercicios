// Número de asteriscos en un arreglo

const numAsteriscos = () => {

    let matriz = [
        ['*', '', '*'],
        ['', '*', ''],
        ['*', '', '*']
    ];
    let contador = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {

            let asteriscos = matriz[i][j];

        switch(asteriscos) {
            case "*":
                contador++;
                break;
            }

        }
    }
        console.log(contador); 
}

numAsteriscos();

