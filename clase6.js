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
    console.log(persona.nombre.toUpperCase())
}

imprimirNombreEnMayusculas(seldon)
imprimirNombreEnMayusculas(dimoteo)
//Nuevo objeto creado desde el de base
imprimirNombreEnMayusculas({ nombre: 'Pepito'})