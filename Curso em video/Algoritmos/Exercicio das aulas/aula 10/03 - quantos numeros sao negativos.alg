algoritmo "quantos numeros sao negativos"
var
   contador,n,negativo,resp: inteiro
inicio
      contador <- 0
      Escreva("Quantos numeros voce deseja escrever? ")
      Leia(resp)
      
      Repita
        Escreva("Digite um numero: ")
        Leia(n)
        
        contador <- contador + 1
        
        se (n < 0)entao
           negativo <- negativo + 1
        Fimse
      Ate(resp = contador)
      
      Escreval("Voce digitou",contador," numeros e desses,",negativo," sao negativos")
fimalgoritmo
