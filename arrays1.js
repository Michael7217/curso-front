const caixa = document.getElementById("p")
let cores = ['azul', 'vermelho', 'branco', ['claro', 'escuro']]
let cursos = ['html', 'css', 'javascript', 'react', cores]
console.log(cursos[4][3][0])
cursos.push('python') // adiciona no final
cursos.unshift('node')
cursos.splice(2, 0, 'c')
cursos.shift() // remove do inicio
cursos.pop() // remove o ultimo elemento
cursos.map((elem)=>{
    const p = document.createElement("p")
    p.innerHTML=elem
    caixa.appendChild(p)
})

/* 
appendChild  => aceita somente elementos
append => aceita texto ou elementos
*/