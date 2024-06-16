// Muito útil quando sua variável possui valores específicos

const permissoes = "aluno"; // ||'professor'||admin

switch (permissoes) {
  case "aluno":
    console.log("Você só pode ver as aulas");
    break;
  case "professor":
    console.log("Você pode alterar as aulas e fazer exercicios");
    break;
  case "admin":
    console.log("Você pode fazer o que quiser no sistema");
    break;
  default:
    console.log("Não sei quem você é o sistema");
}
