// 1. Cree tres variables con datos personales al azar y cuando cargue la página web,
// muestre un mensaje de bienvenida para el usuario.

// let nombre = "Laura";
// let edad = 25;
// let genero = "femenino";

// if (genero.toLowerCase() === "femenino") {
//     alert(`¡Bienvenida ${nombre}! Tenés ${edad} años.`);
// } else if (genero.toLowerCase() === "masculino") {
//     alert(`¡Bienvenido ${nombre}! Tenés ${edad} años.`);
// }

// 2. Modifique el ejercicio anterior para que el usuario sea quien ingrese sus datos.
let nombre = prompt("Ingrese su nombre:");
let edad = prompt("Ingrese su edad:");
let genero = prompt("Ingrese su género. 'F' para femenino, 'M' para masculino:");

if (genero.toUpperCase() === "F") {
    alert(`¡Bienvenida ${nombre}! Tenés ${edad} años.`);
} else if (genero.toUpperCase() === "M") {
    alert(`¡Bienvenido ${nombre}! Tenés ${edad} años.`);
}

// 3. Modifique el ejercicio anterior para mostrar un mensaje (luego del mensaje del ejercicio 1), que le diga al usuario cuántos días ha vivido desde que nació.
// Para esto, se pide al usuario que ingrese su fecha de nacimiento y se calcula la diferencia entre la fecha actual y la fecha de nacimiento ingresada por el usuario.
// Para calcular la diferencia de días, se usa el método getTime() de la clase Date.
let fechaNacimiento = prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA):");
let fechaNacimientoDate = new Date(fechaNacimiento.split("/").reverse().join("-"));

let fechaActual = new Date();

// El método getTime() devuelve el número de milisegundos desde el 1 de enero de 1970 hasta la fecha especificada (si la fecha es anterior, devuelve un número negativo)
let diferenciaTiempo = fechaActual.getTime() - fechaNacimientoDate.getTime();

// Math floor recibe como parámetro un número y lo redondea hacia abajo al entero más cercano.
// En este caso, se calcula la diferencia de tiempo en milisegundos y se divide por el número de milisegundos que hay en un día (1000 ms * 60 s * 60 min * 24 h).
// Luego se redondea hacia abajo para obtener el número entero de días.
// El resultado de la operación es un número entero que representa la cantidad de días completos que han pasado desde la fecha de nacimiento hasta la fecha actual.
let diferenciaDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

alert(`Has vivido aproximadamente ${diferenciaDias} días desde que naciste.`);
