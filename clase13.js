var seldon = {
    nombre: 'Seldon',
    apellido: 'Romero',
    edad: 22,
    peso:75
}

console.log(`Al incio del año ${seldon.nombre} pesa ${seldon.peso}kg`)


// function aumentarDePeso (pesona){
//     return persona.peso += 200
// }
const INCREMENTO_PESO = .2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona =>  persona.peso += INCREMENTO_PESO

const adelgazar = persona =>  persona.peso -= INCREMENTO_PESO



for (var i = 1; i <= DIAS_DEL_ANO; i++){
    var random = Math.random()
    
    if(random < 0.25){
        aumentarDePeso(seldon)
    }else if(random < 0.5){
        adelgazar(seldon)
    }
    
}


console.log(`Al final del año ${seldon.nombre} pesa ${seldon.peso.toFixed(1)}kg`)