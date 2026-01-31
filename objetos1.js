class carro {//classe pai
    constructor(nome,portas) {
        this.nome=nome
        this.portas=portas
        this.cor=undefined
        this.ligado=false
        this.vel=0
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setcor=function(cor){
        this.cor=cor
    }
}
// militar herda todos os atribultos de carro
class militar extends carro{ //classe filho
    constructor(nome, portas, blindagem, muni){
        super(nome, portas) //passa os atribultos para o constructor da classe pai
        this.blindagem=blindagem
        this.muni=muni
        this.setcor("verde")
    }
    atirar=function(){
        if (this.muni > 0) {
            this.muni--
        }
    }
}

class utilitario extends carro{
   constructor(nome, portas, lugares){
        super(nome, portas)
        this.lugares=lugares
   }
}

const c1=new carro("normal", 4)
const c2=new militar("lutador", 1, 100, 50)

console.log(`nome: ${c1.nome}`)
console.log(`portas: ${c1.portas}`)
console.log(`ligado: ${(c1.ligado ? "sim" : "não")}`)
console.log(`cor: ${c1.cor}`)
console.log(`veocidade maxima: ${c1.vel}\n`)
console.log(`nome: ${c2.nome}`)
console.log(`portas: ${c2.portas}`)
console.log(`ligado: ${(c2.ligado ? "sim" : "não")}`)
console.log(`cor: ${c2.cor}`)
console.log(`blindagem: ${c2.blindagem}`)
console.log(`muni: ${c2.muni}`)
console.log(`veocidade maxima: ${c2.vel}\n`)

