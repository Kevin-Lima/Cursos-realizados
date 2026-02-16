algoritmo "Aluno aprovado, reprovado ou em recuperaçao"
var
   n1,n2,media: Real
inicio
      Escreva("Primeira nota: ")
      Leia(n1)
      Escreva("Segunda nota: ")
      Leia(n2)
      media <- (n1 + n2) / 2
      Escreval("A media é de",media:0:2)
      
      se (media >= 7)entao
         Escreval("Aluno  APROVADO")
      senao
           se (media >= 5) e (media < 7)entao
              Escreval("Aluno em RECUPERAÇÂO")
           senao
                Escreval("Aluno REPROVADO")
           Fimse
      Fimse
fimalgoritmo
