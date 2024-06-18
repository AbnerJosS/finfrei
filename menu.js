import {mens} from "./finfrei/exibicao.js"
export {menu, opcao }


function menu() {
console.log(`======= Escolha dentre as opções a seguir:=======
                    1- depoistar
                    2- sacar
                    3- exibir
                    4- simulação de investimento
                    5- sair`)
}

function opcao() {
    return mens ('Opção: ')
}
