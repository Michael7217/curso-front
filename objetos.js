class carro{
    //construtor pede parametro obrigatorio
    constructor(pnome, tipo){
        this.nome=pnome
        if(tipo == 1){
            this.tipo = 'esportivo'
            this.velmax = 300
        }else if(tipo == 2){
            this.tipo = 'utilitario'
            this.velmax = 100
        }else if(tipo == 3){
            this.tipo = 'passeio'
            this.velmax = 160
        }else{
            this.tipo = 'militar'
            this.velmax = 180
        }
    }
    //metodos
    info(){
        console.log(`nome: ${this.nome}`)
        console.log(`tipo: ${this.tipo}`)
        console.log(`velocidade maxima: ${this.velmax}\n`)
    }
    getnome=()=>{
        return this.nome
    }
    gettipo=()=>{
        return this.tipo
    }
    getvel=()=>{
        return this.velmax
    }
    setnome(nome){
        this.nome=nome
    }
    setnome(tipo){
        this.tipo=tipo
    }
    setnome(velmax){
        this.velmax=velmax
    }
}
//operador new instancia um novo objeto da classe
let c1= new carro('rapidao', 1)
let c2= new carro('superluxo', 2)
let c3= new carro('bombadão', 4)
let c4= new carro('carrego tudo', 3)

c1.info()
c2.info()
c3.info()
c4.info()
c1.setnome('super carro')
console.log(`${c1.getnome()}`)