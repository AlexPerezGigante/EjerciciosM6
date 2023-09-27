// Capturamos el boton y llamamos a la función que actualiza la tarjeta
const botonCrear = document.querySelector("#crearFicha");
botonCrear.addEventListener("click", crearFicha);

function crearFicha() {
    // Evitamos que actualice la página
    event.preventDefault();
    // Capturamos los datos y los metemos en variables
    const inputNombre = document.querySelector("#inputNombre");
    const nombre = inputNombre.value;
    const inputApellido1 = document.querySelector("#inputApellido1");
    const apellido1 = inputApellido1.value;
    const inputApellido2 = document.querySelector("#inputApellido2");
    const apellido2 = inputApellido2.value;
    const inputDni = document.querySelector("#inputDni");
    const dni = inputDni.value;
    const inputUrl = document.querySelector("#inputUrl");
    const url = inputUrl.value;
    // Inyectamos los datos en el HTML
    document.querySelector("#tarjetaNombre").innerHTML = nombre + " ";
    document.querySelector("#tarjetaApellidos").innerHTML =
        apellido1 + " " + apellido2;
    document.querySelector("#tarjetaDni").innerHTML = dni;
    // Cambiamos el atributo src para cambiar de imagen
    const img = document.querySelector("#tarjetaImagen");
    img.setAttribute("src", url);
}
