algoritmo "criando uma matriz identidade de 3 ordem"
var
  m: vetor[1..3, 1..3] de Inteiro
  l, c: Inteiro
inicio
   // daria pra fazer isso:
   //m[1,1] <- 1
   //m[2,2] <- 1
   //m[3,3] <- 1
   
   //mas vou fazer assim:
   
   Para l <- 1 ate 3 faca
        Para c <- 1 ate 3 faca
             Se(l = c)entao
                  m[l,c] <- 1
             senao
                  m[l,c] <- 0
             FimSe
        FimPara
   FimPara

   Para l <- 1 ate 3 faca
      Para c <- 1 ate 3 faca
           Escreva(m[l, c]:2)
      FimPara
      Escreval()
   FimPara
fimalgoritmo
