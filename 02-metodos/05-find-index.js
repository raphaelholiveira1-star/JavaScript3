const frutas = ["Maça", "Banana", "Uva"];

// Sintaxe correta com Arrow Function e comparação estrita (===)
const indice = frutas.findIndex((fruta) => fruta === "Banana");

console.log(indice); // Saída: 1