class Figura{
    lado1

    constructor(lado1){
        this.lado1 = lado1
    }

    calcularArea(){
        return this.lado1
    }
}

class Rectangulo extends Figura{
    lado2

    constructor(lado1, lado2){
        super(lado1)
        this.lado2 = lado2
    }

    calcularArea(){
        return this.lado1 * this.lado2
    }
}

class Triangulo extends Rectangulo{

    constructor(lado1, lado2){
        super(lado1, lado2)
    }

    calcularArea(){
        return super.calcularArea() / 2
    }
}

class Trapecio extends Triangulo{

    constructor(baseMayor, baseMenor, h){
        super(baseMayor+baseMenor, h)
    }
}

class Romboide extends Rectangulo{

    constructor(lado1, lado2){
        super(lado1, lado2)
    }
}

class Cuadrado extends Figura{

    constructor(lado1){
        super(lado1)
    }

    calcularArea(){
        return Math.pow(this.lado1, 2)
    }
}

class Circulo extends Cuadrado{

    constructor(radio){
        super(radio)
    }

    calcularArea(){
        return Math.PI * super.calcularArea()
    }
}