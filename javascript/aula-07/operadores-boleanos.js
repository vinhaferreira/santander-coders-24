//Operadores Boleanos: Comparações

const numero1 = 10; // = atribuição
const numero2 = 12;

// Igualdade:      == (ou ===)
console.log(numero1 == numero2);
console.log(numero1 === numero2); // === comparacao de conteudo e tipo
console.log(numero1 == "10"); // comparacao com == so compara valor e nao o tipo

// Desigualdade:   != (ou !==)
console.log(numero1 != 10); //so valores
console.log(numero1 !== 10); //valor e tipo

// Maior que:  >
console.log(numero1 > 5);

// Maior ou Igual: >=
console.log(numero1 >= 15);

// Menor que:      <
console.log(numero1 < 20);

// Menor ou igual: <=
console.log(numero1 <= 8);

console.log("Comparação de tipo: ", numero1 === "10");
console.log("Comparação de tipo: ", numero1 !== "10");

// Conjunções Lógicas

// AND => &&
let idadePessoa1 = 16;
let idadePessoa2 = 39;

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18);

// OR => ||
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18);

// NOT => !
console.log(!true);

console.log(!(idadePessoa1 >= 18)); //retorena verdadeiro se a pessoa foir menor de idade
