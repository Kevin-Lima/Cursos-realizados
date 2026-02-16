algoritmo "Analisador de valores"
var
   c, v, s, soma_media, div5, valorN, somaP: inteiro
   media: real
inicio
   s <- 0
   soma_media <- 0
   div5 <- 0
   valorN <- 0
   somaP <- 0

   Para c <- 1 ate 5 faca
      Escreva("Digite o ", c, "o. Valor: ")
      Leia(v)

      s <- s + v
      soma_media <- soma_media + v

      Se (v % 5 = 0) entao
         div5 <- div5 + 1
      FimSe

      Se (v = 0) entao
         valorN <- valorN + 1
      FimSe

      Se (v % 2 = 0) entao
         somaP <- somaP + v
      FimSe
   FimPara

   media <- soma_media / 5

   Escreval("Soma dos valores: ", s)
   Escreval("Média dos valores: ", media:0:2)
   Escreval("Números divisíveis por 5: ", div5)
   Escreval("Quantidade de zeros digitados: ", valorN)
   Escreval("Soma dos números pares: ", somaP)
fimalgoritmo

