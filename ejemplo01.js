class Cat{
    name
    gender
    age
    weight
    color

    constructor(name, gender, age, weight, color){
        this.name = name
        this.gender = gender
        this.age = age
        this.weight = weight
        this.color = color
    }

    breath(){
        console.log("breath")
    }

    eat(food){
        console.log("eat: " + food)
    }

    run(destino){
        console.log("run: " + destino)
    }

    sleep(hours){
        console.log("sleep: " + hours + " name: " + this.name)
    }
}