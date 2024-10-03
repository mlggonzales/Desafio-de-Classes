// Criando uma classe com as propriedades nome, idade e tipo.
class desafioClasses{
    constructor(nome, idade, tipo){
        this.nome = this.nome
        this.idade = idade
        this.tipo = tipo
    }
   
    // Criando o método atacar
    atacar(ataque){
        console.log(`O ${this.tipo} atacou usando ${ataque}.`)
    }
}

// Objetos que definem as propriedades específicas das classe, para trocar o tipo, elimine o "//"
let quemAtacou = new desafioClasses(" ", " ", "guerreiro")
// let quemAtacou = new desafioClasses(" ", " ", "mago")
// let quemAtacou = new desafioClasses(" ", " ", "monge")
// let quemAtacou = new desafioClasses(" ", " ", "ninja")

// Muda o ataque conforme o tipo
if(quemAtacou.tipo=="guerreiro"){
    quemAtacou.atacar("espada")}
else if (quemAtacou.tipo=="mago"){
    quemAtacou.atacar("magia")}
else if (quemAtacou.tipo=="monge"){
    quemAtacou.atacar("artes marciais")}
else if (quemAtacou.tipo=="ninja"){
    quemAtacou.atacar("shuriken")
}