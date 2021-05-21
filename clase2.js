var nombre  = 'Seldon', apellido = 'Romero'


var nombreMayusculas = nombre.toUpperCase()
var apellidoMinusculas = apellido.toLowerCase()

//CharAt nos permite extraer un carácter en la posición depnediendo el parámentro que se indice.
var primerLetraNombre = nombre.charAt()

//Longitud de un string
var cantidadLetrasNOmbres = nombre.length

//Concatenación (Interpolación de variables) Dentro de las llaves se puede escribir código JS
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

//Función substr indicas que extraes string de otro string, e indicamos desde que valor vamos a empezar hasta cual llegamos.
var str = nombre.substr(1, 2)

//Extraer el último cátacter de un string
var lastCaracter = nombre.substr(-1)

var n = nombre.slice(-1)

