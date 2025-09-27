algoritmo "Tabela de partidas"
var
   quest: vetor[1..5] de caracter
   resp: vetor[1..15] de caracter
   nome: vetor[1..3] de caracter
   media: vetor[1..3] de inteiro
   i, j, k: inteiro
   mediaT: real
inicio
   // Passo 1: Cadastro de gabarito
   Escreval("PASSO 1 - Cadastro de gabarito")
   Escreval("------------------------------")

   Para i <- 1 ate 5 faca
      Escreva("Questao ", i, ": ")
      Leia(quest[i])
   FimPara

   k <- 1
   Para i <- 1 ate 3 faca
      Limpatela
      Escreval("--------------------")
      Escreval(" ALUNO ", i)
      Escreval("--------------------")

      Escreva("Nome: ")
      Leia(nome[i])
      Escreval("RESPOSTAS DADAS")

      Para j <- 1 ate 5 faca
         Escreva("Questao ", j, ": ")
         Leia(resp[k])
         k <- k + 1
      FimPara
   FimPara

   // Exibição das notas finais
   Limpatela
   Escreval(" NOTAS FINAIS ")
   Escreval("--------------------")

   mediaT <- 0
   k <- 1

   Para i <- 1 ate 3 faca
      media[i] <- 0
   FimPara

   Para i <- 1 ate 3 faca
      Para j <- 1 ate 5 faca
         Se (resp[k] = quest[j]) entao
            media[i] <- media[i] + 2
         FimSe
         k <- k + 1
      FimPara

      mediaT <- mediaT + media[i]

      Escreval(nome[i]:10, media[i])
   FimPara

   mediaT <- mediaT / 3

   Escreval("--------------------")
   Escreval("Media da Turma: ", mediaT:4:2)
fimalgoritmo

