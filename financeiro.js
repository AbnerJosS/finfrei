import { mens, escrever, mensa } from "./exibicao.js";

export { dep, sacar, exibir, simulacao };

function dep(s) {
let valor;
let valorn = s
do {
escrever('Quanto deseja depositar? (Digite "c" para cancelar): ');
valor = mensa();

valorn = valorn +=valor
if (valor == 'c') {
console.log('deposito cancelado');
return 0;
}
valor = Number(valor);
if (valor <= 0) {
escrever('Valor inválido. Tente novamente.');
}
} while (valor <= 0);
return valorn ;
}

function sacar(s) {
    
let saque

do {
escrever('quanto voce deseja sacar? (caso quiser cancelar a operação digite "c") ')
saque= mens();
if (saque === 'c') {
escrever('Operação cancelada.');
return s
}

saque= Number(saque)


if (saque <= 0) {

escrever('Valor inválido. Tente novamente.')

} 
else if (saque > s) {

escrever('Saldo insuficiente.');
return s

}
}
 while ( saque <= 0 || saque > s);
return s - saque;
}

function exibir(s) {

console.log(`Seu saldo atual é: ${s}`);
}

function simulacao(juros, tempo, capital) {
let a = mensa('informe a porcentagem:')
let t= mensa('informe o tempo:')
let x = mensa('informe o seu capital:')

let valo = a/100

let m = (1+valo)**t
let M = x*m

let mensagem = escrever(`valor do investimento igual a :R$ ${M.toFixed(2)}`)
return mensagem
}
