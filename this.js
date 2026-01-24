/* cria uma nova variavel dentro da func */
function aluno(nome, nota){
    this.nome = nome
    this.nota = nota
    console.log(nome);
    console.log(nota);
}

aluno('Michael', 10);