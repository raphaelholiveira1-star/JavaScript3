const valores = [10, 20, 30, 40];

// Sintaxe correta com Arrow Function
const total = valores.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(total); // Saída: 100