const nave=function(energia){
    this.energia=energia
    this.disparos=100
}
const n1=new nave(100)
//adiciona atribultos as instancias
nave.prototype.vidas=3
//cria metodos nas instancias
nave.prototype.disparar=function(){
    if(this.disparos > 0){
        this.disparos--
    }
}
console.log(nave)
console.log(n1.vidas)
console.log(n1.energia)