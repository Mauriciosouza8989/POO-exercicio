class Animal {
    constructor(nome, peso, fala){
        this.nome = nome;
        this.peso = peso;
        this.fala = fala;
    }
}

class Cachorro extends Animal {
    constructor(nome, raca, peso, fala){
        super(nome, peso, fala);
        this.raca = raca;
    }
    falar(){
        console.log(`${this.fala}! Me chamo ${this.nome}, peso ${this.peso}kg e sou da raça ${this.raca}.`)
    }
}

class Gato extends Animal{
    constructor(nome, raca, peso, fala){
        super(nome, peso, fala);
        this.raca = raca;
    }
    falar(){
        console.log(`${this.fala}! Me chamo ${this.nome}, peso ${this.peso}kg e sou da raça ${this.raca}`)
    }
}

const cachorro1 = new Cachorro('Scooby', 'Pastor alemão', 25, 'AuAu');
const cachorro2 = new Cachorro('Rex', 'Labrador', 30, 'AuAu');
const gato = new Gato('Freddy', 'Siamês', 7, "Miau")

cachorro1.falar();
cachorro2.falar();
gato.falar();