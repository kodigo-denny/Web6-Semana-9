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

    makeSound(){
        console.log("Sonido generico")
    }
}


class Ave extends Animal {
    tipo

    constructor(color, peso, tipo){
        super(color, peso)
        this.tipo = tipo
    }

    comer(){
        console.log("Funcion comer desde la clase AVE: ")
        super.comer()
    }

    volar(){
        console.log("Funcion volar desde la clase Ave")
    }
}

class Gato extends Animal{

    constructor(color, peso){
        super(color, peso)
    }

    makeSound(){
        console.log("Maullar")
    }
}

class Perro extends Animal{
    raza
    bestFriend

    constructor(color, peso, raza, bestFriend){
        super(color, peso)
        this.raza = raza
        this.bestFriend = bestFriend
    }

    mejorAmigo(){
        console.log(this.bestFriend.getNombre())
    }

    ladrar(){
        console.log("Ladrar desde la clase Perro")
    }

    makeSound(){
        console.log("Ladrar")
    }
}

class Human{
    nombre
    apellido

    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }

    getNombre(){
        return this.nombre + " " + this.apellido
    }
}