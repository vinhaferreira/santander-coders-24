const prompt = require("readline-sync");

const idade = prompt.question("Qual eh a sua idade?");

// console.log("O usuário tem ", idade, "anos de idade.");
// console.log(idade, typeof idade);

// toda vez no prompt do browser e do node nao tem como saber se o usuario vai digitar texto ou numero ai vai ser uma string

//prompt n funciona no node ai tem qdd bibliotecas dentro da pasta principal de javascript
//npm install readline-sync  npm é como instala as bibliotecas install é para intalar e
//readline é o nome da biblioteca

const idadeNumber = Number(idade);
console.log(idadeNumber, typeof idadeNumber);
//Number com N maiusculo e o que quero converter para numero fica entre parenteses

// Coerção (Conversão) de Tipos

// Coercão Explicita(manual)

console.log(Number("X")); // NaN not a number

console.log(String(10), typeof String(10)); //string

console.log(Boolean(-1), typeof Boolean(-1));

//Só 0 é falso
//num + string td string concatena junta 1+1 é 11

// 2. Coerção Implicita (Automática)
console.log(1 + "1"); // junta os elementos
console.log(5 + "10");
console.log(10 - "5"); // converte em numero e faz a operação
console.log(10 * "5"); // converte em numero e faz a operação
// *****SE NAO FOR SOMA ELE TRANSFORMA TEXTO EM NUMERO

// Qual será a saída desse código?
let n = 1 + "1";
n = n - 1;
console.log(n); //10

// Qual será a saída desse código?
console.log(2 + 3 + 4 + "5"); //9+"5"=95

// Qual será a saída desse código?
console.log("5" + 2 + 3 + 4); //'52'+3+4=5234

// Qual será a saída desse código?
console.log("10" - "4" - "3" - 2 + "5"); //6 -"3"-2+"5"= 3 -2 +"5"=15
