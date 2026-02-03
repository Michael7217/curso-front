class npc{
    static alerta=false //adiciona a propriedade a todas instancias
    constructor(energia){
        this.energia=energia
    }
    info=function(){
        console.log(`energia: ${this.energia} `)
        // this == vai imprimir o de cada instancia
        console.log(`alerta: ${this.alerta ? "Sim" : "Não"}`)
        //vai imprimir a propriedade atribuida a classe
        console.log(`alerta: ${npc.alerta ? "Sim" : "Não"}`)
    }
    //metodo faz parte da classe, não das instancias
    static alertar=function(){
        npc.alerta=true
    }
}

const npc1 = new npc(100)
const npc2 = new npc(80)
const npc3 = new npc(30)

//da para alterar a propriedade de cada instancia individualmente
npc1.alerta=true
//altera a propriedade da classe
npc.alerta=true
//metodo static
//funciona na classe
npc.alertar()
//nao funciona nas instancias
/* npc1.alertar() */

npc1.info()
npc2.info()
npc3.info()