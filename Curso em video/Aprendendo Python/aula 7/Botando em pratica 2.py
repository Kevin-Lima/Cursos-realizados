n1 = int(input('Digite uma número inteiro: '))
n2 = int(input('Digite outro valor: '))
s = n1 + n2
m = n1 * n2
d = n1 / n2
di = n1 // n2
e = n1 ** n2
print(f'A soma é {s}, o produto é {m} e a divisão é {d:.3f}')
print(f'Divisão inteira {di} e potência {e}')

#ou

#esse "end" no final do primeiro print vai fazer com que ele não quebre linha quando for passar para o proximo print
print(f'A soma é {s}, o produto é {m} e a divisão é {d:.3f}', end = ' ')
print(f'Divisão inteira {di} e potência {e}')

#ou

#esse "\n" vai fazer com que quebre a linha sem precisar que fique criando um monte de print
print(f' A soma é {s} \n o produto é {m} \n divisão é {d:.3f}')
print(f'Divisão inteira {di} \n potência {e}')