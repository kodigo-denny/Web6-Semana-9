class Alumno{
    nombre
    nota

    constructor(nombre, nota){
        this.nombre = nombre
        this.nota = nota
    }

    perteneceAlObjeto(){
        console.log("La funcion pertenece al objeto")
    }

    static perteneceALaClase(){
        console.log("La funcion pertenece a la clase")
    }

    set setNota(nota){
        if(nota >= 0 && nota <= 10)
            this.nota = nota
    }

    get getNota(){
        return this.nota
    }
}