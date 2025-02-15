//Exemplo 1: Variaveis (var, let e const)

// Usando var (escopo global/função)

let nome = "Rafael";

if(true){
    let nome = "Maria";
    console.log(nome); //Maria
}

console.log(nome);

//const
const PI = 3.14
console.log(PI)
if(true){
    const PI = 3.14159
    console.log(PI)
}