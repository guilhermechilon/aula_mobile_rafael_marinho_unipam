const cores = ['vermelho', 'verde', 'azul'];
for(const cor of cores){
    console.log(cor);
}

const pessoa = {
    nome: "Rafael",
    idade: 34,
    usuário: "Professor"
};

for(const chave in pessoa){
    console.log(`${chave}: ${pessoa[chave]}`);
}

const mapa = new Map();
mapa.set('nome', 'Rafael');
mapa.set('idade', 34);
console.log(mapa.get('nome'));
console.log(mapa.get('idade'));


//weakMap
const obj = {id: 1};
const weakMap = new weakMap();

weakMap.set(obj, 'aluno 1');
console.log(weakMap.get(obj));