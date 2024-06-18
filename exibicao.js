import prompt from "prompt-sync";
let ler = prompt()

export {escrever, mens, mensa}

function escrever(mensagem) {
    console.log(mensagem);
}


function mens(mensagem) {
    console.log(mensagem)
   let cal = mensagem = ler()

  return cal
}

function mensa(mensagem) {
    console.log(mensagem)
   let cal = mensagem = Number(ler())

  return cal
}


