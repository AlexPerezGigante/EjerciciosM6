// console.log("Esto es js")
const botonRandom = document.querySelector("#botonAleatorio");
botonRandom.addEventListener("click", random);



function random(){
    event.preventDefault()
    const inputRandom1=document.querySelector('#num1')
    // Capturo su valor
    const valor1=inputRandom1.value

    const inputRandom2=document.querySelector('#num2')
    const valor2=inputRandom2.value
    const valorInt1= parseInt(valor1)
    const valorInt2= parseInt(valor2)

    let random = Math.floor(Math.random() * (valorInt2 - (valorInt1-1))) + valorInt1;


    document.querySelector("#numeroAleatorio").innerHTML = random
}

const botonMayus = document.querySelector("#botonMayus");
botonMayus.addEventListener("click", mayus);
const botonMinus = document.querySelector("#botonMinus");
botonMinus.addEventListener("click", minus);

function mayus(){
    texto= document.querySelector('#texto')
    const valorTexto=texto.value
    const textoMayus = valorTexto.toUpperCase()
    texto.value=textoMayus

    
    const num=valorTexto.split(" ").length
    document.querySelector('#numeroPalabras').innerHTML = num
}
function minus(){
    texto= document.querySelector('#texto')
    const valorTexto=texto.value
    const textoMinus = valorTexto.toLowerCase()
    texto.value=textoMinus
    const num=valorTexto.split(" ").length
    document.querySelector('#numeroPalabras').innerHTML = num
}

const botonBuscador = document.querySelector("#botonBuscador");
botonBuscador.addEventListener("click", buscador);
function buscador(){
    texto=document.querySelector('#texto')
    valorTexto=texto.value
    input= document.querySelector('#textoBuscador')
    valorInput=input.value

    const iterator=valorTexto.matchAll(valorInput)
    let cont=0
    for (let ocurrence of iterator){
        cont++
    }
    nuevoTexto=valorTexto.replaceAll(valorInput, "<mark>"+valorInput+"</mark>")
    console.log(nuevoTexto)
    document.querySelector('#textoFiltrado').innerHTML = nuevoTexto
    document.querySelector('#numCoincidencia').innerHTML = cont
    palabrasTexto=valorTexto.split(" ")
    let diezPalabras=``
    for(i=0;i<10;i++){
        diezPalabras +=palabrasTexto[i]+' '
    }
    diezPalabras+='...'
    document.querySelector('#resumen').innerHTML = diezPalabras
}
const botonNombre = document.querySelector("#botonNombre");
botonNombre.addEventListener("click", convertirNombre);
const botonFecha = document.querySelector("#botonFecha");
botonFecha.addEventListener("click", convertirFecha);

function convertirNombre(){
    const inputNombre=document.querySelector('#nombre')
    const nombre=inputNombre.value
    let nuevoNombre=nombre.replaceAll(" ", "-")
    nuevoNombre=nuevoNombre.toUpperCase()

    document.querySelector('#nombreFinal').innerHTML=nuevoNombre
}
function convertirFecha(){
    const inputFecha=document.querySelector('#fecha')
    const fecha=inputFecha.value
    let nuevaFecha=fecha.replaceAll("/", "-")

    document.querySelector('#fechaFinal').innerHTML=nuevaFecha
}

const botonGenerar = document.querySelector("#botonGenerar");
botonGenerar.addEventListener("click", generarContra);

function generarContra(){
    let contra=``
    let random=0
    for(i=0;i<10;i++){
        random = Math.floor(Math.random() * (122 - 64)) + 65;
        while(random>90&&random<97){
            random = Math.floor(Math.random() * (122 - 64)) + 65;
        }
        contra+=String.fromCodePoint(random)
    }
    document.querySelector('#pass').value=contra

}
const botonEmote = document.querySelector("#botonEmote");
botonEmote.addEventListener("click", generarEmote);

function generarEmote(){
    const random = Math.floor(Math.random() * (128512 - 127987)) + 127988
    const emote=String.fromCodePoint(random)
    document.querySelector('#emote').innerHTML =emote
    
    
}