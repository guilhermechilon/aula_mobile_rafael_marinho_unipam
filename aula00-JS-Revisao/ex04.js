function exibirDetalhesProduto(produto){
    return `Produto: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)},
    Estoque: ${produto.estoque} unidades.`;
}

//
const produto = {
    nome: "Cafe",
    preco: 23,
    estoque: 57,
}

console.log(exibirDetalhesProduto(produto));

//ForEach

const numeros = [15,25,35,45,55];
numeros.forEach(num => {
    console.log(`Numero: ${num}`);
});

const dobrados = numeros.map(num => num*2);
console.log(dobrados);
console.log(numeros);

//filter filtra todos que possuem essa condição
const maioresQue30 = numeros.filter(num => num > 30);
console.log(maioresQue30);

//find traz apenas o primeiro elemento que satisfaz a condição
const maiorQue40 = numeros.find(num => num > 40);
console.log(maiorQue40);

//every retorna true ou false de acordo com a condição (porta logica AND)
const todosMaiores = numeros.every(num => num > 25);
console.log(todosMaiores);

//some - pelo menos 1 elemento corresponde a condição (porta OR)
const existeMaior = numeros.some(num => num > 50);
console.log(existeMaior);