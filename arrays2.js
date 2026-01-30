let num =[1,2]
const op = [
    (val)=>{
        let res = 0 
        for (let v of val){
            res += v
        }
        return res
    },
      (val)=>{
        let res = 1
        for (let v of val){
            res *= v
        }
        return res
    },
       (val)=>{
        for (let v of val){
            console.log(v)
        }
        
    }
]

const caixa=document.getElementById("p")
const p = document.createElement("p")
p.innerHTML= op[0](num)
caixa.appendChild(p)

console.log(op[0](num)) // chamand func dentro do array