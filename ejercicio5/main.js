// console.log("Esto es js")

// Declaramos las variables
let posicion = 0
let posicion2 = 0
let jugada = 1

// Esta función se va a encargar de generar los tableros y mostrar el movimiento de las fichas
pintaTablero(posicion, posicion2)
function pintaTablero(pos, pos2) {
    //Creamos un array que contenga en número todas las posiciones posibles del tablero
    console.log("Pintando tablero")
    let tablero = [19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]
    // Creamos la tabla con un bucle, si la posición coincide con el número del array generará la ficha
    let tabla =``
    tablero.forEach((element) => {
         if(element==pos){
             tabla+=`<div id="c1" class="casilla"><div class="ficha jugador1"></div></div>`
         }
         else{
             tabla+=`<div id="c2" class="casilla"></div>`
        }
    });
    // Una vez hemos pasado por todas las posiciones lo inyectamos en HTML
    document.querySelector("#tablero1").innerHTML = tabla
// Ahora hacemos lo mismo con el segundo jugador
    let tabla2 =``
    tablero.forEach((element) => {
         if(element==pos2){
             tabla2+=`<div id="c1" class="casilla"><div class="ficha jugador2"></div></div>`
         }
         else{
             tabla2+=`<div id="c2" class="casilla"></div>`
        }
    });
    document.querySelector("#tablero2").innerHTML = tabla2
    // Aqui indicamos que jugador ha ganado al llegar a la última posición del tablero
    if(posicion==19){
        alert('Ha ganado el jugador 1!')
    }
    if(posicion2==19){
        alert('Ha ganado el jugador 2!')
    }
}
// Declaramos a los botones que llamarán a las funciones que generarán los números aleatorios y cambiará la posición en el tablero
const botonRandom1 = document.querySelector("#random1");
botonRandom1.addEventListener("click", crear);
const botonRandom2 = document.querySelector("#random2");
botonRandom2.addEventListener("click", crear);
// Esta función sumará el número aleatorio al número de posición actual del jugador que le toque el turno
function crear(){
    // El if sirve para que el jugador 1 no pueda moverse más de una vez hasta que el jugador 2 lo haga
    if(jugada==1){
        // Cambiando la variable hacemos que no podamos volver a tirar hasta que vuelva a ser 1
        jugada=0
        // Llamamos a la función que nos devuelve un número aleatorio y lo sumamos a la posición del jugador 1
        posicion=posicion+random()
        
        // El if hace que si el jugador 1 se pasa de la última casilla lo devuelva a la última y gane
        if(posicion>19){
            posicion=19
        }
        // Este if hace que si el jugador 1 pilla al 2 en la misma casilla hace que el jugador 2 vuelva a la posición 0
        if(posicion==posicion2){
            posicion2=0;
        }
        
    }
    else{
        // Aqui hace lo mismo que lo anterior pero a favor del jugador 2
        jugada=1
        posicion2=posicion2+random()
        if(posicion2>19){
            posicion2=19
        }
        if(posicion2==posicion){
            posicion=0
        }
    }
    // Llamamos a la función que muestra el tablero con los cambios de posición
    pintaTablero(posicion,posicion2)
}
function random(){
    // Creamos una variable que contendrá el valor del dado
    let dado
    // Hacemos que el dado tenga un valor entre 1 y 6
    dado= Math.floor(Math.random() *6)+1
    console.log(dado)
    // Devolvemos el valor del dado a la función que cambia la posición de los jugadores
    return(dado)
}

