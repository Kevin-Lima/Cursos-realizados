algoritmo "Tabuada"
var
   contador,n,r: inteiro
Procedimento tabuada(contador,n,r: inteiro)
inicio
      Repita
            r <- n * contador
            Escreval(n," x ",contador," = ",r)
            contador <- contador + 1
      Ate (contador > 10)a
FimProcedimento
inicio
      contador <- 1
      Escreva("Quer ver a tabuada de qual numero? ")
      Leia(n)

      tabuada(contador,n,r)

      escreva(contador)

fimalgoritmo
