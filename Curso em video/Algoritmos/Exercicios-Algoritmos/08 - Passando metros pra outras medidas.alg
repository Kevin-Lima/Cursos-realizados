algoritmo "Passando metros pra outras medidas"
var
   metros: real
inicio
      Escreva("Digite uma distância em metros: ")
      Leia(metros)
      Escreval("A distância de ", metros, "m corresponde a: ")
      Escreval()
      Escreval(metros / 1000:0:7, " Km",       metros  * 10:25:1, " Dm")
      Escreval(metros / 100:0:7, " Hm",       metros  * 100:25:1, " Cm")
      Escreval(metros / 10:0:7, " Dam",       metros  * 1000:25:1, " Mm")

fimalgoritmo

