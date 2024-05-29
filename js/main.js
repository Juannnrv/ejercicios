//  IMC (índice de masa corporal)

let peso = parseFloat(prompt("Indicame tu peso"));
let altura = parseFloat(prompt("Indicame tu altura"));

const bmi = (peso, altura) => {
    
    imc = peso / (altura**2)

    if (imc < 18.5) {
        alert("Bajo de peso");
    }
    else if (imc > 18.5 && imc <= 24.9) {
        alert("Normal");
    }
    else if (imc >= 25 && imc <= 29.9) {
        alert("Sobrepeso");
    }
    else if (imc >= 30) {
        alert("Obeso");
    }
}

console.log(bmi(peso, altura));