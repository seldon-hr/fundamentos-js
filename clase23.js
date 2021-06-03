function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

const MAYORIA_ALTURA = 1.8

Persona.prototype.soyAlto = function() {
    return this.altura > MAYORIA_ALTURA
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var seldon = new Persona('Seldon', 'Romero', 1.6)
var arturo = new Persona('Arturo', 'López', 1.9)
var juan = new Persona ('Juan', 'Barrio', 1.81)

