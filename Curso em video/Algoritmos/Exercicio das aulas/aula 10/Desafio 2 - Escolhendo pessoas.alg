algoritmo "Escolhendo Pessoas"
var
   resp,genero: caracter
   idade,cor,quant_h,quant_f: inteiro
inicio
      quant_h <- 0
      quant_f <- 0
      Repita
            Escreval("==========================")
            Escreval("    SELETOR DE PESSOAS    ")
            Escreval("==========================")

            Escreva("Qual o Sexo? [M/F] ")
            Leia(genero)
            Escreva("Qual a idade? ")
            Leia(idade)
            Escreva("Qual a cor do cabele? ")
            Escreval("")
            Escreval("---------------------")
            Escreval("[1]Preto")
            Escreval("[2]Castanho")
            Escreval("[3]Loiro")
            Escreval("[4]Ruivo")
            Leia(cor)

            Se (genero = "m") e (idade > 18) e (cor = 2) entao
               quant_h <- quant_h + 1
            Fimse
            Se (genero = "f") e (idade >= 25) e (idade <= 30) e (cor = 3) entao
               quant_f <- quant_f + 1
            FimSe

            Escreva("Quer  continuar? [S/N] ")
            Leia(resp)
      Ate(resp = "N")

      LimpaTela
      Escreval("-------------------------")
      Escreval("     RESULTADO FINAL     ")
      Escreval("-------------------------")
      Escreval("Total de homens com mais de 18 e cabelos castanhos ",quant_h)
      Escreval("Total de mulheres entre 25 e 30 e cabelos loiros ",quant_f)
fimalgoritmo
