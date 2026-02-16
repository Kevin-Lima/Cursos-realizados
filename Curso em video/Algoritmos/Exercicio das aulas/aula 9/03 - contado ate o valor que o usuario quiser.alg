algoritmo "contado ate o valor que o usuario quiser"
var
   contador,valor,salto: inteiro
inicio
      Escreva("Até que valor voce quer que o sistema conte? ")
      Leia(valor)
      Escreva("Qual sera o valor do salto? ")
      Leia(salto)
      contador <- 0
      
      se (valor >= 0)entao
         Enquanto contador <= valor faca
              Escreval(contador)
              contador <- contador + salto
         FimEnquanto
      senao
           Enquanto contador >= valor faca
                 Escreval(contador)
                 contador <- contador - salto
           FimEnquanto
      Fimse
      
fimalgoritmo
