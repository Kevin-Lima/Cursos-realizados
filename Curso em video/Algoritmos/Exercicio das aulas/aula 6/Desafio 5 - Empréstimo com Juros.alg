algoritmo "Empréstimo com Juros"
var
   valor, juros, valor_juros, juros_parcela: real
   parcela: inteiro
inicio
   escreva("Qual o valor do empréstimo? ")
   leia(valor)
   juros <- (valor * 20) / 100
   valor_juros <- valor + juros

   escreva("Deseja parcelar em quantas vezes? ")
   leia(parcela)

   juros_parcela <- valor_juros / parcela
   escreval("Você fará um empréstimo de R$", valor:0:2)
   escreval("E terá que pagar um juros de 20%, que ficará R$", valor_juros:0:2)
   escreval("O valor total do juros será de R$", juros:0:2)
   escreval("Você fará ", parcela, " parcelas.")
   escreval("Com o juros adicionado, cada parcela ficará em R$", juros_parcela:0:2)
fimalgoritmo

