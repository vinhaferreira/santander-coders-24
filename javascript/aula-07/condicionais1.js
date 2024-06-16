const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual eh a sua idade?"));

const ehMaiorDeIdade = idade >= 18;

// decisao -Estrutura COndicional

if (idade >= 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Voce é menor de idade");
}

// 1 Preciso ser maior e idade
// 2 Ter CNH

const idadeDaPessoa = 18;
const temCNH = false;

if (idadeDaPessoa >= 18 && temCNH === true) {
  console.log("Você pode dirigir!");
} else {
  console.log("Você não pode dirigir");
}
