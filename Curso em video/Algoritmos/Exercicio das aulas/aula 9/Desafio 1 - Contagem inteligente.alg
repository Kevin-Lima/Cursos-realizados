algoritmo "Contagem inteligente"
var
   contador,i,f: inteiro
inicio
      Escreval("CONTAGEM INTELIGENTE")
      Escreval("--------------------")
      
      Escreva("Inicio: ")
      Leia(i)
      Escreva("Fim: ")
      Leia(f)
      
      Escreval("-------------------")
      Escreval("  C O N T A N D O  ")
      Escreval("-------------------")
      

      
      se (i < f)entao
         contador <- i
         Enquanto contador <= f faca
                  Escreva(contador,".. ")
                  contador <- contador + 1
         FimEnquanto
      senao
           contador <- i
           Enquanto contador >= f faca
                    Escreva(contador,".. ")
                    contador <- contador - 1
           FimEnquanto
      Fimse
         

fimalgoritmo
