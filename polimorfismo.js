//metodo ter ações diferentes

class carro{
    constructor(tipo, estturbo){
        this.turbo=new turbo(estturbo)
        if(tipo == 1){
            this.velmax=120
            this.nome='normal'
        }else if(tipo == 2){
            this.velmax=160
            this.nome='esportivo'
        }else if(tipo == 3){
            this.velmax=200
            this.nome='super esportivo'
        }
        this.velmax+=this.turbo.pot
    }
    info(){
        console.log(this.nome)
        console.log(this.velmax)
        console.log(this.turbo.pot)
    }
}

class turbo{
    constructor(e){
        if(e == 0){
            this.pot=0
        }else if(e == 1){
            this.pot=50
        }else if(e == 2){
            this.pot=75
        }else{
            this.pot=100
        }
    }
}


class carroespecial extends carro{
    constructor(estturbo){
        super(4, estturbo)
        this.tipoinfo=0
        this.velmax=300+this.turbo.pot
        this.nome='carro especial'
    }
    info(){
        /* super.info() */
        if(this.tipoinfo == 1){
            super.info() //chama o metodo da classe base
        }else{
            console.log(`nome: ${this.nome}`)
            console.log(`velmax: ${this.velmax}`)
            console.log(`turbo: ${this.turbo.pot}`)
        }
    }
}
const c1 = new carro(1,0)
const c2 = new carro(1,1)
const c3 = new carroespecial(3)

c1.info()
c2.info()
c3.info()