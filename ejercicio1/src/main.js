//console.log('Hola desde main.js');

//Capturar el boton
const botonSumar=document.querySelector('#botonSumar')
//Capturamos el click del boton y llamamos a una función
botonSumar.addEventListener('click', sumarInputs);

const botonRestar=document.querySelector('#botonRestar')
botonRestar.addEventListener('click', restarInputs);

const botonMultiplicar=document.querySelector('#botonMultiplicar')
botonMultiplicar.addEventListener('click', multiplicarInputs);

const botonDividir=document.querySelector('#botonDividir')
botonDividir.addEventListener('click', dividirInputs);



// funcion sumarInputs: suma valores de los inputs y los muestra por consola
function sumarInputs(){
    //Evita que refresque la página 
    event.preventDefault()
    // Capturo el elemento input
    const inputSuma1=document.querySelector('#input1')
    // Capturo su valor
    const valor1=inputSuma1.value

    const inputSuma2=document.querySelector('#input2')
    const valor2=inputSuma2.value

    //Sacamos valor 1
    console.log('valor input1 : ', valor1)
    //Convertimos valor1 a Int
    const valorInt1= parseFloat(valor1)

    console.log('valor input2 : ', valor2)
    const valorInt2= parseFloat(valor2)
    //Sumamos los valores
    const suma=valorInt1+valorInt2
    //Seleccionamos el input del resultado
    const resultado=document.querySelector('#resultado')
    //Añadimos el valor al input que se mostrará por html
    resultado.value=suma
    
}

function restarInputs(){
    //Evita que refresque la página 
    event.preventDefault()
    // Capturo el elemento input
    const inputResta1=document.querySelector('#input1')
    // Capturo su valor
    const valor1=inputResta1.value

    const inputResta2=document.querySelector('#input2')
    const valor2=inputResta2.value

    //Sacamos valor 1
    console.log('valor input1 : ', valor1)
    //Convertimos valor1 a Int
    const valorInt1 = parseFloat(valor1)

    console.log('valor input2 : ', valor2)
    const valorInt2 = parseFloat(valor2)
    //Restamos los valores
    const resta=valorInt1-valorInt2

    const resultado=document.querySelector('#resultado')
    resultado.value=resta
}

function multiplicarInputs(){
    //Evita que refresque la página 
    event.preventDefault()
    // Capturo el elemento input
    const inputMult1=document.querySelector('#input1')
    // Capturo su valor
    const valor1=inputMult1.value

    const inputMult2=document.querySelector('#input2')
    const valor2=inputMult2.value

    //Sacamos valor 1
    console.log('valor input1 : ', valor1)
    //Convertimos valor1 a Int
    const valorInt1 = parseFloat(valor1)

    console.log('valor input2 : ', valor2)
    const valorInt2 = parseFloat(valor2)
    //Multiplicamos los valores
    const mult=valorInt1*valorInt2
    
    const resultado=document.querySelector('#resultado')
    resultado.value=mult

}

function dividirInputs(){
    //Evita que refresque la página 
    event.preventDefault()
    // Capturo el elemento input
    const inputDiv1=document.querySelector('#input1')
    // Capturo su valor
    const valor1=inputDiv1.value

    const inputDiv2=document.querySelector('#input2')
    const valor2=inputDiv2.value

    //Sacamos valor 1
    console.log('valor input1 : ', valor1)
    //Convertimos valor1 a Int
    const valorInt1 = parseFloat(valor1)

    console.log('valor input2 : ', valor2)
    const valorInt2 = parseFloat(valor2)
    //Dividimos los valores
    const dividir=valorInt1/valorInt2
    
    const resultado=document.querySelector('#resultado')
    resultado.value=dividir
}
