var seldon = {
    nombre: 'Seldon',
    apellido: 'Romero',
    edad: 22
}

var dimoteo = {
    nombre: 'Dimoteo',
    apellido: 'Lucas',
    edad: 39
}

function imprimirNombreEnMayusculas(persona){
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(persona.nombre.toUpperCase())
}

// imprimirNombreEnMayusculas(seldon)
// imprimirNombreEnMayusculas(dimoteo)

function imprimirNombreYEdad(persona){
    var { nombre } = persona
    var { edad } = persona
    console.log(`Hola me llamo ${persona.nombre} y tengo ${persona.edad} años`)
}

// imprimirNombreYEdad(seldon)
// imprimirNombreYEdad(dimoteo)


function cumpleanos(persona){
    edad += 1
}