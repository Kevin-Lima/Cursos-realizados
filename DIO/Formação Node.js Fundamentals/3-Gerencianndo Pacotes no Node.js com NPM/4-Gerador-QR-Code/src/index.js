import prompt from 'prompt'

import mainPrompt from "./prompts/prompt-main.js"

import createQRCode from './services/qr-code/create.js';

import createPassword from './services/password/create.js';

async function main() {
    // Inicia o prompt para poder receber entradas no terminal
    prompt.start(); 

    // (callback) -> é essa função anônima passada dentro do prompt.get
    // O callback é chamado automaticamente quando o usuário digita a resposta.
    // Ele recebe dois parâmetros:
    //   1. errorMonitor -> mostra se houve algum erro ao ler a resposta
    //   2. choose -> é um objeto com os valores digitados pelo usuário
    // Exemplo: se o usuário digitar "1", o objeto será { select: '1' }
    prompt.get(mainPrompt, async (errorMonitor, choose) => {
        if(err) console.log(err)
        // Verifica se o usuário escolheu a opção "1"
        if (choose.select == 1) await createQRCode();

        // Verifica se o usuário escolheu a opção "2"
        if (choose.select == 2) await createPassword()
    });
}


main()