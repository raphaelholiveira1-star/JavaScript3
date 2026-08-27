//function somar(a , b){
//    return a + b;
//}

//const resultado = somar(15 , 30);

//console.log(resultado);

//console.log(somar(7, 9));

//let ligado = false;

//function ligaDesligar(valor){
//    if(ligado == false){
//        ligado = true;
//      return "Ligado"
//    }else{
//        ligado = true;
//        return "Desligado"
//    }
//}

// Declaração da variável com valor inicial
let ligado = false;

// Função de soma
function somar(a, b) {
    return a + b;
}

const resultado = somar(15, 30);
console.log(resultado); // Exibe: 45
console.log(somar(7, 9)); // Exibe: 16

// Função para alternar o estado de ligado/desligado
function ligaDesligar() {
    ligado = !ligado;
    return ligado ? "Ligado" : "Desligado";
}

console.log(ligaDesligar()); // Exibe: "Ligado"
console.log(ligaDesligar()); // Exibe: "Desligado"