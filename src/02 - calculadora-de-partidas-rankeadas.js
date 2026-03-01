function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

function calcularNivel(vitorias) {
  let nivel = "";

  if (vitorias <= 10) nivel = "Ferro";
  else if (vitorias <= 20) nivel = "Bronze";
  else if (vitorias <= 50) nivel = "Prata";
  else if (vitorias <= 80) nivel = "Ouro";
  else if (vitorias <= 90) nivel = "Diamante";
  else if (vitorias <= 100) nivel = "Lendário";
  else nivel = "Imortal";

  return nivel;
}

// Exemplo de uso
let vitorias = 15;
let derrotas = 3;

let saldoVitorias = calcularSaldo(vitorias, derrotas);
let nivel = calcularNivel(vitorias);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);