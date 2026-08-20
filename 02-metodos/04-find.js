const frutas = ["Maça", "Banana", "Uva"];

// Para obter o ÍNDICE (posição no array):
const indice = frutas.indexOf("Banana");
console.log(indice); // Saída: 1

// Para obter o NOME da fruta (se existe no array):
const frutaEncontrada = frutas.find((fruta) => fruta === "Banana");
console.log(frutaEncontrada); // Saída: "Banana"