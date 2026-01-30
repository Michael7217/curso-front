const valores = [1,2,3,4]
const it_val = valores[Symbol.iterator]()

console.log(it_val.next())
console.log(it_val.next())
console.log(it_val.next())
console.log(it_val.next())
console.log(it_val.next())

const txt = 'youtube'
const it_txt = txt[Symbol.iterator]()

console.log(it_txt.next())
console.log(it_txt.next())
console.log(it_txt.next())
console.log(it_txt.next())
console.log(it_txt.next())
console.log(it_txt.next())
console.log(it_txt.next())
console.log(it_txt.next())
