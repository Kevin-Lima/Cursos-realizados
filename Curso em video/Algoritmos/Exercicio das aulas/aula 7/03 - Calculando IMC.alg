algoritmo "CalculoIMC"
var
   M, A, IMC: Real
inicio
   Escreva("Massa (Kg): ")
   Leia(M)
   Escreva("Altura (m): ")
   Leia(A)
   IMC <- M / (A ^ 2)
   Escreval("IMC: ", IMC:5:2)

   Se (IMC < 17) entao
      Escreval("Muito abaixo do peso")
   senao
      Se (IMC < 18.5) entao
         Escreval("Abaixo do peso")
      senao
         Se (IMC < 25) entao
            Escreval("Parabéns! Você está no seu peso ideal")
         senao
            Se (IMC < 30) entao
               Escreval("Sobrepeso")
            senao
               Se (IMC < 35) entao
                  Escreval("Obesidade")
               senao
                  Se (IMC < 40) entao
                     Escreval("Obesidade severa")
                  senao
                     Escreval("Obesidade mórbida")
                  FimSe
               FimSe
            FimSe
         FimSe
      FimSe
   FimSe
fimalgoritmo
