function verificarAprovado(media) {
    if (media >= 7) return "Aprovado";
    if (media >= 5) return "Recuperação";
    return "Reprovado";
}

console.log(verificarAprovado(8.5)); // "Aprovado"
console.log(verificarAprovado(6.0)); // "Recuperação"
console.log(verificarAprovado(4.2)); // "Reprovado"