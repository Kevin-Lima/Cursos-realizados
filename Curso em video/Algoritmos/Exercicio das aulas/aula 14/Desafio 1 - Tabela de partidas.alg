algoritmo "tabela de partidas"
var
   time: vetor[1..3] de caracter
   i,j:inteiro
inicio
      Escreval("------------------")
      Escreval("CAMPEONATO FUTEBOL")
      Escreval("------------------")

      Para i <- 1 ate 3 faca
           Escreva("Nome do",i,"o. time: ")
           Leia(time[i])
      FimPara

      Limpatela
      Escreval("--------------------")
      Escreval(" TABELA DE PARTIDAS")
      Escreval("--------------------")

      Para i <- 1 ate 3 faca
           Para j <- 1 ate 3 faca
                Se(time[i] <> time[j])entao
                   Escreval(time[i]:10,"[] x []  ",time[j])
                FimSe
           FimPara
      FimPara

fimalgoritmo
