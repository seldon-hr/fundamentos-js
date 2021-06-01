var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const ALTURA_DE_ALTO = 1.8
const ALTRUA_BAJA = 1.6


// const esAlta = persona => persona.altura > ALTURA_DE_ALTO
//better 
const esAlta = ({ altura }) => altura > ALTURA_DE_ALTO

const esBaja = ({ altura }) => altura < ALTRUA_BAJA

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)


//Otra forma de escribir
// var personasAltas = personas.filter(function( persona){
//     return persona.altura > ALTURA_DE_ALTO
// })

console.log(personasAltas)
console.log(personasBajas)