class Persona{
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    
    saludar(fn){
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido)
        }
    }
    
    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre,apellido, altura)
    }

    saludar(fn){
        // var nombre = this.nombre
        // var apellido = this.apellido
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy developer`)
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev) {
        console.log(`Ah mira, no sabía que eras developer`)
    }
}

var seldon = new Persona('Seldon', 'Romero', 1.6)
var arturo = new Desarrollador('Arturo', 'López', 1.9)
var juan = new Persona ('Juan', 'Barrio', 1.81)

seldon.saludar()
arturo.saludar(responderSaludo)
juan.saludar(responderSaludo)