// Obtener nota de evaluacion oral mediante preguntas.

const preguntas = ["¿De qué nacionalidad era Juana de Arco?", "¿Quién dibujo al famoso Hombre de Vitruvio?", "¿Qué famoso filósofo fue maestro de Alejandro Magno durante cinco años?", "¿Quién fue el último zar de Rusia?", "¿Quienes eran los templarios?", "¿Qué inició la Segunda Guerra Mundial?", "¿Dónde se han encontrado principalmente pinturas del período Paleolítico?", "¿Era Averroes un antiguo filósofo griego?", "¿Cómo comenzó la Primera Guerra Mundial?", "¿En qué año descubrió Cristóbal Colón, América?", "PODRÁ REEVER CADA PREGUNTA Y EL NUMERO EN LA CONSOLA PARA PODER DEFINIR LA NOTA FINAL"]

const mas_preguntas = ["\n \n NUEVAS PREGUNTAS: ", "¿A qué emperador romano asesinó un grupo de senadores?", "¿Quién dijo que la tierra giraba alrededor del sol?", "¿Cuál es el antiguo nombre de San Petersburgo?", "¿Qué famosa batalla perdió y dejó humillado a Napoleón Bonaparte?", "¿Quién fue el primer presidente de los Estados Unidos?"]

const todas_preguntas = preguntas.concat(mas_preguntas)



// Promedios de alumnos

function pedir_nombres() {
    let nombre = prompt ("Ingresar nombre del alumno");
    let apellido = prompt ("Ingresar apellido del alumno");
    console.log(`Nombre: ${nombre} ${apellido}`);
}


function pedir_notas() {

    pedir_nombres();    

let nota1 = Number(prompt ("Ingresar nota de evaluación oral"));
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




for(let alumnos = 1; alumnos <= 99 ; alumnos++) {
    for (let ip = 0; ip <= 10; ip++) {
        alert (preguntas[ip]);
    }
    
    let mas_preguntas = prompt ("¿Necesita mas preguntas?")
    if (mas_preguntas === "si"){
      alert(todas_preguntas)
    }
    preguntas.forEach((cada_pregunta, indice_pregunta) =>{
        console.log(`${indice_pregunta}:${cada_pregunta}`);
    })
    pedir_notas();
    alert(`Nota final: ${promedio_notas}`)
    if(promedio_notas === 0) {
        break;
    }
    if(promedio_notas >= 7){
    alert(`Alumno/a aprobado/a`)
    } else {
    alert("Alumno/a desaprobado/a")
    }

    alert("Si desea finalizar el listado, coloque 0 en todas las areas de notas")
    alert("SIGUIENTE ALUMNO")
}
    alert("TODOS LOS ALUMNOS FUERON EVALUADOS")
