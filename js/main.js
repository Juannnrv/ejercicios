// Calculo de expresión Matematica

const a = parseFloat(prompt("Ingrese el valor de la propiedad a:"));
const b = parseFloat(prompt("Ingrese el valor de la propiedad b:"));
const c = parseFloat(prompt("Ingrese el valor de la propiedad c:"));

const objeto = { a, b, c };

const calcularExpresion = ({ a, b, c }) => (a * b) + c;

const resultado = calcularExpresion(objeto);

alert(`El valor total calculado de la expresión es ${resultado}`);

