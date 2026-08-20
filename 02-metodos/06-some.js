const notas = [5, 6, 8, 9, 4];

// Passa a condição dentro da arrow function do some()
const possuiNotaAlta = notas.some((nota) => nota >= 9);

console.log(possuiNotaAlta); // Saída: true