const pessoa={
    nome:'Bruno',
    canal:'CFBCursos',
    aulas:{
        aula01:'introdução',
        aula02:'variaveis',
        aula03:'condicional'
    }
}

const str= '{"nome":"Bruno","canal":"CFBCursos","aulas":{"aula01":"introdução","aula02":"variaveis","aula03":"condicional"}}'
const str_json=JSON.stringify(pessoa) //converte um obj literal em uma string json
const obj_json=JSON.parse(str) // converte uma string json em um obj json

console.log(str_json)
console.log(obj_json)
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.aulas.aula01)