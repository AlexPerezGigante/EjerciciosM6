let longitud=0
let respuesta=''
let vidas=6
const botonPrompt = document.querySelector("#botonPalabra");
botonPrompt.addEventListener("click", crearTablero);

function crearTablero(){
    const input=document.querySelector('#palabra')
    
    const palabra=input.value
    const palabraTrim=palabra.trim()
    const longitudPalabra=palabraTrim.length
    const palabraMayus=palabraTrim.toUpperCase()
    respuesta=palabraMayus
    let letras=`<div class="container d-flex">`
    for(i=0;i<longitudPalabra;i++){
        letras+=`<div class="container border m-2 text-center w-25"><h2>_</h2></div>`
    }
    letras+=`</div>`

    document.querySelector('#general').innerHTML=letras
    let tarjetaPalabra = document.querySelector('#tarjetaPalabra');
    tarjetaPalabra.setAttribute('class','card d-none')
    let botonLetra = document.querySelector('#botonLetra');
    botonLetra.setAttribute('class','btn btn-success mt-4 d-block')
    let tarjeta = document.querySelector('#tarjeta');
    tarjeta.setAttribute('class','card d-block')
    longitud=longitudPalabra
}
let palabra = []
palabra.length=longitud




const botonletra = document.querySelector("#botonLetra");
botonLetra.addEventListener("click", mirarLetra);

function mirarLetra(){
    const input=document.querySelector('#letra')
    const letra=input.value
    input.value=''
    const letraMayus=letra.toUpperCase()
    let error=1
    let victoria=1
    for(i=0;i<longitud;i++){  
        if(letraMayus==respuesta.charAt(i)){
            palabra[i]=letraMayus
            error=0
        }
         else{
             if(palabra[i]==null){
                palabra[i]='_'
             }
        }
    }
    if(error==1){
        vidas=vidas-1
    }
    if(vidas==5){
        let cabeza = document.querySelector('#cabeza');
        cabeza.setAttribute('class','visible')
    }
    if(vidas==4){
        let brazoIzq = document.querySelector('#brazoIzq');
        brazoIzq.setAttribute('class','visible')
    }
    if(vidas==3){
        let cuerpo = document.querySelector('#cuerpo');
        cuerpo.setAttribute('class','visible')
    }
    if(vidas==2){
        let brazoDra = document.querySelector('#brazoDra');
        brazoDra.setAttribute('class','visible')
    }
    if(vidas==1){
        let piernaIzq = document.querySelector('#piernaIzq');
        piernaIzq.setAttribute('class','visible')
    }
    if(vidas==0){
        let piernaDra = document.querySelector('#piernaDra');
        piernaDra.setAttribute('class','visible')
        let rejugar = document.querySelector('#jugar');
        rejugar.setAttribute('class','card visible mt-5')
        let botonLetra = document.querySelector('#botonLetra');
        botonLetra.setAttribute('class','d-none')
    }
    for(i=0;i<longitud;i++){  
        if(palabra[i]=='_'){
            victoria=0
        }
    }
    if(victoria==1){
        let rejugar = document.querySelector('#jugar');
        rejugar.setAttribute('class','card d-none')
        let rejugarW = document.querySelector('#win');
        rejugarW.setAttribute('class','card d-block mt-5')
        let botonLetra = document.querySelector('#botonLetra');
        botonLetra.setAttribute('class','d-none')
    }

    console.log(palabra)
    crearTablero2(palabra)
}
function crearTablero2(array){
    const input=document.querySelector('#palabra')
    console.log(array)
    let letras=`<div class="container d-flex">`
    for(i=0;i<longitud;i++){
        letras+=`<div class="container border m-2 text-center w-25"><h2>`+palabra[i]+`</h2></div>`
    }
    letras+=`</div>`
    console.log(vidas)
    let innerVidas='Vidas: '+vidas
    document.querySelector('#general').innerHTML=letras
    document.querySelector('#vidas').innerHTML=innerVidas
 }

const botonAceptar = document.querySelector("#botonAceptar");
botonAceptar.addEventListener("click", reiniciar);
const botonAceptarW = document.querySelector("#botonAceptarW");
botonAceptarW.addEventListener("click", reiniciar);

function reiniciar(){
    console.log("Reiniciando")
    longitud=0
    respuesta=''
    vidas=6
    let tarjetaPalabra = document.querySelector('#tarjetaPalabra');
    tarjetaPalabra.setAttribute('class','card d-block')
    document.querySelector('#general').innerHTML=''
    document.querySelector('#vidas').innerHTML=''
    const input=document.querySelector('#palabra')
    input.value=''
    let tarjeta = document.querySelector('#tarjeta');
    tarjeta.setAttribute('class','card d-none')
        let cabeza = document.querySelector('#cabeza');
        cabeza.setAttribute('class','invisible')
        let brazoIzq = document.querySelector('#brazoIzq');
        brazoIzq.setAttribute('class','invisible')
        let cuerpo = document.querySelector('#cuerpo');
        cuerpo.setAttribute('class','invisible')
        let brazoDra = document.querySelector('#brazoDra');
        brazoDra.setAttribute('class','invisible')
        let piernaIzq = document.querySelector('#piernaIzq');
        piernaIzq.setAttribute('class','invisible')
        let piernaDra = document.querySelector('#piernaDra');
        piernaDra.setAttribute('class','invisible')
        let rejugar = document.querySelector('#jugar');
        rejugar.setAttribute('class','card d-none')
        let rejugarW = document.querySelector('#win');
        rejugarW.setAttribute('class','card invisible mt-5')
        palabra = []


}


