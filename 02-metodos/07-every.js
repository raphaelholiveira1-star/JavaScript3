const notas = [7, 8, 9, 10];

// Passa a condição dentro da arrow function do every()
const todosAprovados = notas.every((nota) => nota >= 7);

console.log(todosAprovados); // Saída: true