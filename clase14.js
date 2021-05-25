var seldon = {
    nombre: 'Seldon',
    apellido: 'Romero',
    edad: 22,
    peso:75
}

console.log(`Al incio del año ${seldon.nombre} pesa ${seldon.peso}kg`)

const INCREMENTO_PESO = .3
const DIAS_DEL_ANO = 365
// function aumentarDePeso (pesona){
//     return persona.peso += 200
// }
const aumentarDePeso = persona =>  persona.peso += INCREMENTO_PESO

const adelgazar = persona =>  persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
const META = seldon. peso - 3
var dias = 0


while(seldon.peso > META){
    // debugger
    if(comeMucho()){
        aumentarDePeso(seldon)
    }
    if(realizaDeporte()){
        adelgazar(seldon)
    }
    dias += 1
}


console.log(`Pasaron ${ dias } días hasta que ${ seldon.nombre } adelgazó 3kg`)

