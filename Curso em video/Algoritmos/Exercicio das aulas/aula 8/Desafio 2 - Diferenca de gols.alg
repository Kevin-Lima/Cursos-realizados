algoritmo "Diferenca de gols"
var
   ban,mad,dif: inteiro
inicio
      Escreval("  BANGU x MADUREIRA")
      Escreval("---------------------")
      Escreva("Quantos gols do BANGU? ")
      Leia(ban)
      Escreva("Quantos gols do MADUREIRA? ")
      Leia(mad)
      
      se (ban >= mad)entao
         dif <- ban - mad
      senao
           dif <- mad - ban
      Fimse
      
      Escreval("---------------------")
      Escreval(" DIFERENÇA: ",dif)

      Escolha dif
      caso 0
           Escreval(" STATUS: EMPATE")
      caso 1,2,3
           Escreval(" STATUS: PARTIDA NORMAL")
      OutroCaso
               Escreval(" STATUS: GOLEADA")
      FimEscolha
      Escreval("---------------------")
fimalgoritmo
