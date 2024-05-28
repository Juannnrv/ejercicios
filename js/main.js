
// Cálculo del valor de un capital futuro

let capital = parseFloat(prompt ("What is your capital [$] ?"));
let tiempo = parseFloat(prompt ("How long time is your period [years] ?"));
let interes = parseFloat(prompt ("What is your interest rate [%] ?"));

if (capital < 0) {
    alert("El valor numerico del capital debe ser mayor o igual a 0");
}
else if (tiempo <= 0) {
    alert("El valor numerico del tiempo debe ser menor a 0");
}
else if (interes < 0 && interes > 100) {
    alert("El valor numerico de la tasa de interes debe ser mayor a 0 y menor a 100");
}

let final = capital*((1+(interes/100))**tiempo);
let capitalFinal = final.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

alert("Capital final es de: $"+ capitalFinal +" pesos");
