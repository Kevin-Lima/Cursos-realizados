algoritmo "Aluno aprovado ou reprovado?"
var
   n1,n2,media: real
inicio
      Escreval("-----------------------")
      Escreval(" ESCOLA JAVALI CANSADO")
      Escreval("-----------------------")
      Escreva(" Primeira nota: ")
      Leia(n1)
      Escreva(" Segunda nota: ")
      Leia(n2)
      media <- (n1 + n2) / 2
      
      se (media >= 7) entao
         Escreval("-----------------------")
         Escreval(" MEDIA: ",media)
         Escreval(" ALUNO APROVADO")
         Escreval("-----------------------")
      senao
           Escreval("-----------------------")
           Escreval(" MEDIA: ",media)
           Escreval(" ALUNO REPROVADO")
           Escreval("-----------------------")
      fimse
fimalgoritmo
