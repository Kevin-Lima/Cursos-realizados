algoritmo "Está apto a dirigir?"
var
   ano_atual,ano_nascimento,idade: inteiro
inicio
      Escreval("---------------------------")
      Escreval(" DEPARTAMENTO DE TRANSITO")
      Escreval("---------------------------")
      Escreva("Ano Atual (yyyy): ")
      Leia(ano_atual)
      Escreva("Ano de Nascimento (yyyy): ")
      Leia(ano_nascimento)

      idade <- ano_atual - ano_nascimento

      se (idade >= 18) entao
         Escreval("-------- STATUS --------")
         Escreval("IDADE:",idade," ANOS")
         Escreval("APTO A TIRAR CARTEIRA")
         Escreval("------------------------")
      senao
           Escreval("-------- STATUS --------")
           Escreval("IDADE:",idade," ANOS")
           Escreval("INAPTO A TIRAR CARTEIRA")
           Escreval("------------------------")
         fimse

fimalgoritmo
