algoritmo "valore pares"
var
   v,c: inteiro
inicio
      Escreva("Digite um valor? ")
      Leia(v)
      
      se(v % 2 = 1)entao
           v <- v -1
      Fimse
      
      Para c <- v ate 0 passo -2 faca
           Escreval(c)
      FimPara
fimalgoritmo
