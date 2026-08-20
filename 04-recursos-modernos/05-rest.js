function somar(...numero){
    return numero.reduce((total, numero) => total + numero, 0);
}

console.log(somar(10, 20, 30, 40, 50));

// 0 + 10 = 10
// 10 + 20 = 30
// 30 + 40 = 70
// 50 + 60 = 110
// 60 + 70 = 130