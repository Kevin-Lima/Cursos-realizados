algoritmo "Lendo o nome e o salario"
var
   nome: Caractere
   sal: Real
inicio
   // Solicita o nome do funcionário
   Escreva("Nome do Funcionário: ")
   Leia(nome)

   // Solicita o salário do funcionário
   Escreva("Salário (use vírgula para casas decimais): ")
   Leia(sal)

   // Exibe a mensagem formatada
   Escreval("O funcionário ", nome, " tem um salário de R$", sal:0:2, " em Junho.")
fimalgoritmo

