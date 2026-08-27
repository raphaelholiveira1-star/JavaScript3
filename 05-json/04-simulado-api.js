// 1. Array de objetos com a estrutura corrigida
const respostaAPI = [
  { id: 1, nome: "Vinicius" },
  { id: 2, nome: "Iago" }
];

// 2. Não usá-los com JSON.parse se já for um array/objeto JS. 
// Apenas iteramos diretamente no array:
respostaAPI.forEach(aluno => console.log(aluno.nome));

// Saída no console:
// Vinicius
// Iago