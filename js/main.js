// Calcular impuestos

let edad = parseFloat(prompt("Indicame tu edad"));
let ingresos = parseFloat(prompt("Dime los ingresos que recibes"));

const calcularImpuestos = (edad, ingresos) => {

    if(edad >= 18 && ingresos >= 1000) {
        let porcentaje = ingresos * 0.4;
        alert(porcentaje);
    }
    else {
        alert(0);
    }
}

console.log(calcularImpuestos(edad, ingresos))