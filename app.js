// Registro de 5 personas con sus nombres y edades.

function pedir_nombres() {
    let nombre = prompt ("Ingresar Nombre");
    let apellido = prompt ("Ingresar Apellido");
    console.log(`Nombre: ${nombre} ${apellido}`);
}

function pedir_edad() {
    let edad = Number(prompt ("Ingresar edad"));
    console.log(`Edad: ${edad} años`);
}

let i = 1;
let edad = 1 <100;
let suma_edades = edad + edad + edad + edad + edad
let promedio_edad = suma_edades / 5;


for(let i = 1; i <= 5 ; i++) {
    pedir_nombres();
    pedir_edad();
}

alert (`El promedio de edad es de ${promedio_edad} años`)