// Operaciones con listas en JavaScript

let arrayA = [];
let arrayB = [];

const arrays = () => {
    for (let i = 0; i < 10; i++) {
        arrayA.push(parseInt(prompt(`Dame el elemento ${i + 1} del array A: `)));
    }
    
    for (let i = 0; i < 10; i++) {
        arrayB.push(parseInt(prompt(`Dame el elemento ${i + 1} del array B: `)));
    }

    let arrayCombinado = [...arrayA, ...arrayB];
    console.log(arrayCombinado);   

    let set = new Set(arrayCombinado);

    console.log(set);    

    let arrayC = [...set]

    arrayA.sort((a, b) => a - b);
    arrayB.sort((a, b) => a - b);
    arrayC.sort((a, b) => a - b);

    console.log(`A ordenado: ${arrayA.join(" ")} `);
    console.log(`B ordenado: ${arrayB.join(" ")} `);
    console.log(`C: ${arrayC.join(" ")} `);
}

arrays();

