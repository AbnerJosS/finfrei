import { escrever } from "./exibicao.js";
import { menu, opcao } from "../menu.js"
import { sacar, exibir, dep, simulacao} from "./financeiro.js";

let saldo = 0
let juros =0
let tempo=0
let capital =0

escrever('----Seja bem vindo ao Fin Tech----');

while (true) {
    menu();
    const ops = opcao();
    if(ops==1) saldo= dep(saldo)

    else if(ops==2)saldo= sacar(saldo)
    
    else if(ops==3)exibir(saldo)
    
    else if(ops==4) simulacao(juros, tempo, capital)
    else if(ops==5){
        escrever('muito obrigado por usar o nosso programa!')
        break
    }
    else escrever('opcao invalida')
}




