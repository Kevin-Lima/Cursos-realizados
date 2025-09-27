algoritmo "Tabuada"
var
   contador,n,r: inteiro
inicio
      contador <- 1
      Escreva("Quer ver a tabuada de qual numero? ")
      Leia(n)

      Repita
            r <- n * contador
            Escreval(n," x ",contador," = ",r)
            contador <- contador + 1
      Ate (contador > 10)

fimalgoritmo
