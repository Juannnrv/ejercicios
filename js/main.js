// Capitalizar palabra

let palabra = prompt("Deme la palabra ");

const capitalizar = (str) => {

    return str.split(' ')
            .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
            .join(' ');
            
}

console.log(capitalizar(palabra));
