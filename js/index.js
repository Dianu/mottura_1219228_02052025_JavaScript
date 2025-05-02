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
