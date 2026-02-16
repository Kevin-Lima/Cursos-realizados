algoritmo "funcao par ou impar"
var
      n: inteiro
      r: caractere
inicio
Funcao par_impar(a: inteiro):caracter
inicio
     Se(a % 2 = 0)entao
          Retorne "Par"
     senao
          Retorne "Impar"
     Fimse
FimFuncao
      Escreva("Digite um numero: ")
      Leia(n)
      r <- par_impar(n)
      Escreval("O nuemro",n," é um valor ",r)
fimalgoritmo
