class pessoa{
    //construtor pede parametro obrigatorio
    constructor(nome, idade){
        this.nome=nome
        this.idade=idade
    }
    //metodos
    info(){
        console.log(`nome: ${this.nome}`)
        console.log(`idade: ${this.idade}`)
    }
    getnome=()=>{
        return this.nome
    }
    getidade=()=>{
        return this.idade
    }
   
    setnome(nome){
        this.nome=nome
    }
    setidade(idade){
        this.idade=idade
    }
}

const btnadicionar=document.querySelector("#adicionar")
const quadro=document.querySelector("#quadro")

let pessoas = []

const addpessoas=()=>{
    quadro.innerHTML=""
    pessoas.map((elem)=>{
        const div=document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML=`nome: ${elem.getnome()} <br/>idade: ${elem.getidade()}`
        quadro.appendChild(div)
    })
}

btnadicionar.addEventListener("click",(evt)=>{
    const nome=document.querySelector("#nome")
    const idade=document.querySelector("#idade")
    const p=new pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value=""
    idade.value=""
    nome.focus()
    addpessoas()

})