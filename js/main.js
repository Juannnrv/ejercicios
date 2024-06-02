// Número de asteriscos en un arreglo

const numAsteriscos = () => {

    let array = ['', '*', '', '*'];
    let contador = 0;

    for (let i = 0; i < array.length; i++) {

        let asteriscos = array[i];

        switch(asteriscos) {
            case "*":
                contador++;
                break;
            }
        }
        console.log(contador); 
}

numAsteriscos();

