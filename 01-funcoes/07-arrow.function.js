// 1. Função tradicional
function somarTradicional(a, b) {
  return a + b;
}

// 2. Arrow Function equivalente
const somar = (a, b) => {
  return a + b;
};

// 3. Retorno implícito (sem chaves para instruções de linha única)
const somarDireto = (a, b) => a + b;

// 4. Se houver apenas 1 parâmetro, os parênteses são opcionais
const dobrar = n => n * 2;

// Testes:
console.log(somarTradicional(5, 5)); // 10
console.log(somar(10, 20));          // 30
console.log(somarDireto(2, 3));      // 5
console.log(dobrar(4));              // 8