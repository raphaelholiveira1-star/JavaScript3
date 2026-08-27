// Função tradicional
function somar(a, b) {
  return a + b;
}

// Arrow Function equivalente
const somar = (a, b) => {
  return a + b;
};

// Retorno implícito (sem chaves para instruções de linha única)
const somarDireto = (a, b) => a + b;

// Se houver apenas 1 parâmetro, os parênteses são opcionais
const dobrar = n => n * 2;