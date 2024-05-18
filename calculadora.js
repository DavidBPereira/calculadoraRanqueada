function saldoVitoria (vitorias,derrotas){
    let saldoRanqueada = vitorias - derrotas
    return saldoRanqueada
} 

function rank(saldoRanqueada) {
    if (saldoRanqueada <= 10) {
        console.log("O Herói tem saldo de " + saldoRanqueada + " e está no nível de Ferro");
    } else if (saldoRanqueada <= 20) {
        console.log("O Herói tem saldo de " + saldoRanqueada + " e está no nível de Bronze");
    } else if (saldoRanqueada <= 50) {
        console.log("O Herói tem saldo de " + saldoRanqueada + " e está no nível de Prata");
    } else if (saldoRanqueada <= 80) {
        console.log("O Herói tem saldo de " + saldoRanqueada + " e está no nível de Ouro");
    } else if (saldoRanqueada <= 90) {
        console.log("O Herói tem saldo de " + saldoRanqueada + " e está no nível de Diamante");
    } else if (saldoRanqueada <= 100) {
        console.log("O Herói tem saldo de " + saldoRanqueada + " e está no nível de Lendário");
    } else {
        console.log("O Herói tem saldo de " + saldoRanqueada + " e está no nível de Imortal");
    }
}

const saldo = saldoVitoria(100, 55); // Exemplo de saldo
rank(saldo);

