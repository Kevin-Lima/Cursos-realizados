algoritmo "procedimento par ou impar"
var
   n: inteiro
Procedimento par_impar(a: inteiro)
inicio
      se(a % 2 = 0)entao
           Escreval("O numero",a," é par")
      senao
           Escreval("O numero",a," é impar")
      Fimse
FimProcedimento
inicio
      Escreva("Digite um numero: ")
      Leia(n)
      par_impar(n)

fimalgoritmo
