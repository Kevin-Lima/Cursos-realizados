algoritmo "Cálculo de tinta necessária"
var
   largura, altura, area, tinta: real
inicio
   Escreva("Digite a largura da parede (m): ")
   Leia(largura)
   Escreva("Digite a altura da parede (m): ")
   Leia(altura)

   area <- largura * altura
   
   tinta <- area / 2

   Escreval("A área da parede é de ", area:0:2, " m²")
   Escreval("Você precisará de ", tinta:0:2, " litros de tinta")
fimalgoritmo

