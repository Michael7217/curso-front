const todoscursos = ["html", "css", "javascript", "MySQL", "React native", "Python", "Node"]
const input = document.querySelector("#input")
const aa = document.querySelector("#adcantes")
const ad = document.querySelector("#adcdepois")
const remover = document.querySelector("#remover")
const cxcomandos = document.querySelector("#comandos")
const caixacursos = document.querySelector("#caixacursos")
const cursoSelecionado = document.querySelector("#cursoselecionado")
let indice = 0 



const criarnovo=(curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class", "curso")
    novoElemento.innerHTML=curso
    novoElemento.addEventListener("click", (evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionados")
    })
    return novoElemento
}

const tirarSelecao=()=>{
    const cursosselecionados = [...document.querySelectorAll(".selecionados")]
    cursosselecionados.map((elem)=>{
        elem.classList.remove("selecionados");
    })
}
todoscursos.map((elem)=>{
    const novoe = criarnovo(elem)
    caixacursos.appendChild(novoe)
    indice++
})

const radioSelecionado=()=>{
   const cursosselecionados = [...document.querySelectorAll(".selecionados")]
   return cursosselecionados[0]
}

cursoSelecionado.addEventListener("click",(evt)=>{
    try {
        alert("Curso selecionado: "+ radioSelecionado().innerHTML)
    } catch (ex) {
        alert("Selecione um curso")
    }
})
/* remover elemento */
remover.addEventListener("click",(evt)=>{
    if(radioSelecionado() != undefined){
        
        radioSelecionado().remove()/* remove elemento */
    }else{
        alert("escolha um curso")
    }
})

aa.addEventListener("click",(evt)=>{
    try {
        if(input.value != "") {
            const novoCurso = criarnovo(input.value)
            caixacursos.insertBefore(novoCurso, radioSelecionado())
        }else{
            alert("digite o nome do curso")
        }
    }catch(ex){
        alert("selecione um curso")
    }
})

ad.addEventListener("click",(evt)=>{
    try {
        if(input.value != "") {
            const novoCurso = criarnovo(input.value)
            caixacursos.insertBefore(novoCurso, radioSelecionado().nextSibling)
        }else{
            alert("digite o nome do curso")
        }
    }catch(ex){
        alert("selecione um curso")
    }
})