algoritmo "Aproveitamento de um aluno"
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
      Escreval("-----------------------")
      Escreval(" MEDIA: ",media)

      se (media >= 9) entao
         Escreval(" APROVEITAMENTO: A")
      senao
           se (media >= 8) e (media < 9) entao
              Escreval(" APROVEITAMENTO: B")
           senao
                se (media >= 7) e (media < 8) entao
                   Escreval(" APROVEITAMENTO: C")
                senao
                     se (media >= 6) e (media < 7) entao
                        Escreval(" APROVEITAMENTO: D")
                     senao
                          se (media >= 5) e (media < 6) entao
                             Escreval(" APROVEITAMENTO: E")
                          senao
                               Escreval(" APROVEITAMENTO: F")
                          Fimse
                     Fimse
                Fimse
           Fimse
      Fimse
      Escreval("-----------------------")
fimalgoritmo

