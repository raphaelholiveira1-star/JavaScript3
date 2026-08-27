const calcularMedia = (numeros) => {
  if (!numeros || numeros.length === 0) return 0;
  const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
  return soma / numeros.length;
};

// Exemplo de uso
const notas = [8.5, 7.0, 9.5, 6.0];
console.log(`Média: ${calcularMedia(notas)}`); // Resultado: 7.75