class Order{
    items
    shipping
    total
    peso

    constructor(items, shipping, total, peso){
        this.items = items
        this.shipping = shipping
        this.total = total
        this.peso = peso
    }

    getTotal(){
        return this.total
    }

    getPeso(){
        return this.peso
    }

    setShippingType(tipo){
        this.shipping = tipo
    }

    getShippingCost(){


        /*if(this.shipping == "drone"){
            return this.getPeso() * 7
        }

        if(this.shipping == "bicicleta"){
            return this.getPeso() * 5
        }*/
    }

    getShippingDate(){
        return new Date()
    }
}

class Shipping{
    getCost(orden){

    }

    getDate(){
        return new Date()
    }

}

class Ground extends Shipping{
    getCost(orden){
        if(this.getTotal() > 100)
            return 0
        return this.getPeso() * 1.5
    }
}

class Air extends Shipping{
    getCost(orden){
        return this.getPeso() * 3
    }
}