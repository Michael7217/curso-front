const tipomilitar=document.querySelector("#militar")
const tiponormal=document.querySelector("#normal")
const blindagem=document.querySelector("#blindagem")
const muni=document.querySelector("#muni")
const nome=document.querySelector("#nome")
const portas=document.querySelector("#portas")
const btnadc=document.querySelector("#adicionar")
const quadro=document.querySelector("#carros")

tipomilitar.addEventListener("click",(evt)=>{
    blindagem.removeAttribute("disabled")
    muni.removeAttribute("disabled")
})
tiponormal.addEventListener("click",(evt)=>{
    blindagem.value=0
    muni.value=0
    blindagem.setAttribute("disabled", true)
    muni.setAttribute("disabled", true)
})

btnadc.addEventListener("click",(evt)=>{
    if (tipomilitar.checked) {
        const n = nome.value
        const p = portas.value
        const b = blindagem.value
        const m = muni.value
        const mlt = new militar(n, p, b, m)
        adcarr(mlt)
        adcquad()
    }else{
        const n = nome.value
        const p = portas.value
        const nml = new carro(n, p)
        adcarr(nml)
        adcquad()
    }
    nome.value = ""
    portas.value = 0
    blindagem.value = 0
    muni.value = 0 
})

adcarr=(elem)=>{
    carros.push(elem)
}

adcquad=()=>{
    quadro.innerHTML = ""
    carros.map((elem, ind)=>{
        const div = document.createElement("div")
        if(elem instanceof militar){
            div.innerHTML=`nome: ${elem.nome} <br/> portas: ${elem.portas} <br/>
            blindagem: ${elem.blindagem} <br/> muni: ${elem.muni} <br/>`
        }else{
            div.innerHTML=`nome: ${elem.nome} <br/> portas: ${elem.portas} <br/>`
        }
        div.setAttribute("class", "carro")
        const btn=criarbtn(ind)
        div.appendChild(btn)
        quadro.appendChild(div)
    })
}
criarbtn=(ind)=>{
    const btnremover=document.createElement("button")
    btnremover.textContent="Remover"
    btnremover.setAttribute("class", "adc")
    btnremover.addEventListener("click", (evt)=>{
        carros.splice(ind, 1)
        adcquad()
    })
    return btnremover
}

let carros = []

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