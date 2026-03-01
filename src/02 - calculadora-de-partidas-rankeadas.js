function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function calcularNivel(vitorias) {
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Ferro";
    }
    return nivel;
}


// Exemplo de uso
let vitorias = 15;
let derrotas = 3;

let saldoVitorias = calcularSaldo(vitorias, derrotas);
let nivel = calcularNivel(vitorias);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);