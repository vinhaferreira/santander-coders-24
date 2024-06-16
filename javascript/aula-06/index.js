// console.log("Hello World!");
// console.log("Estamos na aula 06.");
// abrir terminal ctrl e aspas
// node .\aula-06\index.js

// utilize sempre o camel case no JS
var nomeDoProfessor = "Walisson Silva"; //string (texto) sempre aspas
var idade = 27; //number
var altura = 1.77; //number
var estudando = true; //bollean (boleano: verdadeiro ou falso)
//javaScript tipagem dinamica: infere os tipos de dados
// tipagem fraca - facilmente consegue misturar textos e números , nao dá erro

console.log(nomeDoProfessor, typeof nomeDoProfessor);
console.log(idade, typeof idade);
console.log(altura, typeof altura);
console.log(estudando, typeof estudando);

var semConteudo; // declarar uma variavel
console.log(semConteudo);
//undefined é uma variavel que foi declarada mas nao recebeu nenhum conteudo;

// pode declarar varias variaveis colocando uma virgula
var curso = "Front-end em React",
  topico = "JavaScript Básico";

console.log(curso, topico);

// let permite que voce altere
//const nao pode alterar

let notaDoAluno = 10;
const mediaDoAluno = 8;

notaDoAluno = 9;
// mediaDoAluno = 5; nao é permitido
console.log(notaDoAluno);
console.log(mediaDoAluno);

//var pode ser usada antes mesmo de ser criada a let nao pode por isso devemos utilizar let e nao var!!
