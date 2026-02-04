const divddata=document.getElementById("data")
const divhorario=document.getElementById("horario")
const input=document.querySelector("#input")
const btn_ativar = document.querySelector("#ativar")
const btn_parar = document.querySelector("#parar")
const temp =document.querySelector("#temp")
const tela=document.querySelector("#tela")
let audio = new Audio("som.mp3")

audio.loop = true

let ts_atual = null
let ts_alarme = null
let aa = false
let atoc = false

btn_ativar.addEventListener("click", (evt)=>{
    ts_atual = Date.now()
    ts_alarme = ts_atual+(input.value*1000)
    aa = true
    atoc = true
    const dt = new Date(ts_alarme)
    temp.innerHTML = "hora do alarme: "+dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()
})

btn_parar.addEventListener("click", (evt)=>{
    aa = false
    atoc = false
    temp.innerHTML="hora do alarme"
    input.value = 0
    tela.classList.remove("alarme")
    audio.pause()
    audio.currentTime = 0
})

const data = new Date()

let dia=data.getDate()
dia = dia<10? "0"+dia : dia 
let mes=data.getMonth() + 1
mes = mes<10 ? "0"+mes : mes
const datastr= dia+"/"+mes+"/"+data.getFullYear()


console.log(data.getHours());
console.log(datastr);

const rel=()=>{
    const data = new Date()
    let h = data.getHours()
    h = h<10 ? "0"+h : h
    let m = data.getMinutes()
    m = m<10 ? "0"+m : m
    let s = data.getSeconds()
    s = s<10 ? "0"+s : s
    const hc = h+":"+m+":"+s
    divhorario.innerHTML=hc
    if (aa && atoc) {
        if(data.getTime() >= ts_alarme){
            atoc = true
            audio.play()
            tela.classList.add("alarme")
        }
    }


}

const inter = setInterval(rel, 1000) //chama func rel a cada 1 seg

divddata.innerHTML=datastr

/* 
console.log(`Dia da semana: ${data.getDay()}`);
console.log(`Dia: ${data.getDate()}`);
console.log(`Mês: ${data.getMonth()}`)
console.log(`Ano: ${data.getFullYear()}`)
console.log(`data: ${data.toDateString()}`); */


















