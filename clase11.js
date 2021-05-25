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

function imprimirProfesione(persona){
    console.log(`${persona.nombre} es: `)

    if(persona.ingeniero === true){
        console.log('Ingeniero')
    }else{
        console.log('No es ingeniero')
    }
    if(persona.cocinero === true){
        console.log('Cocinero')
    }
    if(persona.cantante === true){
        console.log('Cantante')
    }
    if(persona.dj === true){
        console.log('Dj')
    }
    if(persona.guitarrista === true){
        console.log('Guitarrista')
    }
    if(persona.drone === true){
        console.log('Vuela dron')
    }  
    
}

imprimirProfesione(seldon)

function mayorEdad(persona){
    if(persona.edad > 18){
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

mayorEdad(seldon)