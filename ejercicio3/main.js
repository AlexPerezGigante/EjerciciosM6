// Detectamos el botón
const botonCrear = document.querySelector("#crearFicha");
botonCrear.addEventListener("click", crearFicha);

// Creamos el Json
const bd = [
    {
        nombre: "Elena",
        apellidos: "Vegante Pormar",
        dni: "212121121A",
        urlImagen:
            "https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/rostro-mujer-adulta.jpg?w=500&ssl=1",
    },
    {
        nombre: "Perico",
        apellidos: "Mepiedras Rocosas",
        dni: "123456789A",
        urlImagen:
            "https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/hombre-maduro-guapo.jpg?w=500&ssl=1",
    },
];
// Llamamos para que pinte la tabla antes de crear el seguiente usuario
pintaTabla();
// Esta funcion coge los datos de los inputs y los mete en el Json
function crearFicha() {
    // Evitamos que recarge la página
    event.preventDefault();
//Capturamos todos los inputs 
    const inputNombre = document.querySelector("#inputNombre");
    const inputApellido1 = document.querySelector("#inputApellido1");
    const inputApellido2 = document.querySelector("#inputApellido2");
    const inputDni = document.querySelector("#inputDni");
    const inputUrl = document.querySelector("#inputUrl");
// Creamos un objeto para el Json y le añadimos los datos
    const usuario = {
        nombre: inputNombre.value,
        apellidos: inputApellido1.value + " " + inputApellido2.value,
        dni: inputDni.value,
        urlImagen: inputUrl.value,
    };
// Agregamos el objeto al Json
    bd.push(usuario);
//Llamamos a la función para que pinte la tabla y modifique la tarjeta 
    pintaTabla();
}

function pintaTabla() {
    // Creamos la varible que contendrá la tabla
    let tabla = `<table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Imagen</th>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>DNI</th>
      </tr>
    </thead >
    <tbody >`;
    // con un bucle for each añadimos los datos del Json a la tabla
    bd.forEach((element, index) => {
        tabla += `
        <tr>
        <td>${index + 1}</td>
        <td><img width="30" src="${element.urlImagen}" alt="Imagen perfil"></td>
        <td>${element.nombre}</td>
        <td>${element.apellidos}</td>
        <td>${element.dni}</td>
      </tr>
        `;
    });
    tabla += `
        </tbody>
    </table>`;
    // Inyectamos la tabla en el HTML
    document.querySelector("#crearTabla").innerHTML = tabla;
    // Actualizamos la ficha:
    // Creamos una variable que sea el Json pero en último objeto agragado
    let ultimoBd = bd[bd.length-1]
    // Modificamos los datos de la tarjeta
    document.querySelector("#tarjetaNombre").innerHTML = ultimoBd.nombre;
    document.querySelector("#tarjetaApellidos").innerHTML =
    ultimoBd.apellidos
    document.querySelector("#tarjetaDni").innerHTML = ultimoBd.dni
    const img = document.querySelector("#tarjetaImagen");
    img.setAttribute("src", ultimoBd.urlImagen);

}
