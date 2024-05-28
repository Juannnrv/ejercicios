// Reglamento de evaluaciones

let nota1 = parseFloat(prompt ("What was your first score ?"));
let nota2 = parseFloat(prompt ("What was your second score ?"));

if (nota1 < 2 && nota2 < 2)  {
    alert ("You failed");
}
else if (nota1 > 9 && nota2 > 9) {
    alert ("You passed");
}
else {
    let nota3 = parseFloat(prompt ("What was your third score ?"));
    if ((nota1 + nota2 + nota3) / 3 < 3) {
        alert ("You failed");
    }
    else if ((nota1 + nota2 + nota3) / 3 >= 7 ) {
        alert ("You passed");
    }
    else {
        let exam = parseFloat(prompt ("What was your exam score ?"));
        if (exam < 5) {
            alert ("You failed");
        }
    }
}
