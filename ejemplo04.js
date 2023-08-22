class Animal{
    color
    peso

    constructor(color, peso){
        this.color = color
        this.peso = peso
    }

    comer(){
        console.log("Funcion Comer desde Clase Animal")
    }

    moverse(){
        console.log("Funcion moverse desde Clase Animal")
    }
}


class Ave extends Animal {
    tipo

    constructor(color, peso, tipo){
        super(color, peso)
        this.tipo = tipo
    }

    volar(){
        console.log("Funcion volar desde la clase Ave")
    }
}

class Perro extends Animal{
    raza

    constructor(color, peso, raza){
        super(color, peso)
        this.raza = raza
    }

    ladrar(){
        console.log("Ladrar desde la clase Perro")
    }
}