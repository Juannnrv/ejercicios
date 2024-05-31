// Validación calificación de estudiantes

let obj = [
    {
        name: "Juan", 
        score: 13
    },
    {
        name: "Andres",
        score: 90
    },  
    {
        name: "Manolo",
        score: 80
    }, 
    {
        name: "Santiago",
        score: 20
    }
];

const exam = (students) => {
    let passedStudents = students.filter(student => student.score >= 70);
    if (passedStudents.length > 0) {
        return `Los estudiantes que cumplen con la condición son: ${passedStudents.map(student => student.name).join(", ")}`;
    } else {
        return "Ningún estudiante cumple con la condición.";
    }
};

console.log(exam(obj));
