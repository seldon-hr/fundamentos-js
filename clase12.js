var seldon = {
    nombre: 'Seldon',
    apellido: 'Romero',
    edad: 22,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

var dimoteo = { }

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad ( persona ){
    if( esMayorDeEdad (persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}


// function permitirAcceso(persona){
//     if(!esMayorDeEdad(persona)){
//         console.log('ACCESO DENEGADO')
//     }
// }

dimoteo.edad = 12
const permitirAcceso = ({ edad }) => !esMayorDeEdad({ edad }) ? console.log('Acceso denegado') : console.log('Adelante')


