var x = 4, y = '4'

var seldon = {
    nombre: 'Seldon'
}


//Si hacemos la modificación de un atributo de aquí con 
var otraPersona = seldon



//Aunque aquí estemos desglosando un objeto dentro de otro es otro
//lugar en memoria ram
var dimoteo = {
    ...seldon
}