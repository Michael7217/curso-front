//objetos literais
/* todos os objetos da classe recebem os mesmos atribultos */

const pessoa={
    nome:"",
    idade:"",
    getnome:function(){
        return this.nome
    },
    getidade:function(){
        return this.idade
    },
     setnome:function(nome){
        this.nome=nome
    },
    setidade:function(idade){
        this.idade=idade
    }
}

/* const p1 = pessoa
const p2 = pessoa
 */
//maneiras de chamar

/* 
p1.nome='mnndsgnsd'
p2["nome"] = "biodsmimsio"
pessoa.setnome("wigeuing") */

/* 
console.log(pessoa.nome)
console.log(p1.nome)
console.log(p2.nome)
console.log(p2.getnome()) */

const quadro=document.querySelector("#quadro")
const nome=document.querySelector("#nome")
const idade=document.querySelector("#idade")
btnadicionar=document.querySelector("#adicionar")
nome.focus() //coloca o cursor no input 

function add(nome, idade){
    const p=document.createElement("p")
    p.setAttribute("class", "pessoa")
    p.innerHTML=`nome: ${nome}\n idade: ${idade}`
    quadro.appendChild(p)
}

btnadicionar.addEventListener("click",(evt)=>{
        add(nome.value, idade.value)
        nome.value=""
        idade.value=""
        alert("pessoa inserida")
        
})