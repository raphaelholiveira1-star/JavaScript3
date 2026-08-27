// Opção 1: Passar uma string JSON válida (com aspas na string inteira)
const json = '{"nome": "Igor", "nota": 9}';
const aluno = JSON.parse(json);

console.log(aluno.nome); // Exibe: Igor