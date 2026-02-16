algoritmo "semnome"
var
   Produto,Taxa: real
inicio
      escreva("Qual é o valor do produto? US$ ")
      leia(Produto)
      Taxa <- (Produto * 60) / 100
      escreva("O juros que voce pagara sera de US$",Taxa:0:2)
fimalgoritmo
