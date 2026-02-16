algoritmo "Aumento de 15% no salario"
var
   salario,aumento,novo_salario: real
inicio
      Escreva("Qual o valor do produto? ")
      leia(salario)

      aumento <- (salario * 15) / 100
      novo_salario  <- salario + aumento

      Escreval("O salario de R$",salario," com o aumento de 15% ficará R$",novo_salario)
fimalgoritmo
