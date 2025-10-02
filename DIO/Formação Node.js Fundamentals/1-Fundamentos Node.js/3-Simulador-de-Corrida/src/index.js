//é um objeto, que e uma coleção de propriedades e valores
const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
}

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
}

// async define a função como assíncrona, permitindo o uso de "await" dentro dela
async function rollDice(){ 
    // Math.random() gera um número aleatório entre 0 e 1 (com casas decimais)
    // Multiplicando por 6, temos valores de 0 até quase 6
    // Math.floor() arredonda para baixo, gerando inteiros de 0 até 5
    return Math.floor(Math.random() * 6) + 1; // somamos +1 para gerar valores de 1 a 6 (como em um dado real)
}

async function getRandomBLock() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break
        default://caso nenhum dos cases seja verdadeiro, cai no default 
            result = "CONFRONTO"
    }

    return result
}

async function logRollResult(characterName, block, diceResult, attriibute) {

        console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attriibute} = ${diceResult + attriibute}`)

}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`);

        //sortear bloco

        let block = await getRandomBLock()
        console.log(`Bloco: ${block}`) 

        //rolar os dados
        let  diceResult1 = await rollDice();
        let  diceResult2 = await rollDice();

        //teste de habilidade
        let TotalTestSkill1 = 0
        let TotalTestSkill2 = 0
    
        if(block == "RETA"){// um sina de '=' e atribuiçãoo dois sinais '==' comparação
            TotalTestSkill1 = diceResult1 + character1.VELOCIDADE
            TotalTestSkill2 = diceResult2 + character2.VELOCIDADE

            await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE)
            await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE)
        }
        if(block == "CURVA"){
            TotalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
            TotalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE

            await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE)
            await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE)
        }
        if(block == "CONFRONTO"){
            // Variáveis declaradas com "let ou const" têm escopo de bloco,
            // ou seja, só podem ser acessadas dentro dessas chaves { }
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontoou com ${character2.NOME}! 🥊`)

            await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER)
            await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER)
            
            //´é um if ternarioo: condição ? valorSeVerdadeiro : valorSeFalso
            //character2.PONTOS -= powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1 : 0;

            if(powerResult1 > powerResult2 && character2.PONTOS > 0){
                console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`)
                character2.PONTOS --;
            }
            if(powerResult2 > powerResult1 && character1.PONTOS > 0){
                 console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`)
                character1.PONTOS --;
            }

            console.log(powerResult2 === powerResult1 ? "Confronto empatado! Nenhum ponto foi perdido" : "")

        }
 
        //atribuiçoes de pontos
        if(TotalTestSkill1 > TotalTestSkill2){
            console.log(`${character1.NOME} marcou um ponto!`);
            character1.PONTOS++;
        }else if(TotalTestSkill2 > TotalTestSkill1){
            console.log(`${character2.NOME} marcou um ponto!`);
            character2.PONTOS++;
        }


        console.log("=======================================================")
    }
}

async function declareWinner(character1, character2){
    console.log("Resultado final:")
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`)
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`)

    //quando o if foor encadeadoo nos podemos cortar as'{}'
    if(character1.PONTOS > character2.PONTOS)
        console.log(`\n${character1.NOME} Venceu a corrida! Parabéns! 🏆`)
    else if(character2.PONTOS > character1.PONTOS)
         console.log(`\n${character2.NOME} Venceu a corrida! Parabéns! 🏆`)
    else
        console.log("\nA corrida terminou em empate")

    console.log("=======================================================")
    
}

// (async function main(params) { ... })()
// Isso é uma IIFE (Immediately Invoked Function Expression)
// Significa que a função é criada e chamada imediatamente
// O "async" permite usar "await" dentro dela, se necessário
(async function main(params) {
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando ... \n`);//se utilizar crase pode usar o ${} pra chammar uma variavel

    // "await" só pode ser usado dentro de funções marcadas com "async"
    await playRaceEngine(player1, player2);// "await" faz a execução dessa linha esperar a função "playRaceEngine" terminar antes de continuar

    await declareWinner (player1, player2);

})(); // <- esses parênteses finais fazem a função se executar sozinha


