const olhos = [...document.getElementsByClassName("olho")]

let posx=0
let posy=0

window.addEventListener("mousemove", (evt)=>{
    posx=evt.clientX
    posy=evt.clientY

    const rot = (Math.atan2(posy, posx)*180/Math.PI)


    olhos.forEach((olho)=>{
        olho.style.transform="rotate("+rot+"deg)"
    })
    
})

