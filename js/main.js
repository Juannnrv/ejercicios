// Combinación de arreglos

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = ["a", "b", "c", "d", "e", "f"];

const combinarArrays = (array1, array2) => {

    let combinado = [...array1, ...array2];

    console.table(combinado);

    return combinado


}

combinarArrays(array1, array2);
