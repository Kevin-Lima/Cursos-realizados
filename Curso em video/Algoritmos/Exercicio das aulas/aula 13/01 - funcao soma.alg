algoritmo "funcao soma"
var
   n1,n2,s: inteiro
Funcao soma(a,b:inteiro):inteiro
var
   s:inteiro
inicio
      s <- a + b
      Retorne s
Fimfuncao
inicio
      Escreva("Digite um numero: ")
      Leia(n1)
      Escreva("Digite outro numero: ")
      Leia(n2)
      
      s <- soma(n1,n2)
      
      Escreval("A soma entre",n1," e",n2," é igual a",s)
fimalgoritmo
