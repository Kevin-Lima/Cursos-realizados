algoritmo "somando os numeros do usuario"
var
   contador, numero, soma, n_maior, menor: inteiro
inicio
   contador <- 1
   soma <- 0

   Escreva("Digite o 1o. Valor: ")
   Leia(numero)

   n_maior <- numero
   menor <- numero
   soma <- numero

   Enquanto contador < 5 faca
      contador <- contador + 1
      Escreva("Digite o ", contador, "o. Valor: ")
      Leia(numero)

      soma <- soma + numero

      Se (n_maior < numero) entao
         n_maior <- numero
      FimSe

      Se (menor > numero) entao
         menor <- numero
      FimSe
   FimEnquanto

   Escreval("A soma de todos os valores foi: ", soma)
   Escreval("O maior número que você digitou foi: ", n_maior, " e o menor foi: ", menor)
fimalgoritmo

