// Cree tres variables con datos personales al azar y cuando cargue la página web,
// muestre un mensaje de bienvenida para el usuario.

let nombre = "Laura";
let edad = 25;
let genero = "femenino";

if (genero.toLowerCase() === "femenino") {
    alert(`¡Bienvenida ${nombre}! Tenés ${edad} años.`);
} else if (genero.toLowerCase() === "masculino") {
    alert(`¡Bienvenido ${nombre}! Tenés ${edad} años.`);
}
