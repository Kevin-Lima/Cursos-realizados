algoritmo "Desconto de 5%"
var
   produto,desconto,produto_promo: real
inicio
      Escreva("Qual o valor do produto? ")
      leia(produto)
      
      desconto <- (produto * 5) / 100
      produto_promo  <- produto - desconto
      
      Escreval("O produto de R$",produto," com preço promocional ficará R$",produto_promo)
fimalgoritmo
