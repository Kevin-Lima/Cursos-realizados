algoritmo "Jogo da Velha"
var
  // Matriz 3x3 que representa o tabuleiro do jogo.
  // Cada célula pode armazenar "X", "O" ou um número representando a posição.
  v: vetor[1..3, 1..3] de Caractere

  // Variáveis inteiras para controle das linhas (L), colunas (C),
  // contador (Cont) que preenche as posições e a posição da jogada (Po).
  L, C, Cont, Po: Inteiro

  // Variável que guarda o símbolo do jogador atual, "X" ou "O".
  Simb: Caractere

  // Variável lógica que verifica se a jogada foi bem-sucedida ou não.
  R: Logico

// Procedimento para exibir o tabuleiro do jogo da velha.
Procedimento mostraVelha()
Inicio
   // Desenha a borda superior do tabuleiro.
   EscrevaL("+---+---+---+")

   // Laço que percorre as linhas do tabuleiro.
   Para L <- 1 ate 3 faca
      // Laço que percorre as colunas do tabuleiro.
      Para C <- 1 ate 3 faca
         // Exibe o valor da célula atual (X, O ou número da posição).
         Escreva("|  ", v[L,C]:1)
      FimPara

      // Finaliza a linha do tabuleiro.
      Escreva("|")
      // Quebra de linha para desenhar a próxima linha do tabuleiro.
      EscrevaL()

      // Desenha a borda inferior de cada linha.
      EscrevaL("+---+---+---+")
   FimPara
FimProcedimento

// Procedimento para alternar o jogador entre "X" e "O".
Procedimento mudaJogador()
inicio
   // Se o jogador atual for "X", muda para "O".
   Se (Simb = "X") entao
      Simb <- "O"
   senao
      // Caso contrário, muda para "X".
      Simb <- "X"
   FimSe
FimProcedimento

// Função que realiza uma jogada no tabuleiro.
Funcao Jogar(S: Caractere; P: Inteiro): Logico
Var
  // Variável para indicar se a jogada foi realizada com sucesso.
  mudou: logico
inicio
   // Inicializa como "falso", indicando que a jogada ainda não foi feita.
   mudou <- falso

   // Percorre todas as linhas e colunas do tabuleiro.
   Para L <- 1 ate 3 faca
      Para C <- 1 ate 3 faca
         // Verifica se a posição escolhida está disponível (não foi preenchida ainda).
         Se(v[L,C] = P) entao
            // Se a célula estiver disponível, faz a jogada do jogador (X ou O).
            v[L,C] <- S
            // Atualiza a variável "mudou" para indicar que a jogada foi feita.
            mudou <- verdadeiro
         FimSe
      FimPara
   FimPara

   // Retorna "verdadeiro" se a jogada foi válida, caso contrário retorna "falso".
   Retorne mudou
FimFuncao

// Função para verificar se o jogo terminou (vitória ou empate).
Funcao TerminouVelha(): Logico
Var
  // Variável para indicar se o jogo terminou.
  terminou: Logico
  // Variável para contar quantas posições estão vazias no tabuleiro.
  ocorr: Inteiro
inicio
   // Inicializa como "falso", indicando que o jogo ainda não terminou.
   terminou <- falso

   // Verificação das linhas: se todas as células de uma linha forem iguais, o jogo terminou.
   Para L <- 1 ate 3 faca
      Se (v[L,1] = v[L,2]) e (v[L,2] = v[L,3]) entao
         terminou <- verdadeiro
      FimSe
   FimPara

   // Verificação das colunas: se todas as células de uma coluna forem iguais, o jogo terminou.
   Para C <- 1 ate 3 faca
      Se (v[1,C] = v[2,C]) e (v[2,C] = v[3,C]) entao
         terminou <- verdadeiro
      FimSe
   FimPara

   // Verificação das diagonais: se todas as células de uma diagonal forem iguais, o jogo terminou.
   Se (v[1,1] = v[2,2]) e (v[2,2] = v[3,3]) entao
      terminou <- verdadeiro
   FimSe
   Se (v[1,3] = v[2,2]) e (v[2,2] = v[3,1]) entao
      terminou <- verdadeiro
   FimSe

   // Verificação de empate (velha): se não houver mais células vazias, o jogo terminou.
   ocorr <- 0
   Para L <- 1 ate 3 faca
      Para C <- 1 ate 3 faca
         // Conta as células que não são "X" nem "O".
         Se (v[L,C] <> "X") e (v[L,C] <> "O") entao
            ocorr <- ocorr + 1
         FimSe
      FimPara
   FimPara
   Se (ocorr = 0) entao
      terminou <- verdadeiro
   FimSe

   // Retorna "verdadeiro" se o jogo terminou (vitória ou empate), caso contrário retorna "falso".
   Retorne terminou
FimFuncao

// Fluxo principal do jogo.
inicio
   // Inicializa o contador que será usado para preencher as células do tabuleiro com números.
   Cont <- 1
   // Inicializa o jogador "X" como o primeiro a jogar.
   Simb <- "X"

   // Preenche o tabuleiro com números de 1 a 9, representando as posições disponíveis.
   Para L <- 1 ate 3 faca
      Para C <- 1 ate 3 faca
         v[L,C] <- Cont  // Atribui diretamente o número da posição à célula.
         Cont <- Cont + 1
      FimPara
   FimPara

   // Exibe o tabuleiro inicial.
   MostraVelha()

   // Laço principal do jogo, que continua até o jogo terminar.
   Repita
      // Laço para garantir que a jogada será válida.
      Repita
         // Solicita ao jogador a posição onde deseja jogar.
         EscrevaL("Vai jogar [", simb:1, "] em qual posicao? ")
         Leia(Po)
         // Tenta fazer a jogada na posição indicada.
         R <- Jogar(Simb, Po)

         // Se a jogada for inválida, exibe uma mensagem de erro.
         Se (R = falso) entao
            EscrevaL("JOGADA INVALIDA!")
         FimSe
      Ate (R = verdadeiro)

      // Alterna o jogador após cada jogada.
      MudaJogador()

      // Limpa a tela para desenhar o tabuleiro atualizado.
      LimpaTela

      // Exibe o tabuleiro atualizado após a jogada.
      MostraVelha()

   // Continua o jogo até a função TerminouVelha retornar "verdadeiro" (fim do jogo).
   Ate (terminouVelha() = verdadeiro)

   // Exibe a mensagem final quando o jogo termina.
   EscrevaL("JOGO FINALIZADO!!!")
fimalgoritmo

