import  chalk from "chalk";
//dicionario = o indice a gente escolhe o nome

// mainPrompt é um array que contém objetos de configuração
const mainPrompt = [
    {
        // Nome da chave que será usada para identificar a resposta do usuário
        name: "select",

        // Texto que será exibido para o usuário como descrição/pergunta
        description: chalk.yellow.bold("Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD)"),

        // Expressão regular que valida a entrada do usuário
        // ⚠️ Aqui você colocou /^[1-2]+4$/ -> isso significa:
        // "um ou mais números 1 ou 2, seguidos de um 4 no final"
        // Se a intenção for aceitar somente 1 ou 2, use: /^[1-2]$/
        pattern: /^[1-2]+$/,

        // Mensagem de erro que aparece quando o valor não corresponde ao pattern
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),

        // Define se o campo é obrigatório (não pode ser vazio)
        required: true
    },
];

export default mainPrompt


