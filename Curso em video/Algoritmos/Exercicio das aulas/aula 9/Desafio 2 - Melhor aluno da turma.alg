algoritmo "Melhor aluno da turma"
var
   a,contador: inteiro
   nota,notaf: real
   nome,nomef: caractere
inicio
      Escreval("------------------------")
      Escreval(" Escola Santa Paciencia ")
      Escreval("------------------------")
      
      Escreva("Quantos alunos a turma tem? ")
      Leia(a)
      Escreval("------------------------")
      
      contador <- 1
      notaf <- 0
      
      Enquanto contador <= a faca
               Escreval("ALUNO",contador)
               Escreva("Nome do aluno: ")
               Leia(nome)
               Escreva("Nota de ",nome,": ")
               Leia(nota)
               Escreval("------------------------")
               
               se (notaf < nota)entao
                  notaf <- nota
                  nomef <- nome
               Fimse
               
               contador <- contador + 1
      FimEnquanto
      
      Escreval("O melhor aproveitamento foi de ",nomef," com a nota",notaf)
      
fimalgoritmo
