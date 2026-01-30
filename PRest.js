/* function soma(...valores){
    let res = 0
    for (let valor of valores){
        res += valor
    }
    return res
} */

//console.log("valor total: " + soma(1,2,3,4,5,6,7,8,9))

const v = ((...valores)=>{
    let res = 0
    for(let valor of valores){
        res += valor
    }
    return res
})

//console.log("valor total: " + v(1,2,3,4,5,6,7,8,9))

const res = new Function("v1", "v2", "return v1+v2")//função construtora anônima

//console.log("valor total: " + res(1,2))


const soma=(...valores)=>{
    const somar=(val)=>{
        let res = 0
        for (let v of val) {
            res += v             
        }
        return res
    }
    return somar(valores)
}

console.log("valor total: " + soma(1,2,3,4,5,6,7,8,9))