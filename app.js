// Obtener nota de evaluacion oral mediante preguntas.

const preguntas = ["¿Qué río atraviesa la ciudad de Benarés, en la India?", "¿En qué país nació Adolf Hitler?", "¿Cuándo llegó el hombre a la Luna?", "¿Cuándo asesinaron al presidente John F. Kennedy?", "¿Cuándo se inventó la imprenta?", "¿Dónde se lanzaron las primeras bombas atómicas?", "¿Cuál fue la primera civilización humana?", "¿De qué nacionalidad era Juana de Arco?", "¿Quién dibujo al famoso Hombre de Vitruvio?", "¿Qué famoso filósofo fue maestro de Alejandro Magno durante cinco años?", "¿Quién fue el último zar de Rusia?", "¿Quienes eran los templarios?", "¿Qué inició la Segunda Guerra Mundial?", "¿Dónde se han encontrado principalmente pinturas del período Paleolítico?", "¿Era Averroes un antiguo filósofo griego?", "¿Cómo comenzó la Primera Guerra Mundial?", "¿En qué año descubrió Cristóbal Colón, América?", "¿Quién escribió La Odisea?", "¿Quién es el autor de el Quijote?", "¿En qué año cayó el muro de Berlín?", "¿Cuáles son las siete maravillas del mundo antiguo?", ]





// Promedios de alumnos


    let formNombres = document.querySelector(".FormNombre")
    let nombre = document.querySelector(".nmbre")
    let apellido = document.querySelector(".apllido")
    let curso = document.querySelector(".curso")

    formNombres.addEventListener("submit", loginNombres)

    function loginNombres(e) {
        e.preventDefault()
        console.log(`Alumno: ${nombre.value} ${apellido.value} - Curso: ${curso.value} año`)
    }

const MasPreguntas = document.querySelector(".MoreQuestions")
MasPreguntas.addEventListener("click", (e) =>{
    e.preventDefault()
    let pregunta = preguntas[Math.floor(Math.random() * preguntas.length)]

let PreguntaRandom = document.createElement("h4")
PreguntaRandom.innerHTML = `<h4>${pregunta}</h4>`
document.body.appendChild(PreguntaRandom)
})

let notas = document.querySelector(".FormNotas")

let nota1 = document.querySelector(".evaluacion")

let nota2 = document.querySelector(".tp")

let nota3 = document.querySelector(".concepto")



notas.addEventListener("submit", pedirNotas)

function pedirNotas (e) {
    e.preventDefault()

    console.log(`Evaluacion: ${nota1.value} Trabajo Practico: ${nota2.value} Concepto: ${nota3.value}`)

    let resultado_notas = (parseInt(nota1.value) + parseInt(nota2.value) + parseInt(nota3.value)) 

    promedio_notas = resultado_notas / 3

    console.log(`Promedio: ${promedio_notas}`)

    let AlumnoAprobado = document.createElement("h4")

    let AlumnoDesaprobado = document.createElement("h4")

    if(promedio_notas >= 7){
        AlumnoAprobado.innerHTML = `<h4>¡El alumno ${nombre.value} ${apellido.value}, de ${curso.value} ha aprobado con un ${promedio_notas} final! </h4>`;
        document.body.appendChild(AlumnoAprobado);
        } else {
            AlumnoDesaprobado.innerHTML = `<h4>¡El alumno ${nombre.value} ${apellido.value}, de ${curso.value} ha desaprobado con un ${promedio_notas} final!</h4>`;
            document.body.appendChild(AlumnoDesaprobado);
        }

        const BaseDeDatos = {
            Nombre: `${nombre.value} ${apellido.value}`, 
            Promedio: `${promedio_notas}`
         }
         
         const BaseStorage = JSON.stringify(BaseDeDatos)
         
         localStorage.setItem("Alumno y su promedio", BaseStorage)
}






let alumnos = 1;



for(let alumnos = 1; alumnos <= 20 ; alumnos++) {
    for (let ip = 0; ip <= 11; ip++) {
        (preguntas[ip]);
    }
    
    preguntas.forEach((cada_pregunta, indice_pregunta) =>{
        console.log(`${indice_pregunta}:${cada_pregunta}`);
    })

    pedirNotas();
    

}

