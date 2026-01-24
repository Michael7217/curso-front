let frutas = ['banana', 'uva', 'maracuja', 'morango'];

/* 
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
} */

frutas.forEach( fruta => console.log(fruta));
/* foreach == for */

let pedidos = [{
    id: 1,
    nome: "Michael",
    alimento: "Hambúrguer",
    bebida: "Refrigerante",
    preco: 25.00
  },
  {
    id: 2,
    nome: "Ana",
    alimento: "Pizza",
    bebida: "Suco",
    preco: 32.50
  },
  {
    id: 3,
    nome: "Carlos",
    alimento: "Cachorro-quente",
    bebida: "Água",
    preco: 15.00
  },
  {
    id: 4,
    nome: "João",
    alimento: "Pastel",
    bebida: "Caldo de cana",
    preco: 12.00
  },
  {
    id: 5,
    nome: "Marina",
    alimento: "Salada",
    bebida: "Chá gelado",
    preco: 18.75
  }];

pedidos.forEach((pedido, index) => {
    let {nome, alimento, bebida} = pedido;
    console.log(`${index} - ${nome} - ${alimento} - ${bebida}`);
})

/* verifica e altera */
pedidos.map(pedido => {
    if (pedido.alimento == "coxinha") {
        return (pedido.alimento = "nao temos no momento");
        
    }
});
console.log(pedidos);

/* filtra no array, retorna todos os valores correspondentes*/
let filter = pedidos.filter(pedido => {
   return pedido.bebida == "Refrigerante";
});

console.log(filter);

/* procurar valor dentro do array, retorna apenas um valor */
let find = pedidos.find(pedido => {
    return (pedido.id == 2)
});

console.log(find);

/* todas as bebidas sao igual a Refrigerante? */
let pedido = pedidos.every(pedido => {
    let {bebida} = pedido;
    return bebida == "Refrigerante";
});
console.log(pedido);

/* verifica se tem pelo menos um item correspondente no array */
let some = pedidos.some(pedido => {
    let {alimento} = pedido;
    return alimento == "Pizza";
});
console.log(some);
/* soma os itens correspondentes no array */
let pedido = pedidos.reduce((total, pedido) => {
    let {preco} = pedido;
    return total += preco;

}, 0);
console.log(pedido);