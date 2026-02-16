algoritmo "matriz 3x2 com valores via teclado"
var
   m: vetor[1..3,1..2] de inteiro
   i,j:inteiro
inicio
      Para i <- 1 ate 3 faca
           Para j <- 1 ate 2 faca
                Escreva("Digite o valor da posição [",i,",",j,"]: ")
                Leia(m[i,j])
           FimPara
      FimPara
      
      Para i <- 1 ate 3 faca
           Para j <- 1 ate 2 faca
                Escreva(m[i,j]:5)
           FimPara
           Escreval()
      FimPara
fimalgoritmo
