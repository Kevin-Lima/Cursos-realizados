algoritmo "quantas vezes sera feita a conversal pro dolar"
var
   c, q: inteiro
   reais, dolar: real
inicio
      c <- 1

      Escreva("Quantas vezes voce quer converter? ")
      Leia(q)

      Enquanto c <= q faca
               Escreva("Quantos reais voce tem? ")
               Leia(reais)
               dolar <- reais / 6.19
               EscrevaL("Voce tem ", dolar:5:2, " dolares")
               c <- c + 1
      FimEnquanto
fimalgoritmo

