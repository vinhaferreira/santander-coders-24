// Operador Ternário

const idade = 16;

// idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade");

// mais util para retornar valor
const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";

// nao recomendado  , mais recomendado com 2 comparações

// const mensagem =
//   idade >= 18
//     ? "Maior de idade"
//     : idade >= 16
//     ? "já pode votar"
//     : "Não pode votar";

console.log(mensagem);

// FALSO : 0, undefined, null, '', NaN
// Truthy: todos os demais valores
