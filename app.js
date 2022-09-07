// Promedios de alumnos

function pedir_nombres() {
    let nombre = prompt ("Ingresar nombre del alumno");
    let apellido = prompt ("Ingresar apellido del alumno");
    console.log(`Nombre: ${nombre} ${apellido}`);
}


function pedir_notas() {
pedir_nombres();
let nota1 = Number(prompt ("Ingresar nota de evaluación"));
console.log(`Evaluación: ${nota1}`)

let nota2 = Number(prompt ("Ingresar nota de TP"));
console.log(`Trabajo práctico: ${nota2}`)

let nota3 = Number(prompt ("Ingresar nota de concepto"));
console.log(`Concepto: ${nota3}`)

let resultado_notas = nota1 + nota2 + nota3

promedio_notas = resultado_notas / 3

console.log(`Promedio: ${promedio_notas}`)

}

let alumnos = 1;


for(let alumnos = 1; alumnos <= 30 ; alumnos++) {
    pedir_notas();
    alert(`Nota final: ${promedio_notas}`)
    if(promedio_notas >= 7){
    alert("Alumno aprobado")
    } else {
    alert("Alumno desaprobado")
    }
    alert("SIGUIENTE ALUMNO")
}
    alert("TODOS LOS ALUMNOS FUERON EVALUADOS")
