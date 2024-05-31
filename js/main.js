// Clonación de arreglos

let obj = {name : "Juan", age : 17};

const clone = () => {
    
    let clonado = {...obj};

    clonado.name = "Andres"

    return clonado
    
}

console.log(clone());
