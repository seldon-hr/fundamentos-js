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


const MAYORIA_DE_EDAD = 18


//Función anónima
// const esMayorDeEdad = function(persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }

//Arrow function
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD



function mayorEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(){
    if(!esMayorDeEdad){
        console.log(`ACCESO NEGADO`)
    }
}

const permitirAcceso = ({ edad }) => !esMayorDeEdad({ edad }) ? console.log('Acceso denegado') : console.log('Adelante')


mayorEdad(seldon)