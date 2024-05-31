// Encontrar el número mínimo

const max = () => {
    
    let array = [];
    let seguir = true;
    
    while(seguir) {
        
        let num = parseFloat(prompt(`Dame los números, si quieres parar presiona enter sin escribir nada: `))

        if(isNaN(num)) {
            seguir = false;
        }
        else {
            num = parseFloat(num)
            array.push(num);
        }
    }

    let orden = array.sort((a, b) => a - b);

    console.log(`El número máximo del Array de número es => ${orden[0]}`);
}   

max();